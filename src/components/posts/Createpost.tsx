import { Field, Form, Formik } from "formik";
import React,{useState} from "react";
import Plus from "../../images/plus.svg";

interface postValues {
    title:string;
    hours:number;
    date:string;
    description?:string;
  }


function Createpost() {

    const [active, isActive] = useState<boolean>(false);
    let [postValues, setPost] = useState<postValues>({title:'',hours:0,date:'',description:''});
    const activate = () =>{
        isActive(!active);
    }


  return (
    <div className="post fadeIn sm:w-3/4 md:4/6 lg:w-3/6 xl:w-5/6  bg-gray-800 my-5 rounded-lg flex justify-between flex-col  shadow-xl ">
      <div className="p-3 flex items-center w-full">
        <div className="flex flex-1 justify-start">
          <h1 className="text-white">Create Post</h1>
        </div>
        <div className="flex flex-1 justify-end">
          <img onClick={activate} className={!active? `rotback cursor-pointer h-5`: 'rot h-5 cursor-pointer'} src={Plus} alt="open-close"></img>
        </div>
      </div>
      {active ?
        <div className="p-3 flex items-center justify-center w-full">
            <Formik initialValues={postValues}
                   onSubmit={(values, actions) => {
          
                    actions.setSubmitting(false);
                  }}>
              <Form className="flex flex-col text-white">
                <label htmlFor="title">Title</label>
                <Field className="bg-gray-700" id="title" name="title" placeholder="" />
                <label htmlFor="date">Date</label>
                <Field className="bg-gray-700" id="date" name="date" placeholder="" />
                <label htmlFor="hours">Hours Worked</label>
                <Field className="bg-gray-700" id="hours" name="hours" placeholder="" />
                <label htmlFor="description">Description</label>
                <Field  className="bg-gray-700 h-20" id="description" name="description" placeholder="description" />
                <div className="w-full flex justify-center mt-2">
                  <button className="rounded-md bg-green-800 w-1/3" type="submit">Submit</button>
                </div>

              </Form>
            </Formik>
        </div>
      :null}
     
    </div>
  );
}

export default Createpost;
