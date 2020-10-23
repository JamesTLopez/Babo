import React, { useEffect, useState } from "react";
import ProfilesPic from "../../images/pro.jpg";
import Edit from "../../images/edit.png";
import Delete from "../../images/delete.png";
import { Formik, Form, Field } from "formik";
import { useParams } from "react-router-dom";
import { Consumer } from "../../context/context";

interface postValues {
  title: string;
  hours: number;
  date: string;
  description?: string;
  dispatch?: () => void;
}

const Post: React.FC<postValues> = ({
  title,
  hours,
  date,
  description,
  dispatch,
}) => {
  let [activate, setActivate] = useState<boolean>(false);
  let [deletes, setDelete] = useState<boolean>(true);
  let [postValues, setPost] = useState<postValues>({
    title: title,
    hours: hours,
    date: date,
    description: description,
  });
  let [wordCount, setWordCount] = useState<number>(0);

  let { id }: any = useParams();
  useEffect(() => {
    if (postValues.description?.length !== undefined) {
      setWordCount(postValues.description.length);
    }
  }, [postValues.description]);

  const activateText = () => {
    setActivate(!activate);
  };

  const words = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length >= 255) {
      alert("Too many characters in description");
      setActivate(!activate);
    }
    setPost({
      title: postValues.title,
      hours: postValues.hours,
      date: postValues.date,
      description: e.target.value,
      dispatch: dispatch,
    });
    setWordCount(e.target.value.length);
  };


  return (
    <Consumer>
      {({ dispatch }) => {
        return (
          <>
            {deletes ? (
              <div
                className={`post fadeIn h-full sm:w-3/4 xl:w-4/6   bg-gray-800 my-5 rounded-lg flex justify-between flex-col sm:flex-row shadow-xl `}
              >
                <div className="image flex flex-col items-center m-2 ">
                  <img
                    className="sm:h-10 h-16 rounded-full"
                    src={ProfilesPic}
                    alt="temp"
                  ></img>
                  <div className="sm:visible   sm:my-1 vertical-divider h-full rounded-lg"></div>
                </div>
                <div className="flex items-center justify-between flex-col w-full p-2 bg-gray-800 rounded-lg">
                  <div className="flex w-11/12 ">
                    <div className="flex-1 p-2  text-xs text-white flex flex-col ">
                      <h2 className="text-lg font-bold opacity-100">
                        {postValues.title}
                      </h2>
                      <h2 className="text-sm opacity-75">Learn Typescript</h2>
                      <h2 className="opacity-50">{postValues.date}</h2>
                      <h2 className="opacity-50">
                        {postValues.hours} / 10.3 h
                      </h2>
                    </div>
                    {activate ? (
                      <div className="fadeIn p-2 flex-1 text-xs text-white flex flex-col">
                        <Formik
                          initialValues={postValues}
                          onSubmit={(values, actions) => {
                            setPost({
                              title: values.title,
                              hours: values.hours,
                              date: values.date,
                            });
                            activateText();
                            actions.setSubmitting(false);
                          }}
                        >
                          <Form className="flex flex-col">
                            <label htmlFor="title">Title</label>
                            <Field
                              className="bg-gray-700"
                              id="title"
                              name="title"
                              placeholder="title"
                            />
                            <label htmlFor="date">Date</label>
                            <Field
                              className="bg-gray-700"
                              id="date"
                              name="date"
                              placeholder="date"
                            />
                            <label htmlFor="hours">Hours Worked</label>
                            <Field
                              className="bg-gray-700"
                              id="hours"
                              name="hours"
                              placeholder="Hours"
                            />
                            <div className="w-full flex justify-center mt-2">
                              <button
                                className="rounded-md bg-green-800 w-1/3"
                                type="submit"
                              >
                                Submit
                              </button>
                            </div>
                          </Form>
                        </Formik>
                      </div>
                    ) : null}
                  </div>
                  <div className="flex w-11/12 h-full items-center">
                    <textarea
                      className={` textareas w-full  outline-none resize-none rounded-lg text-white opacity-75 h-full bg-gray-900 p-2 ${
                        activate ? "fadeIn" : ""
                      }  `}
                      disabled={!activate}
                      onChange={words}
                      value={postValues.description}
                    />
                  </div>
                  <div className="w-11/12 flex py-2 px-1">
                    <div className={`${activate ? null : "hidden"} flex-1`}>
                      <label className="text-green-400 ">
                        {wordCount} | 255
                      </label>
                    </div>
                    <div className="flex-1 flex justify-end">
                      <button
                        onClick={activateText}
                        className="p-1 m-1 rounded-lg bg-yellow-500  text-xs text-white"
                      >
                        <img
                          className="h-4"
                          src={Edit}
                          alt="Edit Message"
                        ></img>
                      </button>
                      <button className="p-1 m-1 rounded-lg bg-red-500  text-xs  text-white">
                        <img
                          className="h-4"
                          onClick={() => {
                            setDelete(!deletes);
                            dispatch({
                              title: id,
                              payload: `${postValues.title}`,
                              type: "DELETE_POST",
                            });
                          }}
                          src={Delete}
                          alt="Delete Message"
                        ></img>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        );
      }}
    </Consumer>
  );
};

export default Post;
