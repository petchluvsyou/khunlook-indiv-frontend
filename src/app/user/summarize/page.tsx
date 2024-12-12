import React from "react";

export default function page() {
  return (
    <div className="min-h-screen justify-center items-center text-center relative z-0 flex flex-col p-12 bg-Bg gap-1 top-[64px] sm:top-[92px] w-full">
      <h1 className="font-bold text-[24px] sm:text-5xl mb-12 mt-5 sm:mb-16">
        สรุปข้อมูลลูก
      </h1>
      <div className="mb-4 flex items-center">
        <label htmlFor="vaccineOption" className="text-gray-700 mr-2">
          เลือกลูก
        </label>
        <select
          id="vaccineOption"
          value={"test"}
          className="p-2 border border-gray-300 rounded w-48 mr-2"
        >
          <option key="required" value="required">
            จำเป็น
          </option>
          <option key="optional" value="optional">
            เสริมหรือทดแทน
          </option>
        </select>
      </div>
    </div>
  );
}
