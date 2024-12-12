"use client";  // This marks the component as a Client Component

import ContentSection from "@/components/Article";

export default function AllArticle() {
    const informationBoxes1 = [
        { imgSrc: "/img/article_img/food/foodinfo0_1.jpg", title: "อาหารที่เหมาะสมสำหรับลูกในปีแรก", targetPage: "/article/articlePage/food0_1" },
        { imgSrc: "/img/article_img/food/foodinfo1_2.jpg", title: "อาหารที่เหมาะสมสำหรับลูกวัย 1-2 ปี", targetPage: "/article/articlePage/food1_2" },
        { imgSrc: "/img/article_img/food/foodinfo2_4.jpg", title: "อาหารที่เหมาะสมสำหรับลูกอายุ 2-4 ปี", targetPage: "/article/articlePage/food2_4" },
        { imgSrc: "/img/article_img/food/foodinfo4_6.jpg", title: "อาหารที่เหมาะสมสำหรับลูกอายุ 4-6 ปี", targetPage: "/article/articlePage/food4_6" },
        { imgSrc: "/img/article_img/food/foodinfo6_18.jpg", title: "อาหารที่เหมาะสมสำหรับลูกอายุ 6-18 ปี", targetPage: "/article/articlePage/food6_18" },
        { imgSrc: "/img/article_img/phone/phone_pros.jpg", title: "ใช้สื่อจอใสอย่างไรเพื่อส่งเสริมพัฒนาการและพฤติกรรมเด็ก", targetPage: "/article/articlePage/phonePros" },
        { imgSrc: "/img/article_img/phone/phone_cons.jpg", title: "สื่อจอใส...ภัยเงียบที่รอเวลาสุกงอม", targetPage: "/article/articlePage/phoneCons" },
        { imgSrc: "/img/article_img/vaccine/vac_nor.jpg", title: "การสร้างเสริมภูมิคุ้มกันที่เหมาะสมสำหรับลูกแต่ละวัย", targetPage: "/article/articlePage/vac_nor" },
        { imgSrc: "/img/article_img/vaccine/vac_extra.jpg", title: "คำแนะนำเพิ่มเติมสำหรับการรับวัคซีน", targetPage: "/article/articlePage/vac_extra" },
        { imgSrc: "/img/article_img/mouth/mouth0_6m.jpg", title: "ดูแลฟันและช่องปากลูกแรกเกิด - 6 เดือน", targetPage: "/article/articlePage/mouth0_6m" },
        { imgSrc: "/img/article_img/mouth/mouth6_12m.jpg", title: "ดูแลฟันและช่องปากลูก 6 - 12 เดือน", targetPage: "/article/articlePage/mouth6_12m" },
        { imgSrc: "/img/article_img/mouth/mouth12_18m.jpg", title: "ดูแลฟันและช่องปากลูก 12 - 18 เดือน", targetPage: "/article/articlePage/mouth12_18m" },
        { imgSrc: "/img/article_img/mouth/mouth18_24m.jpg", title: "ดูแลฟันและช่องปากลูก 18 - 24 เดือน", targetPage: "/article/articlePage/mouth18_24m" },
        { imgSrc: "/img/article_img/mouth/mouth2_18y.jpg", title: "ดูแลฟันและช่องปากลูก 2-18 ปี", targetPage: "/article/articlePage/mouth2_18y" },
        { imgSrc: "/img/article_img/mouth/mouth_accident.png", title: "การดูแลอุบัติเหตุฟันสำหรับคุณลูก", targetPage: "/article/articlePage/mouth_accident" },
    ];

    const informationBoxes2 = [
        { imgSrc: "/img/article_img/tools/tools0_6m.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย แรกเกิด-6 เดือน", targetPage: "/article/articlePage/tools0_6m" },
        { imgSrc: "/img/article_img/tools/tools0_2w.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย แรกเกิด-2 สัปดาห์", targetPage: "/article/articlePage/tools0_2w" },
        { imgSrc: "/img/article_img/tools/tools2_4m.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 2-4 เดือน", targetPage: "/article/articlePage/tools2_4m" },
        { imgSrc: "/img/article_img/tools/tools4_6m.png", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 4-6 เดือน", targetPage: "/article/articlePage/tools4_6m" },
        { imgSrc: "/img/article_img/tools/tools6_12m.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 6-12 เดือน", targetPage: "/article/articlePage/tools6_12m" },
        { imgSrc: "/img/article_img/tools/tools1_3y.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 1-3 ปี", targetPage: "/article/articlePage/tools1_3y" },
        { imgSrc: "/img/article_img/tools/tools3_6y.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 3-6 ปี", targetPage: "/article/articlePage/tools3_6y" },
        { imgSrc: "/img/article_img/tools/tools6_12y.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 6-12ปี", targetPage: "/article/articlePage/tools6_12y" },
        { imgSrc: "/img/article_img/tools/tools12_18y.jpg", title: "อุปกรณ์ของเล่นและการป้องกันอุบัติเหตุของลูกวัย 12-18ปี", targetPage: "/article/articlePage/tools12_18y" },
        { imgSrc: "/img/article_img/health/diag.png", title: "การตรวจคัดกรองขณะตั้งครรภ์", targetPage: "/article/articlePage/preg_diag" },
        { imgSrc: "/img/article_img/health/portrait-beautiful-sexy-pregnant-young-woman-vertical-portrait-beautiful-sexy-pregnant-young-woman-happy-healthy-243260758.jpg.webp", title: "การเปลี่ยนแปลงของน้ำหนักของคุณแม่ขณะตั้งครรภ์", targetPage: "/article/articlePage/preg_weight" },
        { imgSrc: "/img/article_img/health/effect.webp", title: "ปัจจัยที่อาจส่งผลต่อคุณลูกในครรภ์", targetPage: "/article/articlePage/preg_factor" },
        { imgSrc: "/img/article_img/health/RS10399_GAVI_2012_Peter-Rudden_TANZANIA_1334-1.webp", title: "วัคซีนสำหรับหญิงตั้งครรภ์", targetPage: "/article/articlePage/preg_vaccine" },
        { imgSrc: "/img/article_img/health/Meta_When_To_Take_Pregnancy_Test_For_Accurate_Results_1500x1000_f790c7b767.jpg", title: "อาการที่พบได้บ่อยขณะตั้งครรภ์", targetPage: "/article/articlePage/preg_effect" },
        { imgSrc: "/img/article_img/health/Best-Foods-to-Eat-During-Pregnancy.webp", title: "อาหารสำหรับคุณแม่ตั้งครรภ์", targetPage: "/article/articlePage/preg_food" },
        { imgSrc: "/img/article_img/health/Pregnancy-Plate.jpg.webp", title: "อาหารสำหรับคุณแม่แบ่งตามช่วงอายุครรภ์", targetPage: "/article/articlePage/preg_foodrange" },
        { imgSrc: "/img/article_img/health/188350166_m_normal_none.jpg", title: "เตรียมพร้อมก่อนคลอด", targetPage: "/article/articlePage/preg_prepare" },
        { imgSrc: "/img/article_img/takecare/tk_1w.jpg", title: "การดูแลลูกในสัปดาห์แรก", targetPage: "/article/articlePage/tk_1w" },
        { imgSrc: "/img/article_img/takecare/tk_6m.jpg", title: "การดูแลลูกในช่วงวัย 6 เดือนแรก", targetPage: "/article/articlePage/tk_6m" },
        { imgSrc: "/img/article_img/filter/filter1y.png", title: "การตรวจคัดกรองลูกวัยแรกเกิด - 1 ปี", targetPage: "/article/articlePage/filter1y" },
        { imgSrc: "/img/article_img/filter/filter2_18y.png", title: "การตรวจคัดกรองลูกวัย 2 ปี -18 ปี", targetPage: "/article/articlePage/filter2_18y" },
    ];

    return (
        <div className="pt-44 text-Dark bg-Bg">
            {/* <ContentSection 
                title="บทความ : ทั้งหมด"
                description=""
                informationBoxes={informationBoxes}
            /> */}
            <h1 className=" font-bold text-3xl sm:text-6xl mb-4 sm:mb-3 text-center">บทความ : ทั้งหมด</h1>
            <div className="overflow-x-auto py-6">
                {/* Horizontal scroll container */}
                <div className="flex space-x-8 pt-8">
                    {/* Box items inside the scrollable flex container */}
                    {informationBoxes1.map((box, index) => (
                        <div key={index} className="flex-shrink-0 w-64"> {/* Fixed width for each box */}
                            <div className="relative overflow-hidden rounded-lg shadow-sm">
                                <img src={box.imgSrc} alt={box.title} className="w-full h-96 object-cover"/>
                                <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                                    <h3 className="text-xl font-semibold">{box.title}</h3>
                                    <a href={box.targetPage} className="text-sm underline">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="overflow-x-auto py-6">
                {/* Horizontal scroll container */}
                <div className="flex space-x-8">
                    {/* Box items inside the scrollable flex container */}
                    {informationBoxes2.map((box, index) => (
                        <div key={index} className="flex-shrink-0 w-64"> {/* Fixed width for each box */}
                            <div className="relative overflow-hidden rounded-lg shadow-sm">
                                <img src={box.imgSrc} alt={box.title} className="w-full h-96 object-cover"/>
                                <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent text-white p-4">
                                    <h3 className="text-xl font-semibold">{box.title}</h3>
                                    <a href={box.targetPage} className="text-sm underline">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
