import Footer from "@/components/Footer";
import InformationBox from "@/components/InformationBox";

export default function Growth() {
    return (
        <div className="text-center">
            <div className="flex justify-center items-center relative z-0 flex flex-col p-12 bg-[#F8F8F8] gap-1 top-[64px] sm:top-[92px] w-full">
                <div>
                    <h1 className="font-bold text-[32px] sm:text-8xl mb-[6px] sm:mb-[12px]">พัฒนาการ</h1>
                    <p className="flex justify-center items-center font-normal text-[16px] sm:text-[32px] mb-[6px] sm:mb-0 text-center">
                        เด็กนั้นเหมือนกับลูกข่างตัวเล็ก ๆ ที่ไม่หยุดหมุนเลย<br />
                        จากของเล่นไปจนถึงกิจกรรมกลางแจ้ง<br />
                        รับไอเดียสนุก ๆ ที่จะทำให้พวกเขาไม่เบื่อ<br />
                        และเพลิดเพลินโดยไม่ต้องใช้หน้าจอ
                    </p>
                </div>
                <div className="flex flex-wrap justify-center m-10">
                    <InformationBox imgSrc="/img/knowledge.png" title="ใช้สื่อจอใสอย่างไรเพื่อส่งเสริมพัฒนาการและพฤติกรรมเด็ก" targetPage="/foodinfo/age1_2"/>
                    <InformationBox imgSrc="/img/knowledge.png" title="สื่อจอใส...ภัยเงียบที่รอเวลาสุกงอม" targetPage="/foodinfo/age1_2"/>
                </div>


            </div>
            <Footer/>
        </div>
    );
}
