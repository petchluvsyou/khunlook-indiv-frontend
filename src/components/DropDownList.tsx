import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  title: string;
  pageRef: string;
  subItems?: MenuItem[];
}
export default function DropDownList({ menuItems }: { menuItems: MenuItem[] }) {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="absolute top-10 right-0 w-56 bg-white border border-gray-300 rounded-md shadow-lg z-50">
      <ul className="flex flex-col">
        {menuItems.map((item, index) => (
          <li key={index} className="group">
            <div className="flex justify-between items-center px-4 py-2">
              <Link
                href={item.pageRef}
                className="text-gray-800 hover:bg-gray-100 flex-grow"
              >
                {item.title}
              </Link>
              {item.subItems && (
                <button
                  onClick={() => toggleAccordion(index)}
                  className="ml-2 focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={activeIndexes.includes(index) ? faAngleUp : faAngleDown}
                    className="text-gray-600"
                  />
                </button>
              )}
            </div>
            {item.subItems && activeIndexes.includes(index) && (
              <ul className="pl-4">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={subItem.pageRef}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
