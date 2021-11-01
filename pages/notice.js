import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import EachNotice from "../components/EachNotice";
import { api } from "../pages/api/index";
import { useFormik } from "formik";
import * as Yup from "yup";

const notice = () => {
  const [mynotice, setMynotice] = useState([]);

  const getAllNotice = async () => {
    await api
      .get("/notice")
      .then((res) => {
        console.log(res.data.notice);
        setMynotice(res.data.notice);
      })
      .catch((err) => {
        console.log("Error while fetching Notices");
        console.log(err);
      });
  };

  const deleteOneNotice = async (deleteId) => {
    console.log("deleting one notice");
    console.log(deleteId);
    await api
      .delete(`/notice/${deleteId}`)
      .then((res) => {
        console.log("delete one notice");
        console.log(res.data);
        getAllNotice();
      })
      .catch((err) => {
        console.log("Error while deleting each notice");
      });
  };

  useEffect(() => {
    getAllNotice();
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      notice: "",
    },
    validationSchema: Yup.object({
      notice: Yup.string().required("Required"),
      image: Yup.mixed().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      var formData = new FormData();
      formData.append("notice", values.notice);
      formData.append("image", values.image);
      await api
        .post("/notice", formData)
        .then((data) => {
          console.log(data);
          console.log("Data is posted! ");
          setSubmitted(true);
          resetForm();
          getAllNotice();
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="w-full h-full min-h-screen bg-blue-100">
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
          MANAGE NOTICE
        </div>
      </div>

      <div className="mx-32 my-10">
        <form className="flex flex-row" onSubmit={formik.handleSubmit}>
          <div className="w-1/2 px-4">
            <textarea
              type="text"
              placeholder="Enter notice"
              className="w-full h-32 pt-2 pl-4 ml-4 rounded"
              id="notice"
              name="notice"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.notice}
            />
          </div>
          <div className="flex flex-col justify-between w-1/2 px-10">
            <div className="">
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                className="h-8"
                id="image"
                name="image"
                onBlur={formik.handleBlur}
                onChange={(event) => {
                  const file = event.target.files;
                  let myFiles = Array.from(file);
                  formik.setFieldValue("image", myFiles[0]);
                  console.log(myFiles);
                }}
              />
            </div>
            <div>
              <button
                className="h-8 mb-1 font-bold bg-green-400 rounded w-60"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {submitted && (
          <div className="text-sm text-center text-green-700">
            New Notice Added!
          </div>
        )}
      </div>

      <div className="pb-40 mx-32">
        <div className="flex flex-row justify-between py-3 text-xl font-bold bg-blue-400 shadow-2xl">
          <div className="px-4">NOTICE</div>
          <div className="pr-28">DATE</div>
        </div>
        <div>
          {mynotice.map((items, index) => {
            return (
              <EachNotice
                key={index}
                link={items.link}
                notice={items.notice}
                date={items.createdAt}
                myDeleteFunction={() => deleteOneNotice(items._id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default notice;
