import React from "react";
import { Formik, Form, Field } from "formik";
import { Consumer } from "../../context/context";
import { useParams } from "react-router-dom";

interface postKeyValues {
  id: number;
  title: string;
  date: string;
  hours: number;
  description?: string;
}

const UpdatePost: React.FC<postKeyValues> = ({
  id,
  title,
  date,
  hours,
  description,
}) => {
  const initialValues: postKeyValues = {
    id: id,
    title: title,
    date: date,
    hours: hours,
    description: description,
  };

  let a: any = useParams();

  return (
    <Consumer>
      {({ dispatch }) => {
        return (
          <div className="updatepost">
            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                dispatch({
                  title: a.id,
                  id:id,
                  type: "UPDATE_POST",
                  payload: values,
                });

                actions.setSubmitting(false);
              }}
            >
              <Form>
                <label htmlFor="Title">Title</label>
                <Field id="title" name="title" placeholder="title" />
                <label htmlFor="Date">Date</label>
                <Field id="date" name="date" placeholder="date..." />
                <label htmlFor="Hours">Hours</label>
                <Field id="hours" name="hours" placeholder="hours..." />
                <label htmlFor="Description">Description</label>
                <Field
                  id="description"
                  name="description"
                  placeholder="Description..."
                />

                <button className="text-white" type="submit">
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        );
      }}
    </Consumer>
  );
};

export default UpdatePost;
