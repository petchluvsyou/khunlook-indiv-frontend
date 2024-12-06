import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function AppStoreDownloadButton() {
     return (
          <Link href="https://apps.apple.com/us/app/khunlook-%E0%B8%84-%E0%B8%93%E0%B8%A5-%E0%B8%81/id961051837?ls=1" passHref>
               <div className="flex flex-row gap-2 items-center justify-center border-2 border-gray-300 rounded-full px-6 py-2  h-18 hover:bg-gray-100 transition-all">
                    <FontAwesomeIcon icon={faApple} className="text-black text-2xl mr-2 h-10" />
                    <div className="text-left whitespace-nowrap">
                         <p className="text-xs font-medium text-gray-600 ">Download on</p>
                         <p className="text-lg font-semibold text-black">App Store</p>
                    </div>
               </div>
          </Link>
     );
};


