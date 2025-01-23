import React, { useState } from "react";
import Header from "./Header";
import Continue from "./Continue";
import Checker from "./Cheker";

const inputFields = [
  { id: "first-name", label: "First Name *", placeholder: "Enter your first name" },
  { id: "last-name", label: "Last Name *", placeholder: "Enter your last name" },
  { id: "username", label: "Username *", placeholder: "Enter your username" },
];

const PageOne = ({ setPage }) => {
  const [inputValues, setInputValues] = useState(
    inputFields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
  );
  const [errors, setErrors] = useState({});

  return (
    <div className="bg-gray-100 flex justify-center h-screen w-screen items-center">
      <div className="flex w-[480px] p-8 flex-col items-start rounded-lg bg-white">
        <Header />
        <Continue
          inputFields={inputFields}
          inputValues={inputValues}
          setInputValues={setInputValues}
          errors={errors}
        />
        <Checker
          inputFields={inputFields}
          inputValues={inputValues}
          setErrors={setErrors}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default PageOne;

