import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Growth() {
    const informationBoxes = [
        { imgSrc: "/img/article_img/phone/phone_pros.jpg", title: "ใช้สื่อจอใสอย่างไรเพื่อส่งเสริมพัฒนาการและพฤติกรรมเด็ก", targetPage: "/article/articlePage/phonePros" },
        { imgSrc: "/img/article_img/phone/phone_cons.jpg", title: "สื่อจอใส...ภัยเงียบที่รอเวลาสุกงอม", targetPage: "/article/articlePage/phoneCons" },
    ];

    return (
        <div>
            <ContentSection 
                title="พัฒนาการ"
                description="เด็กนั้นเหมือนกับลูกข่างตัวเล็ก ๆ ที่ไม่หยุดหมุนเลย<br>จากของเล่นไปจนถึงกิจกรรมกลางแจ้ง<br>รับไอเดียสนุก ๆ ที่จะทำให้พวกเขาไม่เบื่อ<br>และเพลิดเพลินโดยไม่ต้องใช้หน้าจอ"
                informationBoxes={informationBoxes}
            />
        </div>
    );
}
