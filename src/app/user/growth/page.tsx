import GrowthPanel from "@/components/GrowthPanel";
import ChildService from "@/libs/ChildService/ChildService";
import { useSession } from "next-auth/react";


export default async function Page() {
  const session = useSession()
  let children: any[] = [];

  if (session) {
    const childService = new ChildService(session.data?.accessToken);
    const response = await childService.getChildByID(session.data?.user.pid || "0");
    children = response.data.data; 
  }
  const childDetails = children.map((childObj) => {
    const key = Object.keys(childObj)[0];
    const child = childObj[parseInt(key)];
    return { childpid: child.PID, childname: child.NAME };
  });

  return (
    <div className="bg-Bg">
      <GrowthPanel
        token={session ? session.data?.accessToken||"" : ""}
        pid={session ? session.data?.user.pid||"" : ""}
        childDetails={childDetails}
      />
    </div>
  );
}
