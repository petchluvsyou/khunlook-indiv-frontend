import InformationBox from "@/components/InformationBox";

type InformationBoxProps = {
    imgSrc: string;
    title: string;
    targetPage: string;
};

type ContentSectionProps = {
    title: string;
    description: string;
    informationBoxes: InformationBoxProps[];
};

export default function ContentSection({ title, description, informationBoxes }: ContentSectionProps) {
    return (
        <div className="flex justify-center items-center relative z-0 flex-col p-12 bg-Bg gap-1 top-16 sm:top-24 w-full">
            <div className="text-center">
                <h1 className="font-bold text-3xl sm:text-8xl mb-1.5 sm:mb-3">{title}</h1>
                <p className="flex justify-center items-center font-normal text-lg sm:text-3xl mb-1.5 sm:mb-0 text-center">
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
