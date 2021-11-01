import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import Link from "next/link";
import Head from "next/head";
import { api } from "../pages/api/index";
import { useFormik } from "formik";
import * as Yup from "yup";

const gallery = () => {
  const [events, setEvents] = useState([]);

  const getAllEvents = async () => {
    await api
      .get("/gallery")
      .then((res) => {
        console.log(res.data.gallery);
        setEvents(res.data.gallery);
      })
      .catch((err) => {
        console.log("Error while fetching events");
        console.log(err);
      });
  };

  const deleteOneEvent = async (deleteId) => {
    console.log("delete one event is called");
    console.log(deleteId);
    await api
      .delete(`/gallery/${deleteId}`)
      .then((res) => {
        console.log("deleted one event");
        console.log(res.data);
        getAllEvents();
      })
      .catch((err) => {
        console.log("Error while deleting events");
      });
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      eventName: "",
    },
    validationSchema: Yup.object({
      eventName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      images: Yup.mixed().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      var formData = new FormData();
      formData.append("eventName", values.eventName);
      values.images.forEach((element) => {
        console.log(element);
        formData.append("images", element);
      });

      await api
        .post("/gallery", formData)
        .then((data) => {
          console.log(data);
          console.log("Data is posted! ");
          setSubmitted(true);
          resetForm();
          getAllEvents();
        })
        .catch((err) => console.log(err));
    },
  });

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
          MANAGE GALLERY
        </div>
      </div>

      <div className="w-2/3 mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Name of event"
              className="w-1/2 h-8 px-3 mr-4 rounded"
              id="eventName"
              name="eventName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.eventName}
            />
            {formik.touched.eventName && formik.errors.eventName ? (
              <div>{formik.errors.eventName}</div>
            ) : null}
            <input
              type="file"
              className="w-1/2 h-8 ml-4 rounded"
              id="images"
              name="images"
              onChange={(event) => {
                const file = event.target.files;
                let myFiles = Array.from(file);
                formik.setFieldValue("images", myFiles);
                console.log(myFiles);
              }}
              onBlur={formik.handleBlur}
              accept="image/png, image/jpeg, image/jpg"
              multiple
            />
          </div>
          <div className="flex flex-row justify-center py-8">
            <button
              className="w-1/3 py-1 bg-green-400 rounded-xl hover:bg-green-500"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
          {submitted && (
            <div className="text-sm text-center text-green-700">
              New Event Added!
            </div>
          )}
        </form>
      </div>

      <div>
        {events
          ?.slice(0)
          .reverse()
          .map((val, index) => (
            <Event
              eventName={val.eventName}
              images={val.images}
              key={index}
              myDeleteFunction={() => deleteOneEvent(val._id)}
            />
          ))}
      </div>
    </div>
  );
};

export default gallery;
