import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import GrowthPanel from "@/components/GrowthPanel";
import ChildService from "@/libs/ChildService/ChildService";
import { IChildData } from "@/libs/ChildService/ChildServiceModel";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session){
    const childServiceClass = new ChildService(session?.accessToken)
    console.log(session.user.pid)
    const response = await childServiceClass.getChildByID(
      session.user.pid
    );
    console.log(response.data.data)
    const children = Object.entries(response.data.data).map(([key, child]: [string, IChildData]) => ({
      ...child,
      key: parseInt(key, 10), 
    }));
    const childDetails = children.map((child) => {
      return { childpid: child.PID, childname: child.NAME };
    });
    console.log(childDetails)
  
    return (
      <div className="bg-Bg">
        <GrowthPanel
          token={session?.accessToken || ""}
          pid={session?.user.pid || ""}
          childDetails={childDetails}
        />
      </div>
    );
  }
  return(
    <div className="bg-Bg">
      <GrowthPanel
        token={""}
        pid={ ""}
        childDetails={[]}
      />
    </div>
  );
  }
  
