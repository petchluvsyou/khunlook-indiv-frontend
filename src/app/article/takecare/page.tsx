import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Takecare() {
    const informationBoxes = [
        { imgSrc: "/img/article_img/takecare/tk_1w.jpg", title: "การดูแลลูกในสัปดาห์แรก", targetPage: "/article/articlePage/tk_1w" },
        { imgSrc: "/img/article_img/takecare/tk_6m.jpg", title: "การดูแลลูกในช่วงวัย 6 เดือนแรก", targetPage: "/article/articlePage/tk_6m" },
    ];

    return (
        <div>
            <ContentSection 
                title="ดูแลกัน"
                description="การดูแลลูกด้วยความใส่ใจและรักอย่างลึกซึ้ง คือการปลูกฝังความแข็งแกร่ง<br>และความสุขในจิตใจของเขาตลอดการเติบโต"
                informationBoxes={informationBoxes}
            />
        </div>
    );
}
