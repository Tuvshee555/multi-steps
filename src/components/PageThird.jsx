import React, { useState } from "react";
import Header from "./Header";
import { BirthDate } from "./birthDate";
import { Photo } from "./Photo";

const PageThird = ({ setPage }) => {


  return (
    <div className="bg-gray-100 flex justify-center h-screen w-screen items-center">
      <div className="flex w-[480px] p-8 flex-col items-start rounded-lg bg-white">
        <Header />
        <BirthDate/>
        <Photo 
        setPage={setPage}
        />
      </div>
    </div>
  );
};

export default PageThird;
