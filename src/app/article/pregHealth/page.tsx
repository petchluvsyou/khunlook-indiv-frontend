import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Preg() {
    const informationBoxes = [
        { imgSrc: "/img/knowledge.png", title: "การตรวจคัดกรองขณะตั้งครรภ์", targetPage: "/article/articlePage/preg_diag" },
        { imgSrc: "/img/knowledge.png", title: "การเปลี่ยนแปลงของน้ำหนักของคุณแม่ขณะตั้งครรภ์", targetPage: "/article/articlePage/preg_weight" },
        { imgSrc: "/img/knowledge.png", title: "ปัจจัยที่อาจส่งผลต่อคุณลูกในครรภ์", targetPage: "/article/articlePage/preg_factor" },
        { imgSrc: "/img/knowledge.png", title: "วัคซีนสำหรับหญิงตั้งครรภ์", targetPage: "/article/articlePage/preg_vaccine" },
        { imgSrc: "/img/knowledge.png", title: "อาการที่พบได้บ่อยขณะตั้งครรภ์", targetPage: "/article/articlePage/preg_effect" },
        { imgSrc: "/img/knowledge.png", title: "อาหารสำหรับคุณแม่ตั้งครรภ์", targetPage: "/article/articlePage/preg_food" },
        { imgSrc: "/img/knowledge.png", title: "อาหารสำหรับคุณแม่แบ่งตามช่วงอายุครรภ์", targetPage: "/article/articlePage/preg_foodrange" },
        { imgSrc: "/img/knowledge.png", title: "เตรียมพร้อมก่อนคลอด", targetPage: "/article/articlePage/preg_prepare" },
    ];

    return (
        <div>
            <ContentSection 
                title="สุขภาพครรภ์"
                description="การเลือกอุปกรณ์และของเล่นที่ปลอดภัยช่วยเสริมพัฒนาการของลูกน้อย<br>และยังเป็นการป้องกันอุบัติเหตุที่อาจเกิดขึ้นได้<br>พื้นที่เล่นที่ปลอดภัยคือการมอบโลกแห่งการเรียนรู้ที่ปลอดภัยให้กับเขา"
                informationBoxes={informationBoxes}
            />
        </div>
    );
}
