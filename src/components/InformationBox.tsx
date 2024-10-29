"use client";

import Image from "next/image";
import Link from "next/link";

interface InformationBoxProps {
    imgSrc: string;
    title: string;
    targetPage: string;
}

export default function InformationBox({ imgSrc, title, targetPage }: InformationBoxProps) {
    return (
        <div className="relative z-0 flex flex-col items-start w-[350px] text-left sm:gap-4 bg-white m-5 p-5 rounded-md">
            <p className="text-[12px] sm:text-[14px] underline underline-offset-4">{title}</p>
            <Image 
                src={imgSrc} 
                alt={`${title} image`} 
                width={300} 
                height={150} 
                className='h-auto sm:h-[120px] w-auto object-contain rounded-md mx-auto' // Center the image
            />
            <Link 
                href={targetPage} 
                className="text-[12px] sm:text-[14px] "
            >
                อ่านเพิ่มเติม...
            </Link>
        </div>


    );
}
