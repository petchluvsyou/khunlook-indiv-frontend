import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Preg() {
    const informationBoxes = [
        { imgSrc: "/img/article_img/health/diag.png", title: "การตรวจคัดกรองขณะตั้งครรภ์", targetPage: "/article/articlePage/preg_diag" },
        { imgSrc: "/img/article_img/health/portrait-beautiful-sexy-pregnant-young-woman-vertical-portrait-beautiful-sexy-pregnant-young-woman-happy-healthy-243260758.jpg.webp", title: "การเปลี่ยนแปลงของน้ำหนักของคุณแม่ขณะตั้งครรภ์", targetPage: "/article/articlePage/preg_weight" },
        { imgSrc: "/img/article_img/health/effect.webp", title: "ปัจจัยที่อาจส่งผลต่อคุณลูกในครรภ์", targetPage: "/article/articlePage/preg_factor" },
        { imgSrc: "/img/article_img/health/RS10399_GAVI_2012_Peter-Rudden_TANZANIA_1334-1.webp", title: "วัคซีนสำหรับหญิงตั้งครรภ์", targetPage: "/article/articlePage/preg_vaccine" },
        { imgSrc: "/img/article_img/health/Meta_When_To_Take_Pregnancy_Test_For_Accurate_Results_1500x1000_f790c7b767.jpg", title: "อาการที่พบได้บ่อยขณะตั้งครรภ์", targetPage: "/article/articlePage/preg_effect" },
        { imgSrc: "/img/article_img/health/Best-Foods-to-Eat-During-Pregnancy.webp", title: "อาหารสำหรับคุณแม่ตั้งครรภ์", targetPage: "/article/articlePage/preg_food" },
        { imgSrc: "/img/article_img/health/Pregnancy-Plate.jpg.webp", title: "อาหารสำหรับคุณแม่แบ่งตามช่วงอายุครรภ์", targetPage: "/article/articlePage/preg_foodrange" },
        { imgSrc: "/img/article_img/health/188350166_m_normal_none.jpg", title: "เตรียมพร้อมก่อนคลอด", targetPage: "/article/articlePage/preg_prepare" },
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
