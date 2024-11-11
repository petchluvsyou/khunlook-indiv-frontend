"use client";
import { useState, useEffect } from "react";
import developmentData from "./developmentData";

export default function page() {
     const [selectedOption, setSelectedOption] = useState<'เด็กปฐมวัย' | 'เด็กกลุ่มเสี่ยง'>('เด็กปฐมวัย');
     const [ageRange, setAgeRange] = useState<string>('0-1 เดือน');
     const [currentData, setCurrentData] = useState<any>();

     const getDefaultAgeRange = (option: 'เด็กปฐมวัย' | 'เด็กกลุ่มเสี่ยง'): string => {
          return option === 'เด็กปฐมวัย' ? '0-1 เดือน' : 'แรกเกิด';
     };

     const toggleOption = (option: 'เด็กปฐมวัย' | 'เด็กกลุ่มเสี่ยง') => {
          setSelectedOption(option);
          setAgeRange(getDefaultAgeRange(option));
     };

     const handleAgeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          setAgeRange(e.target.value);
     };

     useEffect(() => {
          const data = developmentData[selectedOption].find(data => data.age === ageRange);
          setCurrentData(data);
     }, [selectedOption, ageRange]);

     return (
          <div className="flex justify-center items-center text-center relative z-0 flex flex-col p-12 bg-[#F8F8F8] gap-1 top-[64px] lg:top-[92px] w-full">
               <h1 className="font-bold text-[24px] lg:text-5xl mb-[4px] mt-5 lg:mb-[12px]">พัฒนาการของ</h1>
               <p className="text-[48px] lg:text-6xl font-bold text-Yellow mb-6">คุณลูก</p>
               <p className="text-gray-500 text-sm lg:text-base mb-16 w-[50%]">
                    เกณฑ์นี้เป็นเกณฑ์อ้างอิงเบื้องต้นสำหรับเด็กทั่วไปว่าสามารถทำอะไรได้ในเเต่ละช่วงวัย ซึ่งอาจมีทักษะบางอย่างที่เด็กปกติ จำนวนหนี่งทำได้เร็วหรือช้ากว่าเกณฑ์นี้เล็กน้อย ควรกระตึ้นตามคำแนะนำ
                    หากมีความกังวลเรื่องพัฒนาการของลูกควรปรึกษาแพทย์หรือบุคลากรทางสาธารณสุข
               </p>

               <p className="font-bold text-base lg:text-lg lg:text-xl lg:text-2xl mb-6 lg:mb-10">พัฒนาการตามช่วงวัย</p>
               <hr className=""></hr>


               <div className="flex justify-center mb-6 lg:mb-10">
                    <button
                         className={`relative px-4 py-2 rounded ${selectedOption === 'เด็กปฐมวัย' ? 'text-black' : 'text-gray-400'}`}
                         onClick={() => toggleOption('เด็กปฐมวัย')}
                    >
                         เด็กปฐมวัย (DSPM)
                         <hr className={`absolute left-0 right-0 mt-2 border-t-2 ${selectedOption === 'เด็กปฐมวัย' ? 'border-black' : 'border-gray-400'}`} />
                    </button>
                    <button
                         className={`relative px-4 py-2 rounded ${selectedOption === 'เด็กกลุ่มเสี่ยง' ? 'text-black' : 'text-gray-400'}`}
                         onClick={() => toggleOption('เด็กกลุ่มเสี่ยง')}
                    >
                         เด็กกลุ่มเสี่ยง (DAIM)
                         <hr className={`absolute left-0 right-0 mt-2 border-t-2 ${selectedOption === 'เด็กกลุ่มเสี่ยง' ? 'border-black' : 'border-gray-400'}`} />
                    </button>
               </div>

               <div className="mb-8 flex items-center">
                    <label htmlFor="ageRange" className="text-gray-700 mr-2">{selectedOption}ในช่วง:</label>
                    <select
                         id="ageRange"
                         value={ageRange}
                         onChange={handleAgeRangeChange}
                         className="p-2 border border-gray-300 rounded w-48"
                    >
                         {developmentData[selectedOption]?.map((data) => (
                              <option key={data.age} value={data.age}>
                                   {data.age}
                              </option>
                         ))}
                    </select>
               </div>

               <div className="grid grid-cols-2 gap-1 w-full h-full px-8 lg:px-16">
                    <div className="col-span-2 flex items-center justify-center text-center item-center h-20 font-semibold bg-Yellow rounded-md">พัฒนาการของเด็กช่วงอายุ {ageRange}</div>
                    <div className="flex items-center justify-center text-center  h-12 font-semibold bg-Yellow rounded-md">พัฒนาการตามวัย</div>
                    <div className="flex items-center justify-center text-center  h-12 font-semibold bg-Yellow rounded-md">วิธีส่งเสริมให้ลูกทำได้</div>
                    {currentData?.rows.map((row: { skill: string, description: string }, index: number) => (
                         <>
                              {/*md*/}
                              <div className="grid grid-cols-2 gap-1 w-full">
                                   <div className="h-40 bg-gray-100 rounded-md hidden lg:block"></div>
                                   <div className="h-40 p-3 bg-gray-100 rounded-md text-left hidden lg:block">{row.skill}</div>
                              </div>
                              <div className="h-40 p-3 bg-gray-100 rounded-md text-left hidden lg:block">
                                   {row.description}
                              </div>
                              {/*sm*/}
                                   <div className="p-3 col-span-2 flex items-center text-left item-center h-16 bg-white rounded-md lg:hidden mt-2">{row.skill}</div>   
                         </>
                    ))}
               </div>

          </div>



     )
}

