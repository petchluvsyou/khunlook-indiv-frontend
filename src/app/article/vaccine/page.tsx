import ContentSection from "@/components/Article";

export default function Vaccine() {
    const informationBoxes = [
        { imgSrc: "/img/article_img/vaccine/vac_nor.jpg", title: "การสร้างเสริมภูมิคุ้มกันที่เหมาะสมสำหรับลูกแต่ละวัย", targetPage: "/article/articlePage/vac_nor" },
        { imgSrc: "/img/article_img/vaccine/vac_extra.jpg", title: "คำแนะนำเพิ่มเติมสำหรับการรับวัคซีน", targetPage: "/article/articlePage/vac_extra" },
    ];

    return (
        <div>
            <ContentSection 
                title="วัคซีน"
                description="วัคซีนเป็นเกราะป้องกันที่ไม่เพียงแค่รักษาสุขภาพของ\nแต่ยังสร้างความปลอดภัยให้กับลูกคุณ"
                informationBoxes={informationBoxes}
            />
        </div>
    );
}
