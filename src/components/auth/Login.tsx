import React from "react";
import { Formik, Form, Field } from "formik";
import Babo from "../../images/babologo.svg"

interface MyFormValues {
  firstName: string;
}

function Login() {
  const initialValues: MyFormValues = { firstName: "" };

  return (
    <div className="h-screen w-full flex items-center">
      <div className="container relative mx-auto h-full flex  justify-center items-center">
        <div className="formcard relative flex flex-col justify-around bg-gray-900 sm:w-1/4 lg:w-1/2 shadow-xl p-6 rounded-lg">
          <div className="Logo flex justify-center">
            <img src={Babo} className="git" alt="Babo"/>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            <div className="formarea w-full flex flex-col items-center">
              <Form className="flex flex-col w-3/4 ">
                <label className="text-white text-lg rounded" htmlFor="email">Email</label>
                <Field className="p-2" id="email" name="email" placeholder="Email address..." />
                <label className="text-white text-lg rounded" htmlFor="email">Password</label>
                <Field className="p-2" id="password" name="password" placeholder="Password..." />
                <button type="submit">Submit</button>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
