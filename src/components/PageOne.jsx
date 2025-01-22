import { Checker } from "./Cheker";
import { Continue } from "./Continue";
import { Header } from "./Header";
import inputFields from "./Input1";
import { useState } from "react";

export const PageOne = ({ setPage }) => {
  const [inputValues, setInputValues] = useState(
    inputFields.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState([]);
  console.log("page1");
  

  return (
    <>
      <div className="bg-[#f4f4f4] flex justify-center h-screen w-screen items-center">
        <div className="flex w-[480px] h-[655px] p-8 flex-col justify-between items-start rounded-[8px] bg-[white]">
          <div>
            <Header />
            <Continue
              inputFields={inputFields} 
              inputValues={inputValues}
              setInputValues={setInputValues}
              errors={errors}
            />
          </div>
          <Checker
            inputFields={inputFields}
            inputValues={inputValues}
            setErrors={setErrors}
            setPage={setPage} // Pass setPage to Checker component
          />
        </div>
      </div>
    </>
  );
};
