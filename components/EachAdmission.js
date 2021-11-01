import React from "react";

const EachAdmission = ({
  name,
  gender,
  birthDate,
  mothersName,
  fathersName,
  classs,
  board,
  prevMarks,
  school,
  contact,
  fathersContact,
  emailId,
  address,
  admitted,
  myUpdateFunction,
}) => {
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
    <div className="mx-5 mb-12 pb-7 bg-admitted rounded-2xl">
      <div className="grid grid-cols-3 gap-3 px-5 mt-6 mb-3 font-bold py-7 pt-9">
        <div className="px-2 py-1 bg-white rounded">Name: {name}</div>
        <div className="px-2 py-1 bg-white rounded">
          DOB: {getNewDate(birthDate)}
        </div>
        <div className="px-2 py-1 bg-white rounded">Gender: {gender}</div>
        <div className="px-2 py-1 bg-white rounded">
          Mother's Name: {mothersName}
        </div>
        <div className="px-2 py-1 bg-white rounded">
          Father's Name: {fathersName}
        </div>
        <div className="px-2 py-1 bg-white rounded">School: {school}</div>
        <div className="px-2 py-1 bg-white rounded">Class: {classs}</div>
        <div className="px-2 py-1 bg-white rounded">Board: {board}</div>
        <div className="px-2 py-1 bg-white rounded">
          Previous Marks: {prevMarks}
        </div>
        <div className="px-2 py-1 bg-white rounded">Contact: {contact}</div>
        <div className="px-2 py-1 bg-white rounded">
          Father's Contact: {fathersContact}
        </div>
        <div className="px-2 py-1 bg-white rounded">Email Id: {emailId}</div>
        <div className="px-2 py-1 bg-white rounded">Address: {address}</div>
      </div>

      {!admitted && (
        <div className="flex flex-col justify-between w-full">
          <button
            className="w-1/3 py-1 mx-auto text-center text-white bg-green-500 rounded-xl px-7 hover:bg-green-600"
            onClick={() => myUpdateFunction()}
          >
            Is Admitted?
          </button>
        </div>
      )}
    </div>
  );
};

export default EachAdmission;
