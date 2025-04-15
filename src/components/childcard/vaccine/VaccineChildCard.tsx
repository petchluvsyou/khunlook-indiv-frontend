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
          <div className="relative flex flex-col space-y-3 p-4 bg-Yellow rounded-xl h-full">

               {/* Vaccine Information panel */}
               <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                         <div className="flex items-center gap-2 p-2 rounded-full transition-all duration-300 w-36 bg-white text-Yellow shadow-md">
                              <FontAwesomeIcon icon={faSyringe} className="text-Yellow" size="lg" />
                              <span className="text-sm font-medium">สรุปวัคซีน</span>
                         </div>

                         <div className="flex flex-col space-y-2 w-64 bg-white rounded-md p-4 relative">
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
                                   การได้รับวัคซีน: 
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
     );
}





