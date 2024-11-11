import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Mouth() {
    const informationBoxes = [
        { imgSrc: "/img/knowledge.png", title: "ดูแลฟันและช่องปากลูกแรกเกิด - 6 เดือน", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "ดูแลฟันและช่องปากลูก 6 - 12 เดือน", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "ดูแลฟันและช่องปากลูก 12 - 18 เดือน", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "ดูแลฟันและช่องปากลูก 18 - 24 เดือน", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "ดูแลฟันและช่องปากลูก 2-18 ปี", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "การดูแลอุบัติเหตุฟันสำหรับคุณลูก", targetPage: "/foodinfo/age1_2" },
    ];

    return (
        <div>
            <ContentSection 
                title="ช่องปากและฟัน "
                description="ยอมรับเถอะ! ฟันน้ำนมเด็กนั้นเป็นเรื่องยาก\nแต่เคล็ดลับเหล่านี้จะช่วยให้ลูกน้อยรู้สึกสบายขึ้น และทำให้\nพ่อแม่สบายขึ้น"
                informationBoxes={informationBoxes}
            />
        </div>
    );
}
