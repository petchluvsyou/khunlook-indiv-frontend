"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function page() {
     const [vaccineOption, setVaccineOption] = useState<'required' | 'optional'>('required');
     const [age, setAge] = useState<'lt1' | 'mt1'>('lt1');

     const handleVaccineOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          setVaccineOption(e.target.value as 'required' | 'optional');
     };


     return (
          <div className="min-h-screen justify-center items-center text-center relative z-0 flex flex-col p-12 bg-[#F8F8F8] gap-1 top-[64px] sm:top-[92px] w-full">
               <h1 className="font-bold text-[24px] sm:text-5xl mb-12 mt-5 sm:mb-16">ข้อมูลการรับวัคซีน</h1>
               <div className="mb-8 flex items-center">
                    <label htmlFor="vaccineOption" className="text-gray-700 mr-2">วัคซีน</label>
                    <select
                         id="vaccineOption"
                         value={vaccineOption}
                         onChange={handleVaccineOptionChange}
                         className="p-2 border border-gray-300 rounded w-48"
                    >
                         <option key='required' value='required'>จำเป็น</option>
                         <option key='optional' value='optional'>เสริมหรือทดแทน</option>
                    </select>
                    <label htmlFor="vaccineOption" className="text-gray-700 mr-2">ที่ควรได้รับสำหรับเด็กปฐมวัย</label>
               </div>
               {vaccineOption === 'required' ? (
                    age === 'lt1' ? (
                         <div className="grid grid-cols-7 gap-2 bg-white p-10 rounded-md shadow-lg mt-4">
                              <div
                                   className="col-span-7 text-[#D49D44] text-right font-bold hover:text-[#B88433] hover:scale-105 transform transition-all duration-200 cursor-pointer"
                                   onClick={() => setAge('mt1')}
                              >
                                   มากกว่า 1 ปี
                                   <FontAwesomeIcon icon={faArrowRight} className="text-[#D49D44] text-xl ml-2" />
                              </div>

                              {/* Header Row */}
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">อายุ</div>
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">แรกเกิด</div>
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">2 เดือน</div>
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">4 เดือน</div>
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">6 เดือน</div>
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">9 เดือน</div>
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">12 เดือน</div>


                              {/* Vaccine Rows */}
                              {/* BCG */}
                              <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนวัณโรค (BCG)</div>
                              <div className="col-span-1 bg-[#F8F8F8] p-4 text-center rounded-md">BCG</div>
                              <div className="col-span-5 p-4"></div>

                              {/* HBV */}
                              <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนตับอักเสบบี (HBV)</div>
                              <div className="col-span-1 bg-[#F8F8F8] p-4 text-center rounded-md">HBV1</div>
                              <div className="col-span-5 p-4"></div>

                              {/* DTPHB */}
                              <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนคอตีบ,บาดทะยัก (DTPHB)</div>
                              <div className="col-span-1 p-4"></div>
                              <div className="col-span-1 bg-[#F8F8F8] p-4 text-center rounded-md">DTPHB 1</div>
                              <div className="col-span-1 bg-[#F8F8F8] p-4 text-center rounded-md">DTPHB 2</div>
                              <div className="col-span-1 bg-[#F8F8F8] p-4 text-center rounded-md">DTPHB 3</div>
                              <div className="col-span-2 p-4"></div>


                              {/* OPV */}
                              <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนโปลิโอ (OPV)</div>
                              <div className="p-4"></div>
                              <div className="bg-[#F8F8F8] p-4 text-center rounded-md">OPV1</div>
                              <div className="col-span-2 grid grid-cols-2 gap-1">
                                   <div className="bg-[#F8F8F8] p-4 text-center rounded-md">OPV2</div>
                                   <div className="bg-[#F8F8F8] p-4 text-center rounded-md">IPV</div>
                              </div>
                              <div className="bg-[#F8F8F8] p-4 text-center rounded-md">OPV3</div>
                              <div className="col-span-1 p-4"></div>

                              {/* MMR */}
                              <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนหัด คางทูม หัดเยอรมัน (MMR)</div>
                              <div className="col-span-4 p-4"></div>
                              <div className="col-span-2 bg-[#F8F8F8] p-4 text-center rounded-md">MMR1</div>


                              {/* JE */}
                              <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนไข้สมองอักเสบ (JE)</div>
                              <div className="col-span-4 p-4"></div>
                              <div className="col-span-2 bg-[#F8F8F8] p-4 text-center rounded-md">JE1</div>

                         </div>
                    ) : (
                         <div className="grid grid-cols-6 gap-2 bg-white p-10 rounded-md shadow-lg mt-4">
                              <div
                                   className="col-span-6 text-left text-[#D49D44] font-bold hover:text-[#B88433] hover:scale-105 transform transition-all duration-200 cursor-pointer"
                                   onClick={() => setAge('lt1')}
                              >
                                   <FontAwesomeIcon icon={faArrowLeft} className="text-[#D49D44] text-xl ml-2" />
                                   น้อยกว่า 1 ปี
                              </div>
                              {/* Header Row */}
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">อายุ</div>
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">18 เดือน</div>
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">2 ปี</div>
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">2½ ปี</div>
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">4-6 ปี</div>
                              <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">11-15 ปี</div>

                              {/* BCG */}
                              <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนวัณโรค (BCG)</div>
                              <div className="col-span-5 p-4"></div>

                              {/* HBV */}
                              <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนตับอักเสบบี (HBV)</div>
                              <div className="col-span-5 p-4"></div>

                              {/* DTPHB */}
                              <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนคอตีบ,บาดทะยัก (DTPHB)</div>
                              <div className="col-span-1 bg-[#F8F8F8] p-4 text-center rounded-md">DTwP กระตุ้น 1</div>
                              <div className="col-span-2 p-4"></div>
                              <div className="col-span-1 bg-[#F8F8F8] p-4 text-center rounded-md">DTwP กระตุ้น 2</div>
                              <div className="col-span-1 bg-[#F8F8F8] p-4 text-center rounded-md">Td</div>

                              {/* OPV */}
                              <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนโปลิโอ (OPV)</div>
                              <div className="col-span-1 p-4"></div>
                              <div className="bg-[#F8F8F8] p-4 text-center rounded-md">OPV4</div>
                              <div className="col-span-2 p-4"></div>
                              <div className="bg-[#F8F8F8] p-4 text-center rounded-md">OPV5</div>

                              {/* MMR */}
                              <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนหัด คางทูม หัดเยอรมัน (MMR)</div>
                              <div className="col-span-2 p-4"></div>
                              <div className="bg-[#F8F8F8] p-4 text-center rounded-md">MMR2</div>
                              <div className="col-span-2 p-4"></div>

                              {/* JE */}
                              <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนไข้สมองอักเสบ (JE)</div>
                              <div className="bg-[#F8F8F8] p-4 text-center rounded-md">JE2</div>
                              <div className="bg-[#F8F8F8] p-4 text-center rounded-md">JE3</div>
                              <div className="col-span-2 p-4"></div>
                         </div>
                    )
               ) : (
                    age === 'lt1' ? (
                         <div className="grid grid-cols-6 gap-2 bg-white p-10 rounded-md shadow-lg mt-4">
                             {/* Header */}
                             <div
                                 className="col-span-6 text-[#D49D44] text-right font-bold hover:text-[#B88433] hover:scale-105 transform transition-all duration-200 cursor-pointer"
                                 onClick={() => setAge('mt1')}
                             >
                                 มากกว่า 18 เดือน
                                 <FontAwesomeIcon icon={faArrowRight} className="text-[#D49D44] text-xl ml-2" />
                             </div>
                             
                             {/* Header Row */}
                             <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">อายุ</div>
                             <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">2 เดือน</div>
                             <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">4 เดือน</div>
                             <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">6 เดือน</div>
                             <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">9 เดือน</div>
                             <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">12 เดือน</div>
                             
                             {/* JE Vaccine */}
                             <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนไข้สมองอักเสบ (JE)</div>
                             <div className="col-span-4 p-4"></div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">JE1 : Lived attenuated</div>
                             <div className="p-4"></div>
                             
                             {/* Hepatitis A Vaccine */}
                             <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนไวรัสตับอักเสบเอ (HA)</div>
                             <div className="col-span-4 p-4"></div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">HAV1</div>
                             <div className="p-4"></div>
                             
                             {/* Rotavirus Vaccine */}
                             <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนไวรัสโรต้า (Rota)</div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">Rota1</div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">Rota2</div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">Rota3 (เฉพาะpentavalent)</div>
                             <div className="col-span-3 p-4"></div>
                         </div>
                     ) : (
                         <div className="grid grid-cols-6 gap-2 bg-white p-10 rounded-md shadow-lg mt-4">
                             {/* Header */}
                             <div
                                 className="col-span-6 text-left text-[#D49D44] font-bold hover:text-[#B88433] hover:scale-105 transform transition-all duration-200 cursor-pointer"
                                 onClick={() => setAge('lt1')}
                             >
                                 <FontAwesomeIcon icon={faArrowLeft} className="text-[#D49D44] text-xl ml-2" />
                                 น้อยกว่า 18 เดือน
                             </div>
                             
                             {/* Header Row */}
                             <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">อายุ</div>
                             <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">18 เดือน</div>
                             <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">2 ปี</div>
                             <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">2½ ปี</div>
                             <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">4-6 ปี</div>
                             <div className="font-bold text-center bg-[#F8F8F8] p-4 rounded-md">11-15 ปี</div>
                             
                             {/* JE Vaccine */}
                             <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนไข้สมองอักเสบ (JE)</div>
                             <div className="col-span-1 p-4"></div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">JE2 : Lived attenuated</div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">JE3</div>
                             <div className="col-span-2 p-4"></div>
                             
                             {/* Hepatitis A Vaccine */}
                             <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนไวรัสตับอักเสบเอ (HA)</div>
                             <div className="col-span-1 p-4"></div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">HAV2</div>
                             <div className="col-span-3 p-4"></div>
                             
                             {/* Varicella Vaccine */}
                             <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนไวรัสอีสุกอีใส (Var)</div>
                             <div className="col-span-2 p-4"></div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">VZV1</div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">VZV2</div>
                             
                             {/* Influenza */}
                             <div className="col-span-6 bg-[#FFE5E5] text-center p-4 rounded-md">
                                 Influenza ให้ปีละครั้งตั้งแต่อายุ 6 เดือน - 18 ปี (เน้นในอายุ 6-24 เดือน) ในปีแรกฉีด 2 เข็มห่างกัน 4 สัปดาห์
                             </div>
                             
                             {/* HPV Vaccine */}
                             <div className="bg-[#F8F8F8] p-4 rounded-md">วัคซีนป้องกันเชื้อไวรัสเอชพีวี (HPV)</div>
                             <div className="col-span-3 p-4"></div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">HPV1</div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">HPV2</div>
                             <div className="bg-[#F8F8F8] p-4 text-center rounded-md">HPV3</div>
                         </div>
                     )
                     
               )}


          </div>
     )
}