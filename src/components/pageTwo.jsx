import React, { useState } from "react";
import Header from "./Header";
import Continue from "./Continue";
import Checker2 from "./Cheker2";

const inputFields = [
  { id: "Email", label: "Email", placeholder: "Enter your email" },
  { id: "Phone number", label: "Phone Number", placeholder: "Enter your phone number" },
  { id: "Password", label: "Password", placeholder: "Enter your password" },
  { id: "Confirm password", label: "Confirm Password", placeholder: "Confirm your password" },
];

const PageTwo = ({ setPage }) => {
  const [inputValues, setInputValues] = useState(inputFields.reduce((acc, { id }) => ({ ...acc, [id]: "" }), {}));
  const [errors, setErrors] = useState({});

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen w-screen">
      <div className="flex w-[480px] p-8 flex-col items-start rounded-lg bg-white">
        <Header />
        <Continue inputFields={inputFields} inputValues={inputValues} setInputValues={setInputValues} errors={errors} />
        <Checker2 inputFields={inputFields} inputValues={inputValues} setErrors={setErrors} setPage={setPage} />
      </div>
    </div>
  );
};

export default PageTwo;
