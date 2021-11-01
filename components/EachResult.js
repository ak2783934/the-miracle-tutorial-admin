import React from "react";
import Image from "next/image";

const EachResult = ({ link, result, date, myDeleteFunction }) => {
  const getNewDate = (str) => {
    return str.substr(0, 10);
  };
  return (
    <div className="flex flex-row bg-white border-2 shadow-2xl">
      <div className="w-5/6 px-3 py-2">
        <a href={link} target="_blank" className="hover:text-blue-400">
          {result}
        </a>
      </div>
      <div className="px-3 py-2">{getNewDate(date)}</div>
      <div
        className="relative w-6 h-6 mx-3 my-2 hover:cursor-pointer"
        onClick={() => myDeleteFunction()}
      >
        <Image src="/delete.png" alt="delete-image" layout="fill" />
      </div>
    </div>
  );
};

export default EachResult;
