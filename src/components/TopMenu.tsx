'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import DropDownList from './DropDownList';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";

export default function TopMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session ,status} = useSession();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log("toggle");
    };

    const handleSignOut = async () => {
        await signOut({ redirect: true, callbackUrl: '/' }); // Redirects to homepage after sign out
      };

    return (
        <div className='fixed z-40 w-full h-[64px] sm:h-[92px] py-[16px] sm:py-[29px] px-[20px] sm:px-[48px] gap-[12px] bg-[#F8F8F8] flex item-center shadow-lg justify-between'>
            <div className="flex items-center gap-4">
                <Image src='/img/khunlook.png' alt='logo' width={0} height={0} sizes='100vh' className='h-full w-auto object-contain' />
                <div className="hidden sm:flex items-center gap-[12px]">
                    <TopMenuItem title="หน้าแรก" pageRef='/' hasDropdown={false}> </TopMenuItem>
                    <TopMenuItem title="บทความ" pageRef='/' hasDropdown={true}>
                        <TopMenuItem title="บทความ1" pageRef='/' hasDropdown={false}> </TopMenuItem>
                        <TopMenuItem title="บทความ2" pageRef='/' hasDropdown={false}> </TopMenuItem>
                    </TopMenuItem>
                    <TopMenuItem title="การเจริญเติบโต" pageRef='/' hasDropdown={false}> </TopMenuItem>
                    <TopMenuItem title="พัฒนาการ" pageRef='/development' hasDropdown={false}> </TopMenuItem>
                    <TopMenuItem title="วัคซีน" pageRef='/' hasDropdown={false}> </TopMenuItem>
                    <TopMenuItem title="สิ่งเล็กๆที่สร้างลูก" pageRef='/' hasDropdown={true}> </TopMenuItem>
                    <TopMenuItem title="เกี่ยวกับเรา" pageRef='/' hasDropdown={true}> </TopMenuItem>
                </div>
            </div>
            <div className="flex items-center gap-4">
                {session ?
                    <div className="flex items-center gap-4">
                        <span>Welcome</span>
                        <button
                            onClick={handleSignOut}
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            Sign Out
                        </button>
                    </div>
                    :
                    <Link href={"/login"} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign in</Link>
                }

                <div className="relative flex sm:hidden items-center">
                    <MenuIcon fontSize='small' onClick={toggleDropdown} className='w-6 h-6 hover:bg-gray-200 rounded-md' />
                    {isOpen && <DropDownList />}
                </div>
            </div>
        </div>
    );
}