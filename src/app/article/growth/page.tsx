import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Growth() {
    const informationBoxes = [
        { imgSrc: "/img/knowledge.png", title: "ใช้สื่อจอใสอย่างไรเพื่อส่งเสริมพัฒนาการและพฤติกรรมเด็ก", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "สื่อจอใส...ภัยเงียบที่รอเวลาสุกงอม", targetPage: "/foodinfo/age1_2" },
    ];

    return (
        <div>
            <ContentSection 
                title="พัฒนาการ"
                description="เด็กนั้นเหมือนกับลูกข่างตัวเล็ก ๆ ที่ไม่หยุดหมุนเลย\nจากของเล่นไปจนถึงกิจกรรมกลางแจ้ง\nรับไอเดียสนุก ๆ ที่จะทำให้พวกเขาไม่เบื่อ\nและเพลิดเพลินโดยไม่ต้องใช้หน้าจอ"
                informationBoxes={informationBoxes}
            />
            <Footer />
        </div>
    );
}
