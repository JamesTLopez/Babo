import React, { useEffect, useState } from "react";
import ProfilesPic from "../../images/pro.jpg";
import Edit from "../../images/edit.png";
import Delete from "../../images/delete.png";
import { Formik,Form,Field } from "formik";

interface props {
  user: string;
  replyingTo?: string;
  content: string;
}

interface postValues {
  title:string;
  hours:number;
  date:string;
  description?:string;
}

const Post: React.FC<props> = ({ user, replyingTo, content }) => {
  let [activate, setActivate] = useState<boolean>(false);
  let [postValues, setPost] = useState<postValues>({title:"Generics Review",hours:2.1,date:"September 21 2020",description:"Hello"});
  let [wordCount, setWordCount] = useState<number>(0);

  useEffect(() => {
    if(postValues.description?.length !== undefined){
      setWordCount(postValues.description.length);
    }
    console.log("i ran once")

  });

  const activateText = () => {
    setActivate(!activate);
  };

  const words = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length >= 255) {
      alert("Too many characters in description");
      setActivate(!activate);
    }
    setPost({title:postValues.title,hours:postValues.hours,date:postValues.date,description:e.target.value})
    setWordCount(e.target.value.length);
  };

  return (
    <div className="post fadeIn h-100 w-10/12 bg-gray-800 my-5 rounded-lg flex ">
      <div className="image flex flex-col items-center m-2 ">
        <img className="h-10 rounded-full" src={ProfilesPic} alt="temp"></img>
        <div className="my-1 vertical-divider h-full rounded-lg"></div>
      </div>
      <div className="flex items-center flex-col w-full p-2 bg-gray-800 rounded-lg">
        <div className="flex w-11/12 ">
          <div className="flex-1 text-xs text-white flex flex-col justify-center">
            <h2 className="text-lg font-bold opacity-100">Learn Typescript</h2>
            <h2 className="text-sm opacity-75">{postValues.title}</h2>
            <h2 className="opacity-50">{postValues.date}</h2>
            <h2 className="opacity-50">{postValues.hours} / 10.3 h</h2>
          </div>
          {activate ?<div className="fadeIn flex-1 text-xs text-white flex flex-col">
            <Formik initialValues={postValues}
                   onSubmit={(values, actions) => {
                    setPost({title:values.title,hours:values.hours,date:values.date})
                    actions.setSubmitting(false);
                  }}>
              <Form className="flex flex-col">
                <label htmlFor="title">Title</label>
                <Field className="bg-gray-700" id="title" name="title" placeholder="title" />
                <label htmlFor="date">Date</label>
                <Field className="bg-gray-700" id="date" name="date" placeholder="date" />
                <label htmlFor="hours">Hours Worked</label>
                <Field className="bg-gray-700" id="hours" name="hours" placeholder="Hours" />
                <button type="submit">Submit</button>
              </Form>
            </Formik>
          </div>:null}
        </div>
        <textarea
          className={` textarea w-11/12 mt-3 outline-none resize-none rounded-lg  text-white opacity-75 h-full p-2 ${
            activate ? "fadeIn bg-gray-900" : "bg-gray-800"
          }  `}
          disabled={!activate}
          onChange={words}
          value={postValues.description}
        />
        <div className="w-11/12 flex py-2 px-1">
          <div className="flex-1">
            <label className="text-green-400 ">{wordCount} | 255</label>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              onClick={activateText}
              className="p-1 m-1 rounded-lg bg-yellow-500  text-xs text-white"
            >
              <img className="h-4" src={Edit} alt="Edit Message"></img>
            </button>
            <button className="p-1 m-1 rounded-lg bg-red-500  text-xs  text-white">
              <img className="h-4" src={Delete} alt="Delete Message"></img>
            </button>
          </div>
        </div>
      </div>
      <div className="image flex flex-col items-center my-2 ml-2 mr-2 ">
        <img className="h-10 rounded-full" src={ProfilesPic} alt="temp"></img>
        <div className="my-1 vertical-divider h-full rounded-lg"></div>
      </div>
    </div>
  );
};

export default Post;
