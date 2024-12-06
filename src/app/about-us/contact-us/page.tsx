'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import creditData from './creditData';
import { useState } from 'react';

export default function page() {
  const [activeSectionIndexes, setActiveSectionIndexes] = useState<number[]>([]);
  const [activeGroupIndexes, setActiveGroupIndexes] = useState<Record<number, number[]>>({});

  const toggleSectionAccordion = (index: number) => {
    setActiveSectionIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleGroupAccordion = (sectionIndex: number, groupIndex: number) => {
    setActiveGroupIndexes((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex]?.includes(groupIndex)
        ? prev[sectionIndex].filter((i) => i !== groupIndex)
        : [...(prev[sectionIndex] || []), groupIndex],
    }));
  };

  return (
    <div className="flex justify-center items-center text-center relative z-10 flex flex-col p-12 bg-Bg gap-1 top-[64px] sm:top-[92px] w-full">
      <h1 className="font-bold text-3xl sm:text-5xl mt-8 sm:mt-5 mb-12 sm:mb-8">
        ติดต่อเรา
      </h1>
      <div className="flex flex-col gap-4 mb-12 p-6 w-3/4 sm:w-1/2 border border-yellow-500 rounded-md text-center">
        <p className="text-xl font-bold text-yellow-500 text-center">Contact us</p>
        <p className="text-md">Faculty of Medicine, Khonkean University</p>
        <p className="text-md">คณะแพทยศาสตร์ มหาวิทยาลัยขอนแก่น</p>
        <div className="flex items-center justify-center text-md text-Yellow">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-Yellow text-sm h-8" />
          admin@khunlook.com
        </div>
      </div>
      {/*Credit Session*/}
      {/*md*/}
      <div className='hidden sm:flex flex-row gap-4 md:gap-8 w-full h-full px-8 sm:px-16 '>
        {Object.entries(creditData).map(([section, groups]) => (
          <div key={section} className="w-[30%] mb-6">
            <p className="text-xl font-bold text-yellow-500 text-center mb-6">{section}</p>
            {Object.entries(groups).map(([group, names]) => (
              <div key={group} className="mb-4 border border-Yellow rounded-md">
                <p className="flex items-center py-2 px-6 justify-center text-center bg-Yellow text-md font-semibold rounded-t-md">{group}</p>
                <div className='py-2 px-4'>
                  {names.map((name, index) => (
                    <p key={index} className="text-md">
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/*sm*/}
      <div className="sm:hidden w-full p-4">
        {Object.entries(creditData).map(([section, groups], sectionIndex) => (
          <div key={sectionIndex} className="mb-3">
            {/* Section Accordion */}
            <div
              onClick={() => toggleSectionAccordion(sectionIndex)}
              className="p-3 flex items-center justify-between text-left h-14 bg-Yellow mt-2 cursor-pointer hover:bg-yellow-500 rounded-md"
            >
              <span className="text-md font-semibold">{section}</span>
              <FontAwesomeIcon
                icon={
                  activeSectionIndexes.includes(sectionIndex)
                    ? faAngleUp
                    : faAngleDown
                }
                className="text-black text-xl"
              />
            </div>
            {/* Group Dropdown */}
            {activeSectionIndexes.includes(sectionIndex) && (
              <div className="rounded-b-md bg-white">
                {Object.entries(groups).map(([group, names], groupIndex) => (
                  <div key={groupIndex} className="mb-3">
                    <div
                      onClick={() =>
                        toggleGroupAccordion(sectionIndex, groupIndex)
                      }
                      className={`p-3 flex items-center justify-between text-left h-14 bg-Yellow2 mt-2 cursor-pointer hover:bg-Yellow ${activeGroupIndexes[sectionIndex]?.includes(groupIndex)
                          ? "rounded-t-md"
                          : "rounded-md"
                        }`}
                    >
                      <span className="text-md font-semibold">{group}</span>
                      <FontAwesomeIcon
                        icon={
                          activeGroupIndexes[sectionIndex]?.includes(groupIndex)
                            ? faAngleUp
                            : faAngleDown
                        }
                        className="text-black text-xl"
                      />
                    </div>
                    {/* Name List */}
                    {activeGroupIndexes[sectionIndex]?.includes(groupIndex) && (
                      <div className="rounded-b-md bg-white border border-Yellow2 p-4 text-left">
                        {names.map((name, nameIndex) => (
                          <p
                            key={nameIndex}
                          >
                            {name}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}
