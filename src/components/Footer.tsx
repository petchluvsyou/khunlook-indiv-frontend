import Image from "next/image";

export default function Footer(){
    return (
        <div className="relative z-0 flex flex-col p-12 pt-24 bg-Bg gap-12 text-center items-center">
            <div className="grid grid-cols-3 lg:flex lg:flex-row justify-center gap-12 flex-wrap">
                <Image src='/img/chula_logo.png' alt='logo' width={0} height={0} sizes='100vh' className='h-[120px] w-auto object-contain'/>
                <Image src='/img/chula_logo.png' alt='logo' width={0} height={0} sizes='100vh' className='h-[120px] w-auto object-contain'/>
                <Image src='/img/chula_logo.png' alt='logo' width={0} height={0} sizes='100vh' className='h-[120px] w-auto object-contain'/>
                <Image src='/img/chula_logo.png' alt='logo' width={0} height={0} sizes='100vh' className='h-[120px] w-auto object-contain'/>
                <Image src='/img/chula_logo.png' alt='logo' width={0} height={0} sizes='100vh' className='h-[120px] w-auto object-contain'/>
                <Image src='/img/chula_logo.png' alt='logo' width={0} height={0} sizes='100vh' className='h-[120px] w-auto object-contain'/>
                <Image src='/img/chula_logo.png' alt='logo' width={0} height={0} sizes='100vh' className='h-[120px] w-auto object-contain'/>
                <Image src='/img/chula_logo.png' alt='logo' width={0} height={0} sizes='100vh' className='h-[120px] w-auto object-contain'/>
                <Image src='/img/chula_logo.png' alt='logo' width={0} height={0} sizes='100vh' className='h-[120px] w-auto object-contain'/>
            </div>
            <p className="font-bold text-sm lg:text-xl">สงวนลิขสิทธิ์ ตาม พ.ร.บ.ลิขสิทธิ์ พ.ศ. 2537 โดย มหาวิทยาลัยขอนแก่น</p>
        </div>
    );
}