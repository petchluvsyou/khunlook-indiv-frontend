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
        <div className="relative z-0 group flex flex-col items-center justify-between w-[300px] h-[400px] bg-white m-5 p-5 rounded-md shadow-lg">
            {/* Title */}
            <div className="w-full relative text-center text-[14px] sm:text-[16px] font-semibold mb-4">
                <span className="truncate block group-hover:whitespace-normal transition-all duration-200">{title}</span>
            </div>

            {/* Square Image */}
            <div className="relative w-[250px] h-[250px] mx-auto overflow-hidden mb-4">
                <Image
                    src={imgSrc}
                    alt={`${title} image`}
                    width={180}
                    height={180}
                    className="object-cover w-full h-full rounded-md"
                />
            </div>

            {/* Link */}
            <div className="text-center">
                <Link
                    href={targetPage}
                    className="text-[12px] sm:text-[14px] text-blue-600 hover:text-blue-800 font-medium hover:font-bold transition-all duration-200"
                >
                    อ่านเพิ่มเติม...
                </Link>
            </div>
        </div>
    );
}
