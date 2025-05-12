"use client";
import UserService from "@/libs/UserService/UserService";
import { useAuth } from "@/providers/AuthContext";
import { useState, useEffect } from "react";

interface UserProfile {
  ID: number;
  HOSPCODE: string;
  CID: string;
  PID: string;
  HID: string;
  PRENAME: string;
  NAME: string;
  LNAME: string;
  HN: string;
  SEX: string;
  BIRTH: string;
  MSTATUS: string;
  OCCUPATION_OLD: string;
  OCCUPATION_NEW: string;
  RACE: string;
  NATION: string;
  RELIGION: string;
  EDUCATION: string;
  FSTATUS: string;
  FATHER: string;
  MOTHER: string;
  COUPLE: string;
  VSTATUS: string;
  MOVEIN: string;
  DISCHARGE: string;
  DDISCHARGE: string;
  ABOGROUP: string;
  RHGROUP: string;
  LABOR: string;
  PASSPORT: string;
  TYPEAREA: string;
  D_UPDATE: string;
  START_DATE: string;
  END_DATE: string;
}

export default function page() {
  const { user, accessToken } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (accessToken) {
      const fetchProfile = async () => {
        try {
          const userService = new UserService();
          const profileData = await userService.userGet({
            token: accessToken,
            userId: user?.ID ?? "1",
          });

          console.log(profileData);
          setProfile(profileData.data);
        } catch (err) {
          console.error("Failed to load profile:", err);
        }
      };

      fetchProfile();
    }
  }, [accessToken]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="justify-center items-center text-center relative z-10 flex flex-col p-12 bg-Bg gap-1 top-[64px] sm:top-[92px] w-full">
      <p className="text-4xl">test</p>
      <p className="text-3xl lg:text-4xl">Hi {user.username}</p>
      {profile && (
        <div>
          <p className="text-3xl lg:text-4xl">CID: {profile.CID}</p>
          <p className="text-base lg:text-md text-gray-200 font-light">
            PID: {profile.PID}
          </p>
          <p className="text-base lg:text-md text-gray-200 font-light">
            HID: {profile.HID}
          </p>
        </div>
      )}
    </div>
  );
}
