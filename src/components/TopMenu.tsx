import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function TopMenu() {
    return (
        <div className='fixed z-40 w-full h-[64px] sm:h-[92px] py-[16px] sm:py-[29px] px-[20px] sm:px-[48px] gap-[12px] bg-[#F8F8F8] flex item-center shadow-lg justify-between sm:justify-start'>
            <Image src='/img/khunlook.png' alt='logo' width={0} height={0} sizes='100vh' className='h-full w-auto object-contain'/>
            <div className="hidden sm:flex items-center gap-[12px]">
                <TopMenuItem title="หน้าแรก" pageRef='/' hasDropdown={false}> </TopMenuItem>
                <TopMenuItem title="บทความ" pageRef='/' hasDropdown={true}>
                    <TopMenuItem title="บทความ1" pageRef='/' hasDropdown={false}> </TopMenuItem>
                    <TopMenuItem title="บทความ2" pageRef='/' hasDropdown={false}> </TopMenuItem>
                </TopMenuItem>
                <TopMenuItem title="การเจริญเติบโต" pageRef='/' hasDropdown={false}> </TopMenuItem>
                <TopMenuItem title="พัฒนาการ" pageRef='/' hasDropdown={false}> </TopMenuItem>
                <TopMenuItem title="วัคซีน" pageRef='/' hasDropdown={false}> </TopMenuItem>
                <TopMenuItem title="สิ่งเล็กๆที่สร้างลูก" pageRef='/' hasDropdown={true}> </TopMenuItem>
                <TopMenuItem title="เกี่ยวกับเรา" pageRef='/' hasDropdown={true}> </TopMenuItem>
            </div>
            <div className="flex sm:hidden items-center">
                <MenuIcon fontSize='small'/>
            </div>
        </div>
    );
}