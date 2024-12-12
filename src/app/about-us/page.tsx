'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp, faAngleDown, faUserLock, faDownload } from "@fortawesome/free-solid-svg-icons";
import creditData from './contact-us/creditData';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FunctionCard from '@/components/FunctionCard';
import DownloadCard from '@/components/DownloadCard';
import AppStoreDownloadButton from "@/components/AppStoreDownloadButton"
import GooglePlayDownloadButton from "@/components/GooglePlayDownLoadButton"

export default function page() {
  const [activeSectionIndexes, setActiveSectionIndexes] = useState<number[]>([]);
  const [activeGroupIndexes, setActiveGroupIndexes] = useState<Record<number, number[]>>({});

  const toggleSectionAccordion = (index: number) => {
    setActiveSectionIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleGroupAccordion = (sectionIndex: number, groupIndex: number) => {
    setActiveGroupIndexes((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex]?.includes(groupIndex)
        ? prev[sectionIndex].filter((i) => i !== groupIndex)
        : [...(prev[sectionIndex] || []), groupIndex],
    }));
  };

  return (
    <div className="flex justify-center items-center text-center relative z-10 flex flex-col py-12 bg-Bg gap-1 top-[64px] sm:top-[92px] w-full">
      <h1 className="font-bold text-3xl sm:text-5xl mt-8 sm:mt-5 mb-12 sm:mb-8">
        เกี่ยวกับเรา
      </h1>
      <div className="flex flex-col gap-4 mb-12 p-6 w-3/4 sm:w-1/2 border border-yellow-500 rounded-md text-center">
        <p className="text-xl font-bold text-yellow-500 text-center">Contact us</p>
        <p className="text-md">Faculty of Medicine, Khonkean University</p>
        <p className="text-md">คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น</p>
        <div className="flex items-center justify-center text-md text-Yellow">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-Yellow text-sm h-8" />
          admin@khunlook.com
        </div>
      </div>
      {/*Credit Session*/}
      {/*md*/}
      <div className='hidden sm:flex flex-row gap-4 md:gap-8 w-full h-full px-8 sm:px-16 '>
        {Object.entries(creditData).map(([section, groups]) => (
          <div key={section} className="w-[30%] mb-6">
            <p className="text-xl font-bold text-yellow-500 text-center mb-6">{section}</p>
            {Object.entries(groups).map(([group, names]) => (
              <div key={group} className="mb-4 border border-Yellow rounded-md">
                <p className="flex items-center py-2 px-6 justify-center text-center bg-Yellow text-md font-semibold rounded-t-md">{group}</p>
                <div className='py-2 px-4'>
                  {names.map((name, index) => (
                    <p key={index} className="text-md">
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/*sm*/}
      <div className="sm:hidden w-full p-4">
        {Object.entries(creditData).map(([section, groups], sectionIndex) => (
          <div key={sectionIndex} className="mb-3">
            {/* Section Accordion */}
            <div
              onClick={() => toggleSectionAccordion(sectionIndex)}
              className="p-3 flex items-center justify-between text-left h-14 bg-Yellow mt-2 cursor-pointer hover:bg-yellow-500 rounded-md"
            >
              <span className="text-md font-semibold">{section}</span>
              <FontAwesomeIcon
                icon={
                  activeSectionIndexes.includes(sectionIndex)
                    ? faAngleUp
                    : faAngleDown
                }
                className="text-black text-xl"
              />
            </div>
            {/* Group Dropdown */}
            {activeSectionIndexes.includes(sectionIndex) && (
              <div className="rounded-b-md bg-white">
                {Object.entries(groups).map(([group, names], groupIndex) => (
                  <div key={groupIndex} className="mb-3">
                    <div
                      onClick={() =>
                        toggleGroupAccordion(sectionIndex, groupIndex)
                      }
                      className={`p-3 flex items-center justify-between text-left h-14 bg-Yellow2 mt-2 cursor-pointer hover:bg-Yellow ${activeGroupIndexes[sectionIndex]?.includes(groupIndex)
                        ? "rounded-t-md"
                        : "rounded-md"
                        }`}
                    >
                      <span className="text-md font-semibold">{group}</span>
                      <FontAwesomeIcon
                        icon={
                          activeGroupIndexes[sectionIndex]?.includes(groupIndex)
                            ? faAngleUp
                            : faAngleDown
                        }
                        className="text-black text-xl"
                      />
                    </div>
                    {/* Name List */}
                    {activeGroupIndexes[sectionIndex]?.includes(groupIndex) && (
                      <div className="rounded-b-md bg-white border border-Yellow2 p-4 text-left">
                        {names.map((name, nameIndex) => (
                          <p
                            key={nameIndex}
                          >
                            {name}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/*Privacy Policy Session*/}
      <div className='h-24 w-full bg-gray-200 flex flex-row items-center justify-center text-2xl rounded-md font-bold'>
        <Link href={"/privacy"}>
          <FontAwesomeIcon icon={faUserLock} className="mr-4 text-black text-4xl" />
          Privacy Policy
        </Link>
      </div>

      {/*Main Page Session*/}
      <FunctionCard />
      <DownloadCard />

      {/*Khunlook on mobile Session*/}
      <h1 className="font-bold text-3xl sm:text-5xl mt-8 sm:mt-12 mb-2 sm:mb-4">
        แนะนำวิธีการใช้ App Khunlook
      </h1>
      <p className="text-gray-500 text-xs sm:text-base mb-12 w-[80%]">
        คุณลูกเป็นแอปฯ สำหรับมือถือและแท็บเล็ต และ เว็บแอปฯ ที่พัฒนาโดยทีมผู้มีความหวังอันแรงกล้าที่จะให้เด็กไทยมีสุขภาพดี เพื่อช่วยในการดูแล ประเมิน และติดตาม การเจริญเติบโต พัฒนาการและสุขภาพของเด็ก ผู้ปกครองสามารถประเมินสุขภาพและกระตุ้นพัฒนาการของเด็ก เพื่อเป็นจุดเริ่มต้นและประสานการทำงานร่วมกันกับบุคลากรทางสาธารณสุข สามารถพกพาได้โดยสะดวก และสามารถ แจ้งเตือนนัดหมาย เก็บบันทึกภาพและข้อมูล ตั้งแต่การคลอด การดูแลสุขภาพลูก การเจริญเติบโต ภาวะโภชนาการ พัฒนาการ การสร้างเสริมภูมิคุ้มกันตามวัย สุขภาพช่องปาก และ มีคำแนะนำตามวัย จากกุมารแพทย์และทันตแพทย์ เพื่อส่งเสริมให้เด็กโตและมีพัฒนาการเต็มศักยภาพ ลดความเสี่ยงต่อปัญหาพัฒนาการล่าช้า
      </p>
      <div className="flex flex-col gap-6 mb-6 p-6 border border-yellow-500 rounded-md bg-gray-50">
        <p className="text-2xl font-bold text-yellow-500 text-center">ดาวน์โหลดฟรีที่</p>
        <div className="flex flex-row gap-4 justify-center">
          <AppStoreDownloadButton />
          <GooglePlayDownloadButton />
        </div>
      </div>
      <div className="flex flex-col gap-6 mb-6 p-6">
        <p className="text-2xl font-bold text-yellow-500 text-center">วิธีการใช้งาน Mobile App</p>
        <div className="flex flex-row gap-4 justify-center">
          <div className="flex flex-col gap-4">
            <div className="mb-1">
              <Image
                src="/img/Khunlook_Brochure_front.jpg"
                alt="Khunlook Brochure Front"
                height={300}
                width={400}
              />
            </div>
            <div className="text-black hover:text-Yellow hover:underline cursor-pointer hover:cursor-grab" onClick={() => { window.location.href = '/pdf/Khunlook_Brochure_front.pdf'; }}>
              download
              <FontAwesomeIcon icon={faDownload} className="text-Yellow text-md ml-2" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="mb-1">
              <Image
                src={"/img/Khunlook_Brochure_back.jpg"}
                alt="Khunlook_Brochure_back"
                height={300}
                width={400}
              />
            </div>
            <div className="text-black hover:text-Yellow hover:underline cursor-pointer hover:cursor-grab" onClick={() => { window.location.href = '/pdf/Khunlook_Brochure_back.pdf'; }}>
              download
              <FontAwesomeIcon icon={faDownload} className="text-Yellow text-md ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/*Additional Article Session*/}
      <div className="bg-Bg pt-4 p-12 text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">นโยบายคุกกี้เว็บแอปพลิเคชัน KhunLook คุณลูก</h1>
        <p className="text-sm text-gray-600 mb-4">
          <strong>หมวดหมู่:</strong> เกี่ยวกับเรา | <strong>เผยแพร่เมื่อ:</strong> 07 มิถุนายน 2565
        </p>
        <p className="text-lg text-black font-bold mb-2">KhunLook Web Application Cookie Policy</p>
        <p className="text-lg text-black font-bold mb-2">นโยบายคุกกี้เว็บแอปพลิเคชัน KhunLook คุณลูก</p>
        <p className='mb-4'>แอปพลิเคชัน KhunLook คุณลูก เป็นแอปพลิเคชันที่พัฒนาโดย คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย และ คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น
          ด้วยทุนสนับสนุนจาก สถาบันวิจัยระบบสาธารณสุข (สวรส.) สำนักงานคณะกรรมการวิจัยแห่งชาติ (วช.) และ สำนักงานกองทุนสนับสนุนการสร้างเสริมสุขภาพ (สสส.)
          และมีบันทึกข้อตกลงความร่วมมือกับ กระทรวงสาธารณสุข</p>
        <p className="text-lg text-black font-bold mb-2">เราใช้คุกกี้อย่างไรบ้าง</p>
        <p className='mb-4'>คุกกี้ที่จำเป็น (Strictly necessary cookies): คุกกี้ประเภทนี้จำเป็นเพื่อให้แอปพลิเคชัน KhunLook ทำงานได้ถูกต้อง และทำให้ท่านสามารถเข้าใช้งาน แอปพลิเคชัน KhunLook ได้อย่างปลอดภัย เช่น การ login และยืนยันตัวตน ทั้งนี้ท่านไม่สามารถปิดการทำงานของคุกกี้ประเภทนี้ขณะที่ใช้งานเว็บแอปพลิเคชัน KhunLook ได้</p>
        <p className="text-lg text-black font-bold mb-2">ติดต่อเรา</p>
        <p className='mb-2'>สามารถติดต่อสอบถามเกี่ยวกับนโยบายคุกกี้หรือการทำงานของแอปพลิเคชัน ได้ทางอีเมลที่ admin@khunlook.com</p>
        <p className='mb-2'>อัปเดตล่าสุด วันที่ 1 มิถุนายน 2565</p>
      </div>


    </div>
  )
}
