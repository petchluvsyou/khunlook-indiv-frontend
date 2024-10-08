
export default function DropDownList() {
  return (
     <div id="dropdown" className="absolute top-full right-0 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
     <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
       <li>
         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">บทความ</a>
       </li>
       <li>
         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">การเจริญเติบโต</a>
       </li>
       <li>
         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">พัฒนาการ</a>
       </li>
       <li>
         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">วัคซีน</a>
       </li>
       <li>
         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">สิ่งเล็กๆที่สร้างลูก</a>
       </li>
       <li>
         <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">เกี่ยวกับเรา</a>
       </li>
     </ul>
 </div>
  )
}

