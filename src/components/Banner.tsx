import Image from "next/image";

export default function Banner(){
    return (
        <div className="relative z-0 flex flex-row p-12 bg-[#F8F8F8] gap-24 top-[64px] sm:top-[92px]">
            <div className="flex flex-col">
                <h1 className="font-bold text-[32px] sm:text-8xl mb-[6px] sm:mb-[12px]">KhunLook</h1>
                <p className="font-normal text-[16px] sm:text-[32px] mb-[6px] sm:mb-0">ช่วยในการดูแล ประเมิน และ ติดตามการเจริญเติบโตพัฒนาการสุขภาพของ
                </p>
                <h1 className="font-bold text-[24px] sm:text-[64px]">คุณลูก</h1>
                <button className="mt-[12px] sm:mt-[24px] w-24 sm:w-48 h-auto p-2 rounded-2xl bg-black text-white font-bold text-[12px] sm:text-[24px]">Get Started</button>
            </div>
            <div className="hidden lg:flex items-center justify-center">
                <Image src='/img/khunlook.png' alt='logo' width={0} height={0} sizes='100vh' className='h-full w-auto object-contain'/>
            </div>
        </div>
    );
}