import InformationBox from "@/components/InformationBox";

export default function ContentSection({ title, description, informationBoxes }) {
    return (
        <div className="flex justify-center items-center relative z-0 flex flex-col p-12 bg-[#F8F8F8] gap-1 top-[64px] sm:top-[92px] w-full">
            <div className="text-center">
                <h1 className="font-bold text-[32px] sm:text-8xl mb-[6px] sm:mb-[12px]">{title}</h1>
                <p className="flex justify-center items-center font-normal text-[16px] sm:text-[32px] mb-[6px] sm:mb-0 text-center">
                    {description}
                </p>
            </div>
            <div className="flex flex-wrap justify-center m-10">
                {informationBoxes.map((info, index) => (
                    <InformationBox key={index} imgSrc={info.imgSrc} title={info.title} targetPage={info.targetPage} />
                ))}
            </div>
        </div>
    );
}
