import Footer from "@/components/Footer";
import InformationBox from "@/components/InformationBox";

export default function Food() {
    return (
        <div>
            <div className="flex justify-center items-center relative z-0 flex flex-col p-12 bg-[#F8F8F8] gap-1 top-[64px] sm:top-[92px] w-full">
                <div>
                    <h1 className="font-bold text-[32px] sm:text-8xl mb-[6px] sm:mb-[12px]">อาหารของคุณลูก</h1>
                    <p className="flex justify-center items-center font-normal text-[16px] sm:text-[32px] mb-[6px] sm:mb-0">
                        เติบโตอย่างแข็งแรง! จากอาหารเด็กธรรมชาติ
                    </p>
                    <p className="flex justify-center items-center font-normal text-[16px] sm:text-[32px] mb-[6px] sm:mb-0">
                        ไปจนถึงการหย่านม นี่คือสิ่งที่คุณควรรู้
                    </p>
                    <p className="flex justify-center items-center font-normal text-[16px] sm:text-[32px] mb-[6px] sm:mb-0">
                        เกี่ยวกับการให้อาหารเด็ก 
                    </p>
                </div>
                <div className="flex flex-wrap justify-center m-10">
                    <InformationBox imgSrc="/img/knowledge.png" title="อาหารที่เหมาะสมสำหรับลูกในปีแรก" targetPage="/foodinfo/age1_2"/>
                    <InformationBox imgSrc="/img/knowledge.png" title="อาหารที่เหมาะสมสำหรับลูกวัย 1-2 ปี" targetPage="/foodinfo/age1_2"/>
                    <InformationBox imgSrc="/img/knowledge.png" title="อาหารที่เหมาะสมสำหรับลูกอายุ 2-4 ปี" targetPage="/foodinfo/age1_2"/>
                    <InformationBox imgSrc="/img/knowledge.png" title="อาหารที่เหมาะสมสำหรับลูกอายุ 4-6 ปี" targetPage="/foodinfo/age1_2"/>
                    <InformationBox imgSrc="/img/knowledge.png" title="อาหารที่เหมาะสมสำหรับลูกอายุ 6-18 ปี" targetPage="/foodinfo/age1_2"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
