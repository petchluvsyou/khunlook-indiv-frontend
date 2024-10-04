import Image from "next/image";

export default function FunctionItem({imgSrc, title, description}:{imgSrc:string, title:string, description:string}){
    return (
        <div className="relative z-0 flex flex-col items-center max-w-sm text-center sm:gap-4">
            <Image src={imgSrc} alt='item' width={0} height={0} sizes='100vh' className='h-[60px] sm:h-[120px] w-auto object-contain'/>
            <p className="text-[12px] sm:text-[24px] font-bold">{title}</p>
            <p className="text-[16px] hidden sm:flex">{description}</p>
        </div>
    );
}