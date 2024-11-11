import Image from "next/image";

export default function Banner(){
    return (
        <div className="relative z-0 flex flex-row justify-center p-12 bg-Bg gap-20 top-16 lg:top-24 lg:px-32 lg:py-28">
            <div className="flex flex-col">
                <h1 className="font-bold text-3xl lg:text-8xl pb-2 lg:pb-3">KhunLook</h1>
                <p className="font-normal text-lg lg:text-3xl pb-2 lg:pb-0 max-w-2xl">ช่วยในการดูแล ประเมิน และ ติดตามการเจริญเติบโตพัฒนาการสุขภาพของ</p>
                <h1 className="font-bold text-2xl lg:text-6xl">คุณลูก</h1>
                <button className="mt-3 lg:mt-6 w-28 lg:w-48 h-auto py-2 px-4 rounded-2xl bg-black text-white font-bold text-sm lg:text-2xl text-nowrap">Get Started</button>
            </div>
            <div className="hidden lg:flex items-center justify-center">
                <Image src='/img/khunlook.png' alt='logo' width={0} height={0} sizes='100vh' className='h-full w-auto object-contain'/>
            </div>
        </div>
    );
}