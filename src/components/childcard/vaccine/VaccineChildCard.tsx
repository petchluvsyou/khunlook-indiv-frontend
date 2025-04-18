"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSyringe } from "@fortawesome/free-solid-svg-icons";

type ChildDetailsProps = {
     childName: string;
     childAge: string;
     childBD: string;
     hasReceivedAllVaccines: boolean;
     missingVaccines: string[];
};

export default function VaccineChildCard({
     childName,
     childAge,
     childBD,
     hasReceivedAllVaccines,
     missingVaccines,
}: ChildDetailsProps) {
     return (
          <div className="relative flex flex-col p-4">
               {/* Wrapper for hover effect */}
               <div className="group flex flex-col items-start space-y-3">

                    {/* Vaccine Summary Button */}
                    <div className="flex items-center gap-2 p-2 rounded-full transition-all duration-300 w-36 bg-white text-Yellow shadow-md group-hover:bg-Yellow group-hover:text-white cursor-pointer">
                         <FontAwesomeIcon icon={faSyringe} className="transition-all duration-300 group-hover:text-white" size="lg" />
                         <span className="text-sm font-medium transition-all duration-300">สรุปวัคซีน</span>
                    </div>

                    {/* Detail Box (show on hover) */}
                    <div className="transition-all duration-300 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 bg-Yellow p-2 rounded-xl">
                         <div className="flex flex-col space-y-2 w-64 bg-white rounded-md p-4">
                              <p className="text-left text-sm font-bold text-black">
                                   น้อง: <span className="font-medium">{childName}</span>
                              </p>
                              <p className="text-left text-sm font-bold text-black">
                                   อายุ: <span className="font-medium">{childAge}</span>
                              </p>
                              <p className="text-left text-sm font-bold text-black">
                                   วันเกิด: <span className="font-medium">{childBD}</span>
                              </p>
                              <p className="text-left text-sm font-bold text-black">
                                   การได้รับวัคซีน:{" "}
                                   {hasReceivedAllVaccines ? (
                                        <span className="font-medium">ฉีดวัคซีนครบแล้ว</span>
                                   ) : (
                                        <span className="font-medium">
                                             ยังไม่ได้ฉีดวัคซีน: {missingVaccines.join(", ")}
                                        </span>
                                   )}
                              </p>
                         </div>
                    </div>

               </div>
          </div>

     )
}





