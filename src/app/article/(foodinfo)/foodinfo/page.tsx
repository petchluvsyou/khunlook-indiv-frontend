import React from "react";
import { Link } from "react-router-dom"; // Or Next.js 'next/link'
import ContentSection from "../../../../components/Article"; // Adjust path

export default function Food() {
    const informationBoxes = [
        { imgSrc: "/img/foodinfo0_1.jpg", title: "อาหารที่เหมาะสมสำหรับลูกในปีแรก", targetPage: "/article/foodinfo/food0_1" },
        { imgSrc: "/img/foodinfo1_2.jpg", title: "อาหารที่เหมาะสมสำหรับลูกวัย 1-2 ปี", targetPage: "/article//foodinfo/food1_2" },
        { imgSrc: "/img/foodinfo2_4.jpg", title: "อาหารที่เหมาะสมสำหรับลูกอายุ 2-4 ปี", targetPage: "/article/foodinfo/food2_4" },
        { imgSrc: "/img/foodinfo4_6.jpg", title: "อาหารที่เหมาะสมสำหรับลูกอายุ 4-6 ปี", targetPage: "/article/foodinfo/food4_6" },
        { imgSrc: "/img/foodinfo6_18.jpg", title: "อาหารที่เหมาะสมสำหรับลูกอายุ 6-18 ปี", targetPage: "/article/foodinfo/food6_18" },
    ];

    return (
        <div>
            <ContentSection 
                title="อาหารของคุณลูก"
                description="เติบโตอย่างแข็งแรง! จากอาหารเด็กธรรมชาติ<br>ไปจนถึงการหย่านม นี่คือสิ่งที่คุณควรรู้<br>เกี่ยวกับการให้อาหารเด็ก"
                informationBoxes={informationBoxes}
            />
        </div>
    );
}
