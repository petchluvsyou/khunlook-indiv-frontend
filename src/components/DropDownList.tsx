import { useSession } from "next-auth/react";
import TopMenuItem from "./TopMenuItem"
import Link from "next/link"


export default function DropDownList() {
  
  const session = useSession();

  return (
     <div id="dropdown" className="absolute top-full right-0 z-50 bg-white divide-y divide-Bg rounded-lg shadow w-44 dark:bg-Dark">
     <div className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
         {
          session?
            <Link href="/login" className="block px-4 py-2 hover:bg-Bg dark:hover:bg-Dark dark:hover:text-white">เข้าสู่ระบบ</Link>
          :
            <Link href="/login" className="block px-4 py-2 hover:bg-Bg dark:hover:bg-Dark dark:hover:text-white">ออกจากระบบ</Link>
         }
         <Link href="/articles" className="block px-4 py-2 hover:bg-Bg dark:hover:bg-Dark dark:hover:text-white">บทความ</Link>
         <Link href="/growth" className="block px-4 py-2 hover:bg-Bg dark:hover:bg-Dark dark:hover:text-white">การเจริญเติบโต</Link>
         <Link href="/development" className="block px-4 py-2 hover:bg-Bg dark:hover:bg-Dark dark:hover:text-white">พัฒนาการ</Link>
         <Link href="/vaccines" className="block px-4 py-2 hover:bg-Bg dark:hover:bg-Dark dark:hover:text-white">วัคซีน</Link>
         <Link href="/memory" className="block px-4 py-2 hover:bg-Bg dark:hover:bg-Dark dark:hover:text-white">สิ่งเล็กๆที่สร้างลูก</Link>
         <Link href="/about-us" className="block px-4 py-2 hover:bg-Bg dark:hover:bg-Dark dark:hover:text-white">เกี่ยวกับเรา</Link>
     </div>
 </div>
  )
}

