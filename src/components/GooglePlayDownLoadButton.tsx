import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function GooglePlayDownloadButton() {
     return (
          <Link href="https://play.google.com/store/apps/details?id=hda.app.khunlook" passHref>
               <div className="flex flex-row gap-2 items-center justify-center border-2 border-gray-300 rounded-full px-6 py-2 h-18 hover:bg-gray-100 transition-all ">
                    <FontAwesomeIcon icon={faGooglePlay} className="text-black text-2xl mr-2 h-10" />
                    <div className="text-left whitespace-nowrap">
                         <p className="text-xs font-medium text-gray-600 ">Download on</p>
                         <p className="text-lg font-semibold text-black">Google Play</p>
                    </div>
               </div>
          </Link>
     );
};


