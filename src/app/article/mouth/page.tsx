import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Mouth() {
    const informationBoxes = [
        { imgSrc: "/img/article_img/mouth/mouth0_6m.jpg", title: "ดูแลฟันและช่องปากลูกแรกเกิด - 6 เดือน", targetPage: "/article/articlePage/mouth0_6m" },
        { imgSrc: "/img/article_img/mouth/mouth6_12m.jpg", title: "ดูแลฟันและช่องปากลูก 6 - 12 เดือน", targetPage: "/article/articlePage/mouth6_12m" },
        { imgSrc: "/img/article_img/mouth/mouth12_18m.jpg", title: "ดูแลฟันและช่องปากลูก 12 - 18 เดือน", targetPage: "/article/articlePage/mouth12_18m" },
        { imgSrc: "/img/article_img/mouth/mouth18_24m.jpg", title: "ดูแลฟันและช่องปากลูก 18 - 24 เดือน", targetPage: "/article/articlePage/mouth18_24m" },
        { imgSrc: "/img/article_img/mouth/mouth2_18y.jpg", title: "ดูแลฟันและช่องปากลูก 2-18 ปี", targetPage: "/article/articlePage/mouth2_18y" },
        { imgSrc: "/img/article_img/mouth/mouth_accident.png", title: "การดูแลอุบัติเหตุฟันสำหรับคุณลูก", targetPage: "/article/articlePage/mouth_accident" },
    ];

    return (
        <div>
            <ContentSection 
                title="ช่องปากและฟัน"
                description="ยอมรับเถอะ! ฟันน้ำนมเด็กนั้นเป็นเรื่องยาก<br>แต่เคล็ดลับเหล่านี้จะช่วยให้ลูกน้อยรู้สึกสบายขึ้น และทำให้<br>พ่อแม่สบายขึ้น"
                informationBoxes={informationBoxes}
            />
        </div>
    );
}
