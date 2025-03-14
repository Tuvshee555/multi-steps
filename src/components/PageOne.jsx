import React, { useState } from "react";
import Header from "./Header";
import Continue from "./Continue";
import { ValidateInfo } from "./Validate-info";


const inputFields = [
  {
    id: "first-name",
    label: "First Name *",
    placeholder: "Enter your first name",
  },
  {
    id: "last-name",
    label: "Last Name *",
    placeholder: "Enter your last name",
  },
  { id: "username", label: "Username *", placeholder: "Enter your username" },
];

export const PageOne = ({ setPage }) => {
  const [inputValues, setInputValues] = useState(
    inputFields.reduce((acc, { id }) => ({ ...acc, [id]: "" }), {}),
  );
  const [errors, setErrors] = useState({});

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen w-screen">
      <div className="flex w-[480px] p-8 flex-col items-start rounded-lg bg-white">
        <Header />
        <Continue
          inputFields={inputFields}
          inputValues={inputValues} 
          setInputValues={setInputValues}
          errors={errors}
        />
        <ValidateInfo
          inputFields={inputFields}
          inputValues={inputValues}
          setErrors={setErrors}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

