'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import DropDownList from './DropDownList';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const MENUITEMS = [
    { title: "หน้าแรก", pageRef: "/" },
    {
      title: "บทความ",
      pageRef: "/article",
      subItems: [
        { title: "อาหารของคุณลูก", pageRef: "/article/foodinfo" },
        { title: "พัฒนาการ", pageRef: "/article/growth" },
        { title: "วัคซีน", pageRef: "/article/vaccine" },
        { title: "ช่องปากและฟัน", pageRef: "/article/mouth" },
        { title: "อุปกรณ์ ของเล่น และการป้องกันอุบัติเหตุ", pageRef: "/article/tools" },
        { title: "สุขภาพครรภ์", pageRef: "/article/pregHealth" },
        { title: "ดูแลกัน", pageRef: "/article/takecare" },
        { title: "ช่วงตรวจคัดกรอง", pageRef: "/article/filter" },
      ],
    },
    { title: "การเจริญเติบโต", pageRef: "/growth" },
    { title: "พัฒนาการ", pageRef: "/development" },
    { title: "วัคซีน", pageRef: "/vaccines" },
    {
      title: "สิ่งเล็กๆที่สร้างลูก",
      pageRef: "/memory",
      subItems: [
        { title: "อาหารของคุณลูก", pageRef: "/articles/food" },
        { title: "พัฒนาการ", pageRef: "/articles/development" },
        { title: "ช่องปากและฟัน", pageRef: "/articles/oral-and-dental" },
        { title: "อุปกรณ์ ของเล่น และการป้องกันอุบัติเหตุ", pageRef: "/articles/toys-and-safety" },
        { title: "สุขภาพครรภ์", pageRef: "/articles/pregnancy-health" },
        { title: "ดูแลกัน", pageRef: "/articles/care" },
        { title: "ช่วงตรวจคัดกรอง", pageRef: "/articles/screening" },
      ],
    },
    {
      title: "เกี่ยวกับเรา",
      pageRef: "/about-us",
      subItems: [
        { title: "ติดต่อเรา", pageRef: "/articles/contact-us"},
        { title: "KhunLook on Mobile", pageRef: "/articles/khunlook-on-mobile"},
      ],
    },
  ];  

export default function TopMenu() {
    
    const session = useSession();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log("toggle");
      };

    return (
        <div className='fixed z-40 w-full h-16 lg:h-24 py-4 lg:py-7 px-5 lg:px-12 gap-3 bg-Bg flex item-center shadow-lg justify-between'>
            <div className="flex items-center gap-4">
                <Link href="/" className='h-full w-auto object-contain'>
                    <Image src='/img/khunlook.png' alt='logo' width={0} height={0} sizes='100vh' className='h-full w-auto object-contain'/>
                </Link>
                <div className="hidden lg:flex items-center gap-[12px]">
                    {MENUITEMS.map((items, index) => (
                            <TopMenuItem key={index} title={items.title} pageRef={items.pageRef}>
                                {items.subItems?.map((subitems, index) => (
                                    <TopMenuItem key={index} title={subitems.title} pageRef={subitems.pageRef}></TopMenuItem>))
                                }
                            </TopMenuItem>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-4">
                {
                    session?
                        <Link href={"/login"} className='flex flex-row gap-3'>
                            <p className='font-bold'>เข้าสู่ระบบ</p>
                            <AccountCircleIcon className='invert-0'/>
                        </Link>
                    :
                        <Link href={"/login"} className='flex flex-row gap-3'>
                            <p className='font-bold'>ออกจากระบบ</p>
                            <AccountCircleIcon className='invert-0'/>
                        </Link>
                }
                <div className="relative flex lg:hidden items-center">
                    <MenuIcon fontSize='small' onClick={toggleDropdown} className='w-6 h-6 rounded-md'/>
                    {isOpen && <DropDownList/>}
                </div>
            </div>
        </div>
    );
}