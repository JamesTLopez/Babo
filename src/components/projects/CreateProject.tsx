import React from "react";
import { Field, Form, Formik } from "formik";

interface postValues {
    title:string;
    time:number;
    img:string;
}


function CreateProject() {
  return (
    <div className="p-10 relative flex items-center justify-center">
      <div className="container flex flex-col justify-center w-2/3 relative bg-gray-800  rounded-md">
        <div className="title flex p-5 items-center bg-gray-900 h-full rounded-md">
          <h1 className="ml-5 text-white">Create Project</h1>
        </div>
        <div className="main p-5">
          <div className="ml-5 input">
          <Formik
              initialValues={{title:'',time:0,img:""}}
              onSubmit={(values, actions) => {
                actions.setSubmitting(false);
              }}
            >
              <Form className="flex text-white">
                <div className="flex flex-1 flex-col">
                    <label  htmlFor="title">Project Name</label>
                    <Field
                    className=" w-3/4 bg-gray-900 mt-2 rounded-md h-8"
                    id="title"
                    name="title"
                    placeholder=""
                    />
                </div>
                <div className="flex flex-1 flex-col">
                    <label  htmlFor="title">Project Duration</label>
                    <Field
                    className="w-3/4 bg-gray-900 mt-2 rounded-md h-8"
                    id="title"
                    name="title"
                    placeholder=""
                    />
                </div>
       
         
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
