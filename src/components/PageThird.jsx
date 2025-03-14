import React from "react";
import Header from "./Header";
import { BirthDay } from "./Birthday";
import { AddPhoto } from "./Add-Photo";

export const PageThird = ({ setPage }) => (
  <div className="bg-gray-100 flex justify-center items-center h-screen w-screen">
    <div className="flex w-[480px] p-8 flex-col items-start rounded-lg bg-white">
      <Header />
      <BirthDay />
      <AddPhoto setPage={setPage} />
    </div>
  </div>
);

