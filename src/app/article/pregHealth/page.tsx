import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Preg() {
    const informationBoxes = [
        { imgSrc: "/img/knowledge.png", title: "การตรวจคัดกรองขณะตั้งครรภ์", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "การเปลี่ยนแปลงของน้ำหนักของคุณแม่ขณะตั้งครรภ์", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "ปัจจัยที่อาจส่งผลต่อคุณลูกในครรภ์", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "วัคซีนสำหรับหญิงตั้งครรภ์", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อาการที่พบได้บ่อยขณะตั้งครรภ์", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อาหารสำหรับคุณแม่ตั้งครรภ์", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อาหารสำหรับคุณแม่แบ่งตามช่วงอายุครรภ์", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "เตรียมพร้อมก่อนคลอด", targetPage: "/foodinfo/age1_2" },
    ];

    return (
        <div>
            <ContentSection 
                title="สุขภาพครรภ์"
                description="การเลือกอุปกรณ์และของเล่นที่ปลอดภัยช่วยเสริมพัฒนาการของลูกน้อย\nและยังเป็นการป้องกันอุบัติเหตุที่อาจเกิดขึ้นได้\nพื้นที่เล่นที่ปลอดภัยคือการมอบโลกแห่งการเรียนรู้ที่ปลอดภัยให้กับเขา"
                informationBoxes={informationBoxes}
            />
            <Footer />
        </div>
    );
}
