"use client";

import GrowthPanel from "@/components/GrowthPanel";
import ChildService from "@/libs/ChildService/ChildService";
import { IChildData } from "@/libs/ChildService/ChildServiceModel";
import GrowthService from "@/libs/GrowthService/GrowthService";
import { useAuth } from "@/providers/AuthContext";
import { useEffect, useState } from "react";

export default function Page() {
  const { accessToken, user } = useAuth();
  const [childDetails, setChildDetails] = useState<
    { childpid: string; childname: string; childbirthdate: string }[]
  >([]);

  useEffect(() => {
    const fetchChildren = async () => {
      if (user && accessToken) {
        try {
          const service = new GrowthService(accessToken);
          let results: any[] = [];
          for (let i = 6; i <= 9; i++) {
            const res = await service.queryResult({
              sex: "1",
              typeGraph: i,
              // minFirstGL: 50,
              // maxFirstGL: i !== 2 ? 0 : 99,
              // minSecondGL: i !== 2 ? 0 : 100,
              // maxSecondGL: i !== 2 ? 999 : 119,
              // minThirdGL: i !== 2 ? 0 : 120,
              // maxThirdGL: i !== 2 ? 0 : 999,
            });
            console.log(i, res);
            results.push(res.data.data?.[0] ?? []);
          }
          const childService = new ChildService(accessToken);
          const response = await childService.getChildByID(user?.PID);
          const children = Object.entries(response.data.data).map(
            ([key, child]: [string, IChildData]) => ({
              ...child,
              key: parseInt(key, 10),
            })
          );
          const details = children.map((child) => ({
            childpid: child.PID,
            childname: child.NAME,
            childbirthdate: child.BIRTH,
          }));
          setChildDetails(details);
        } catch (error) {
          console.error("Failed to fetch child data:", error);
        }
      }
    };

    fetchChildren();
  }, [user, accessToken]);

  return (
    <div className="bg-Bg">
      <GrowthPanel
        token={accessToken || ""}
        pid={user?.PID || ""}
        childDetails={childDetails}
      />
    </div>
  );
}
