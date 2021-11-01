import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import EachDemo from "../components/EachDemo";
import { api } from "../pages/api/index";

const demo = () => {
  const [demos, setDemos] = useState([]);
  const [demoNotTaken, setDemoNotTaken] = useState("");

  const getAllDemo = async () => {
    await api
      .get("/demo")
      .then((res) => {
        console.log(res.data.demo);
        setDemos(res.data.demo);
      })
      .catch((err) => {
        console.log("Error while fetching demos");
        console.log(err);
      });
  };

  const updateOneDemo = async (demo) => {
    await api
      .put(`/demo/${demo._id}`, demo)
      .then((res) => {
        console.log("update one demo");
        console.log(res.data);
        getAllDemo();
      })
      .catch((err) => {
        console.log("Error while deleting each demo");
        console.log(err);
      });
  };

  useEffect(() => {
    getAllDemo();
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
          MANAGE DEMO
        </div>
      </div>

      <div className="flex flex-row justify-between mx-32">
        <div
          className={
            demoNotTaken === "taken"
              ? "py-2 mx-5 text-xl font-bold text-white px-7 bg-red-600 rounded-xl hover:cursor-pointer "
              : "py-2 mx-5 text-xl font-bold text-white px-7 bg-admitted rounded-xl hover:cursor-pointer"
          }
          onClick={() => {
            setDemoNotTaken("taken");
          }}
        >
          Demo taken
        </div>
        <div
          className={
            demoNotTaken === "nottaken"
              ? "py-2 mx-5 text-xl bg-red-600 font-bold text-white px-7 rounded-xl hover:cursor-pointer "
              : "py-2 mx-5 text-xl font-bold text-white bg-admitted px-7 rounded-xl hover:cursor-pointer"
          }
          onClick={() => {
            setDemoNotTaken("nottaken");
          }}
        >
          Demo not taken
        </div>
      </div>

      <div className="mx-32">
        {demos.map((demo, index) => {
          if (demoNotTaken === "") {
            return (
              <EachDemo
                name={demo.name}
                emailId={demo.emailId}
                classs={demo.class}
                contact={demo.contact}
                board={demo.board}
                demoTaken={demo.demoTaken}
                myUpdateFunction={() =>
                  updateOneDemo({ ...demo, demoTaken: !demo.demoTaken })
                }
                key={index}
              />
            );
          } else if (demoNotTaken === "taken" && demo.demoTaken) {
            return (
              <EachDemo
                name={demo.name}
                emailId={demo.emailId}
                classs={demo.class}
                contact={demo.contact}
                board={demo.board}
                demoTaken={demo.demoTaken}
                myUpdateFunction={() =>
                  updateOneDemo({ ...demo, demoTaken: !demo.demoTaken })
                }
                key={index}
              />
            );
          } else if (demoNotTaken === "nottaken" && !demo.demoTaken) {
            return (
              <EachDemo
                name={demo.name}
                emailId={demo.emailId}
                classs={demo.class}
                contact={demo.contact}
                board={demo.board}
                demoTaken={demo.demoTaken}
                myUpdateFunction={() =>
                  updateOneDemo({ ...demo, demoTaken: !demo.demoTaken })
                }
                key={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default demo;
