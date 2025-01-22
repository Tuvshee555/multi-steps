import { Checker } from "./Cheker";
import { Continue } from "./Continue";
import { Header } from "./Header";
import { inputFields2 } from "./input2";
import { useState } from "react";

export const PageTwo = ({}) => {
  const [inputValues, setInputValues] = useState(
    inputFields2.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState([]);
  console.log("page2");
  
  return (
    <>
      <div className="bg-[#f4f4f4] flex justify-center h-screen w-screen items-center">
        <div className="flex w-[480px] h-[655px] p-8 flex-col justify-between items-start rounded-[8px] bg-[white]">
          <div>
            <Header />
            <Continue
              inputFields2={inputFields2}
              inputValues={inputValues}
              setInputValues={setInputValues}
              errors={errors}
            />
          </div>
          <Checker
            inputFields2={inputFields2}
            inputValues={inputValues}
            setErrors={setErrors}
          />
        </div>
      </div>
    </>
  );
};
