"use client";

import Image from "next/image";
import Link from "next/link";

interface InformationBoxProps {
    imgSrc: string;
    title: string;
    targetPage: string;
}

export default function InformationBox({ imgSrc, title, targetPage}: InformationBoxProps) {
    return (
        <div className="relative z-0 flex flex-col items-start w-auto text-left sm:gap-4 bg-white m-5 p-5 rounded-md">
            {/* Title */}
            <div className="text-[12px] sm:text-[14px] underline underline-offset-4">{title}</div>
            
            {/* Square Image */}
            <div className="relative w-[250px] h-[250px] mx-auto overflow-hidden rounded-md mb-4">
                <Image 
                    src={imgSrc} 
                    alt={`${title} image`} 
                    width={300} 
                    height={300} 
                    className="h-auto w-full sm:h-[120px] object-contain rounded-md mx-auto"
                />
            </div>
            
            {/* Link */}
            <div>
                <Link 
                    href={targetPage} 
                    className="text-[12px] sm:text-[14px]"
                >
                    อ่านเพิ่มเติม...
                </Link>
            </div> 
        </div>
    );
}
