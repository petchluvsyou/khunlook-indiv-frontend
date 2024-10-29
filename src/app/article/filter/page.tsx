import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Filter() {
    const informationBoxes = [
        { imgSrc: "/img/knowledge.png", title: "การตรวจคัดกรองลูกวัยแรกเกิด - 1 ปี", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "การตรวจคัดกรองลูกวัย 2 ปี -18 ปี", targetPage: "/foodinfo/age1_2" },
    ];

    return (
        <div>
            <ContentSection 
                title="ช่วงตรวจคัดกรอง"
                description="การตรวจคัดกรองเป็นก้าวแรกในการป้องกัน เพื่อให้ลูกน้อยเติบโตอย่างแข็งแรง\nการรู้เร็วและป้องกันไว คือของขวัญล้ำค่าสำหรับอนาคตของเขา"
                informationBoxes={informationBoxes}
            />
            <Footer />
        </div>
    );
}
