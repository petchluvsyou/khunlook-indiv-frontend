import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Vaccine() {
    const informationBoxes = [
        { imgSrc: "/img/knowledge.png", title: "การสร้างเสริมภูมิคุ้มกันที่เหมาะสมสำหรับลูกแต่ละวัย", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "คำแนะนำเพิ่มเติมสำหรับการรับวัคซีน", targetPage: "/foodinfo/age1_2" },
    ];

    return (
        <div>
            <ContentSection 
                title="วัคซีน"
                description="วัคซีนเป็นเกราะป้องกันที่ไม่เพียงแค่รักษาสุขภาพของ\nแต่ยังสร้างความปลอดภัยให้กับลูกคุณ"
                informationBoxes={informationBoxes}
            />
            <Footer />
        </div>
    );
}
