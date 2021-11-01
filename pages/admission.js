import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import EachAdmission from "../components/EachAdmission";
import { api } from "../pages/api/index";

const admission = () => {
  const [admissions, setAdmissions] = useState([]);
  const [admissionTaken, setAdmissiontaken] = useState("");

  const getAllAdmission = async () => {
    await api
      .get("/admission")
      .then((res) => {
        console.log(res.data.admission);
        setAdmissions(res.data.admission);
      })
      .catch((err) => {
        console.log("Error while fetching all admissions");
        console.log(err);
      });
  };

  const updateOneAdmission = async (admission) => {
    await api
      .put(`/admission/${admission._id}`, admission)
      .then((res) => {
        console.log("update one admission");
        console.log(res.data);
        getAllAdmission();
      })
      .catch((err) => {
        console.log("Error while deleting each demo");
        console.log(err);
      });
  };

  useEffect(() => {
    getAllAdmission();
  }, []);

  return (
    <div className="w-full h-full min-h-screen pb-5 bg-blue-100">
      <Head>
        <title>The miracle tutorial: Admin</title>
        <link rel="icon" href="/tmt.png" />
      </Head>
      <div className="flex flex-row justify-between py-10 mx-32 text-center">
        <Link href="/">
          <a>
            <div className="h-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600">
              {"<-"} Back
            </div>
          </a>
        </Link>
        <div className="mx-auto text-4xl font-bold text-red-500">
          MANAGE ADMISSION
        </div>
      </div>

      <div className="flex flex-row justify-between mx-32">
        <div
          className={
            admissionTaken === "taken"
              ? "py-2 mx-5 text-xl font-bold text-white px-7 bg-red-600 rounded-xl hover:cursor-pointer"
              : "py-2 mx-5 text-xl font-bold text-white px-7 bg-admitted rounded-xl hover:cursor-pointer"
          }
          onClick={() => {
            setAdmissiontaken("taken");
          }}
        >
          Admitted
        </div>
        <div
          className={
            admissionTaken === "nottaken"
              ? "py-2 mx-5 text-xl bg-red-600 font-bold text-white px-7 rounded-xl hover:cursor-pointer"
              : "py-2 mx-5 text-xl font-bold text-white bg-admitted px-7 rounded-xl hover:cursor-pointer"
          }
          onClick={() => {
            setAdmissiontaken("nottaken");
          }}
        >
          Not-Admitted
        </div>
      </div>

      <div className="mx-32">
        {admissions
          .slice(0)
          .reverse()
          .map((admission, index) => {
            if (admissionTaken === "") {
              return (
                <EachAdmission
                  key={index}
                  name={admission.name}
                  gender={admission.gender}
                  birthDate={admission.birthDate}
                  mothersName={admission.mothersName}
                  fathersName={admission.fathersName}
                  classs={admission.classs}
                  school={admission.school}
                  board={admission.board}
                  prevMarks={admission.prevMarks}
                  contact={admission.contact}
                  fathersContact={admission.fathersContact}
                  emailId={admission.emailId}
                  address={admission.address}
                  admitted={admission.admitted}
                  myUpdateFunction={() =>
                    updateOneAdmission({
                      ...admission,
                      admitted: !admission.admitted,
                    })
                  }
                />
              );
            } else if (admissionTaken === "taken" && admission.admitted) {
              return (
                <EachAdmission
                  key={index}
                  name={admission.name}
                  gender={admission.gender}
                  birthDate={admission.birthDate}
                  mothersName={admission.mothersName}
                  fathersName={admission.fathersName}
                  classs={admission.classs}
                  school={admission.school}
                  board={admission.board}
                  prevMarks={admission.prevMarks}
                  contact={admission.contact}
                  fathersContact={admission.fathersContact}
                  emailId={admission.emailId}
                  address={admission.address}
                  admitted={admission.admitted}
                  myUpdateFunction={() =>
                    updateOneAdmission({
                      ...admission,
                      admitted: !admission.admitted,
                    })
                  }
                />
              );
            } else if (admissionTaken === "nottaken" && !admission.admitted) {
              return (
                <EachAdmission
                  key={index}
                  name={admission.name}
                  gender={admission.gender}
                  birthDate={admission.birthDate}
                  mothersName={admission.mothersName}
                  fathersName={admission.fathersName}
                  classs={admission.classs}
                  school={admission.school}
                  board={admission.board}
                  prevMarks={admission.prevMarks}
                  contact={admission.contact}
                  fathersContact={admission.fathersContact}
                  emailId={admission.emailId}
                  address={admission.address}
                  admitted={admission.admitted}
                  myUpdateFunction={() =>
                    updateOneAdmission({
                      ...admission,
                      admitted: !admission.admitted,
                    })
                  }
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default admission;
