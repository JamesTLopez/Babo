import React from "react";
import { Formik, Form, Field } from "formik";

interface postKeyValues {
    Title: string;
    Date:string;
    Hours:number;
    Description?:string;
}

const UpdatePost: React.FC<postKeyValues> = ({Title,Date,Hours,Description}) => {
  const initialValues: postKeyValues = { Title: Title,Date:Date,Hours:Hours,Description:Description };

  return (
    <div className="updatepost">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });

          alert(JSON.stringify(values, null, 2));

          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="Title">Title</label>
          <Field id="Title" name="Title" placeholder="title" />
          <label htmlFor="Date">Date</label>
          <Field id="Date" name="Date" placeholder="date..." />
          <label htmlFor="Hours">Hours</label>
          <Field id="Hours" name="Hours" placeholder="hours..." />
          <label htmlFor="Description">Description</label>
          <Field id="Description" name="Description" placeholder="Description..." />


          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdatePost;
