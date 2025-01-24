import React from "react";
import Header from "./Header";
import { BirthDate } from "./birthDate";
import { Photo } from "./Photo";

const PageThird = ({ setPage }) => (
  <div className="bg-gray-100 flex justify-center items-center h-screen w-screen">
    <div className="flex w-[480px] p-8 flex-col items-start rounded-lg bg-white">
      <Header />
      <BirthDate />
      <Photo setPage={setPage} />
    </div>
  </div>
);

export default PageThird;
