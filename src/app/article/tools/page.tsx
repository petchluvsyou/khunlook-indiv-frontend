import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Tools() {
    const informationBoxes = [
        { imgSrc: "/img/knowledge.png", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย แรกเกิด-6 เดือน", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย แรกเกิด-2 สัปดาห์", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 2-4 เดือน", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 4-6 เดือน", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 6-12 เดือน", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 1-3 ปี", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 3-6 ปี", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 6-12ปี", targetPage: "/foodinfo/age1_2" },
        { imgSrc: "/img/knowledge.png", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 12-18ปี", targetPage: "/foodinfo/age1_2" },
    ];

    return (
        <div>
            <ContentSection 
                title="อุปกรณ์ ของเล่น และการป้องกันอุบัติเหตุ"
                description="การเลือกอุปกรณ์และของเล่นที่ปลอดภัยช่วยเสริมพัฒนาการของลูกน้อย\nและยังเป็นการป้องกันอุบัติเหตุที่อาจเกิดขึ้นได้\nพื้นที่เล่นที่ปลอดภัยคือการมอบโลกแห่งการเรียนรู้ที่ปลอดภัยให้กับเขา"
                informationBoxes={informationBoxes}
            />
        </div>
    );
}
