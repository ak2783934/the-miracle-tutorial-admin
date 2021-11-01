import React from "react";
import Image from "next/image";

const EachNotice = ({ notice, link, date, myDeleteFunction }) => {
  const getMonth = (str) => {
    switch (str) {
      case "01":
        return "Jan";
      case "02":
        return "Feb";
      case "03":
        return "Mar";
      case "04":
        return "Apr";
      case "05":
        return "May";
      case "06":
        return "Jun";
      case "07":
        return "Jul";
      case "08":
        return "Aug";
      case "09":
        return "Sept";
      case "10":
        return "Oct";
      case "11":
        return "Nov";
      case "12":
        return "Dec";
    }
  };

  const getNewDate = (str) => {
    var tempStr = str.substr(0, 10);
    var year = tempStr.substr(0, 4);
    var day = tempStr.substr(8, 10);
    var mon = tempStr.substr(5, 2);
    return day + "-" + getMonth(mon) + "-" + year;
  };

  return (
    <div className="flex flex-row bg-white border-2 shadow-2xl">
      <div className="w-5/6 px-3 py-2">
        <a href={link} target="_blank" className="hover:text-blue-400">
          {notice}
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

export default EachNotice;
