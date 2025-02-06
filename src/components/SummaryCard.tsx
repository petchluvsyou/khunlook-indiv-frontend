"use client"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSyringe } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "./summary/ProgressBar";
import VaccineList from "./summary/VaccineList";

export default function SummaryCard({ age }: { age: string }) {
     const [option, setOption] = useState<"development" | "vaccine">("development");

     return (
          <div className="relative flex flex-col space-y-3 p-4 bg-Yellow rounded-xl">
               {/* Age Label */}
               <div className="absolute -top-3 -left-3 bg-white text-black text-sm font-bold px-3 py-1 rounded-full shadow-md">
                    {age}
               </div>

               {/* Option panel */}
               <div className="flex justify-start space-x-3">
                    {/* Development Option */}
                    <div
                         onClick={() => setOption("development")}
                         className={`flex items-center gap-2 p-2 rounded-full cursor-pointer transition-all duration-300 
      ${option === "development" ? "w-36 bg-white text-Yellow shadow-md" : "w-12 bg-gray-300 hover:bg-gray-200"}`}
                    >
                         <FontAwesomeIcon icon={faStar} className="text-Yellow" size="lg" />
                         {option === "development" && <span className="text-sm font-medium">Development</span>}
                    </div>

                    {/* Vaccine Option */}
                    <div
                         onClick={() => setOption("vaccine")}
                         className={`flex items-center gap-2 p-2 rounded-full cursor-pointer transition-all duration-300 
      ${option === "vaccine" ? "w-36 bg-white text-Yellow shadow-md" : "w-12 bg-gray-300 hover:bg-gray-200"}`}
                    >
                         <FontAwesomeIcon icon={faSyringe} className="text-Yellow" size="lg" />
                         {option === "vaccine" && <span className="text-sm font-medium">Vaccine</span>}
                    </div>
               </div>

               {/* Information panel */}
               <div>
                    {option == "development" ? (
                         <div className="flex flex-col space-y-2 w-64 bg-white rounded-md p-4">
                              <ProgressBar name="การเคลื่อนไหว" score={4.5} />
                              <ProgressBar name="การใช้กล้ามเนื้อมัดเล็กและสติปัญญา" score={4} />
                              <ProgressBar name="การเข้าใจภาษา" score={3} />
                              <ProgressBar name="การใช้ภาษา" score={5} />
                              <ProgressBar name="การช่วยเหลือตัวเองและสังคม" score={1} />
                         </div>
                    ) : (
                         <div className="flex flex-col space-y-2 w-64 bg-white rounded-md p-4">
                              <VaccineList name="วัคซีนจำเป็นที่ได้รับแล้ว" vaccines={["BCG", "Hep B", "DTP", "Polio", "MMR", "Flu", "COVID-19"]} />
                              <VaccineList name="วัคซีนเสริมที่ได้รับแล้ว" vaccines={["DTP-IPV-HB-Hib3", "DTP-IPV-HB-Hib4"]} />
                         </div>
                    )}
               </div>
          </div>
     );
}
