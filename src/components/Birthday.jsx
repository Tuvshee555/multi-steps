"use client";

import { useState } from "react";

export const BirthDay = () => {
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setBirthDate(selectedDate);

    const currentDate = new Date();
    const birth = new Date(selectedDate);
    const age = currentDate.getFullYear() - birth.getFullYear();
    const month = currentDate.getMonth() - birth.getMonth();
    const day = currentDate.getDate() - birth.getDate();

    if (age < 18 || (age === 18 && (month < 0 || (month === 0 && day < 0)))) {
      setError("You must be 18 years or older.");
    } else {
      setError("");
    }
  };

  return (
    <div className="flex flex-col items-start gap-[8px] w-[100%] mb-[18px]">
      <label
        htmlFor="birth-date"
        className="text-[#334155] text-[14px] font-[600]"
      >
        Date of Birth
      </label>
      <input
        type="date"
        name="birth-date"
        value={birthDate}
        onChange={handleDateChange}
        className="border border-gray-300 rounded-[8px] p-[8px] text-[14px] text-[#334155] w-full mb-[10px]"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
