"use client";

export const BirthDate = ({}) => {
  return (
    <div className="flex flex-col items-start gap-[8px] w-[100%]">
      <label htmlFor="birth-date" className="text-[#334155] text-[14px] font-[600]">
        Date of Birth
      </label>
      <input
        type="date"
        name="birth-date"
        className="border border-gray-300 rounded-[8px] p-[8px] text-[14px] text-[#334155] w-full mb-[50px]"
      />
    </div>
  );
}
