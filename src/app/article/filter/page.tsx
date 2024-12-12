import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Filter() {
    const informationBoxes = [
        { imgSrc: "/img/article_img/filter/filter1y.png", title: "การตรวจคัดกรองลูกวัยแรกเกิด - 1 ปี", targetPage: "/article/articlePage/filter1y" },
        { imgSrc: "/img/article_img/filter/filter2_18y.png", title: "การตรวจคัดกรองลูกวัย 2 ปี -18 ปี", targetPage: "/article/articlePage/filter2_18y" },
    ];

    return (
        <div>
            <ContentSection 
                title="ช่วงตรวจคัดกรอง"
                description="การตรวจคัดกรองเป็นก้าวแรกในการป้องกัน เพื่อให้ลูกน้อยเติบโตอย่างแข็งแรง\nการรู้เร็วและป้องกันไว คือของขวัญล้ำค่าสำหรับอนาคตของเขา"
                informationBoxes={informationBoxes}
            />
        </div>
    );
}
