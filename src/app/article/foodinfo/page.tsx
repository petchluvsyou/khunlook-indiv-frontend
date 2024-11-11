import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Food() {
    const informationBoxes = [
        { imgSrc: "/img/knowledge.png", title: "อาหารที่เหมาะสมสำหรับลูกในปีแรก", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อาหารที่เหมาะสมสำหรับลูกวัย 1-2 ปี", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อาหารที่เหมาะสมสำหรับลูกอายุ 2-4 ปี", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อาหารที่เหมาะสมสำหรับลูกอายุ 4-6 ปี", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อาหารที่เหมาะสมสำหรับลูกอายุ 6-18 ปี", targetPage: "/foodinfo/age1_2" },
    ];

    return (
        <div>
            <ContentSection 
                title="อาหารของคุณลูก"
                description="เติบโตอย่างแข็งแรง! จากอาหารเด็กธรรมชาติ\nไปจนถึงการหย่านม นี่คือสิ่งที่คุณควรรู้\nเกี่ยวกับการให้อาหารเด็ก"
                informationBoxes={informationBoxes}
            />
        </div>
    );
}
