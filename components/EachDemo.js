import React from "react";

const EachDemo = ({
  name,
  emailId,
  classs,
  contact,
  board,
  demoTaken,
  myUpdateFunction,
}) => {
  return (
    <div className="mx-5 mb-12 pb-7 bg-admitted rounded-2xl">
      <div className="grid grid-cols-3 gap-3 px-5 mt-6 mb-3 font-bold py-7 pt-9">
        <div className="px-2 py-1 bg-white rounded">Name: {name}</div>
        <div className="px-2 py-1 bg-white rounded">Email Id: {emailId}</div>
        <div className="px-2 py-1 bg-white rounded">Class: {classs}</div>
        <div className="px-2 py-1 bg-white rounded">Contact: {contact}</div>
        <div className="px-2 py-1 bg-white rounded">Board: {board}</div>
      </div>

      {!demoTaken && (
        <div className="flex flex-col justify-between w-full">
          <button
            className="w-1/3 py-1 mx-auto text-center text-white bg-green-500 rounded-xl px-7 hover:bg-green-600"
            onClick={() => myUpdateFunction()}
          >
            Demo Taken?
          </button>
        </div>
      )}
    </div>
  );
};

export default EachDemo;
