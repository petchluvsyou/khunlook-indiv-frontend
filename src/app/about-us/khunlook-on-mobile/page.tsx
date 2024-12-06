'use client'
import AppStoreDownloadButton from "@/components/AppStoreDownloadButton"
import GooglePlayDownloadButton from "@/components/GooglePlayDownLoadButton"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function page() {

     return (
          <div className="flex justify-center items-center text-center relative z-10 flex flex-col p-12 bg-[#F8F8F8] gap-1 top-[64px] sm:top-[92px] w-full">
               <h1 className="font-bold text-3xl sm:text-5xl mt-8 sm:mt-5 mb-12 sm:mb-8">
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


          </div>
     )
}

