import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Takecare() {
    const informationBoxes = [
        { imgSrc: "/img/knowledge.png", title: "การดูแลลูกในสัปดาห์แรก", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "การดูแลลูกในช่วงวัย 6 เดือนแรก", targetPage: "/foodinfo/age1_2" },
    ];

    return (
        <div>
            <ContentSection 
                title="ดูแลกัน"
                description="การดูแลลูกด้วยความใส่ใจและรักอย่างลึกซึ้ง คือการปลูกฝังความแข็งแกร่ง\nและความสุขในจิตใจของเขาตลอดการเติบโต"
                informationBoxes={informationBoxes}
            />
        </div>
    );
}
