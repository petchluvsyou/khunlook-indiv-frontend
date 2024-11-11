'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import developmentData from '@/app/development/developmentData';

export default function DevelopmentDetailPage({ params }: { params: { selectedOption: string, ageRange: string, index: string } }) {
     const [currentData, setCurrentData] = useState<any>();
     const selectedOption = decodeURIComponent(params.selectedOption) as 'เด็กปฐมวัย' | 'เด็กกลุ่มเสี่ยง';
     const ageRange = decodeURIComponent(params.ageRange) as string;

     useEffect(() => {
          const data = developmentData[selectedOption]?.find(data => data.age === ageRange);
          if (data) setCurrentData(data.rows[Number(params.index)]);
     }, [params]);

     if (!currentData) return <p>Loading...</p>;

     return (
          <div className="flex justify-center items-center text-center relative z-0 flex flex-col p-12 bg-[#F8F8F8] gap-1 top-[64px] sm:top-[92px] w-full">
               <h1 className="font-bold text-[24px] sm:text-5xl mb-[4px] mt-5 sm:mb-[12px]">วิธีส่งเสริมลูก</h1>
               <p className="text-gray-500 text-sm sm:text-base w-[50%]">
                    {currentData.skill}
               </p>
               <div className="relative h-48 aspect-square m-10">
                         <Image
                              src={`/img/developmentres/${selectedOption}/${ageRange}/${params.index}.png`}
                              alt="img"
                              fill
                              className="rounded-md"
                         />
               </div>
               <p className="text-black text-sm sm:text-base w-[70%]">
                    {currentData.description}
               </p>
          </div>
     );
}
