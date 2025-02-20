import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import GrowthPanel from "@/components/GrowthPanel";
import getChild from "@/libs/getChild";
import { getServerSession } from "next-auth";

interface ChildrenJson {
  message: string;
  data: {
    additionalProp1: Child[];
  };
  success: 0;
}

interface Child {
  momcid: number;
  childcid: number;
  childpid: string;
  childhospcode: string;
  childname: string;
  datepickerchild: string;
  sexchild: string;
  gaweek: number;
  childfullname: string;
  childbtime: string;
  childabo: string;
  childrh: string;
  childmemo: string;
  lowbtweigth: number;
  birthAsphyxia: string;
}

export default async function Page() {
  const session = await getServerSession(authOptions);
  const children: { [key: number]: Child }[] = [];

  if (session) {
    const childrenJson: Promise<ChildrenJson> = getChild(
      session.accessToken,
      session.user.pid
    );
    const childrenJsonReady = await childrenJson;
    const children = childrenJsonReady.data.additionalProp1;
  }

  const childDetails = children.map((childObj) => {
    const key = Object.keys(childObj)[0];
    const child = childObj[parseInt(key)];
    return { childpid: child.childpid, childname: child.childname };
  });

  return (
    <div className="bg-Bg">
      <GrowthPanel
        token={session ? session.accessToken : ""}
        pid={session ? session.user.pid : ""}
        childDetails={childDetails}
      />
    </div>
  );
}
