import Footer from "@/components/Footer";
import ContentSection from "@/components/Article";

export default function Tools() {
    const informationBoxes = [
        { imgSrc: "/img/article_img/tools/tools0_6m.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย แรกเกิด-6 เดือน", targetPage: "/article/articlePage/tools0_6m" },
        { imgSrc: "/img/article_img/tools/tools0_2w.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย แรกเกิด-2 สัปดาห์", targetPage: "/article/articlePage/tools0_2w" },
        { imgSrc: "/img/article_img/tools/tools2_4m.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 2-4 เดือน", targetPage: "/article/articlePage/tools2_4m" },
        { imgSrc: "/img/article_img/tools/tools4_6m.png", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 4-6 เดือน", targetPage: "/article/articlePage/tools4_6m" },
        { imgSrc: "/img/article_img/tools/tools6_12m.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 6-12 เดือน", targetPage: "/article/articlePage/tools6_12m" },
        { imgSrc: "/img/article_img/tools/tools1_3y.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 1-3 ปี", targetPage: "/article/articlePage/tools1_3y" },
        { imgSrc: "/img/article_img/tools/tools3_6y.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 3-6 ปี", targetPage: "/article/articlePage/tools3_6y" },
        { imgSrc: "/img/article_img/tools/tools6_12y.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 6-12ปี", targetPage: "/article/articlePage/tools6_12y" },
        { imgSrc: "/img/article_img/tools/tools12_18y.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 12-18ปี", targetPage: "/article/articlePage/tools12_18y" },
    ];

    return (
        <div>
            <ContentSection 
                title="อุปกรณ์ ของเล่น และการป้องกันอุบัติเหตุ"
                description="การเลือกอุปกรณ์และของเล่นที่ปลอดภัยช่วยเสริมพัฒนาการของลูกน้อย<br>และยังเป็นการป้องกันอุบัติเหตุที่อาจเกิดขึ้นได้<br>พื้นที่เล่นที่ปลอดภัยคือการมอบโลกแห่งการเรียนรู้ที่ปลอดภัยให้กับเขา"
                informationBoxes={informationBoxes}
            />
        </div>
    );
}
