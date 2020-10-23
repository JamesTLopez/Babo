import React from "react";
import { Field, Form, Formik } from "formik";

import { Consumer } from "../../context/context";
import ProjectLinks from "./projectComponents/ProjectLinks";

function CreateProject() {
  return (
    <Consumer>
      {(Projects) => {

        let {projectState ,dispatch} = Projects;
        console.log(projectState);
        let projectList = projectState.allProjects;
        return (
          <div className="createTasks">
            <div className="content">
              <section id="create-title">
                <h1>Project Manager</h1>
              </section>
              <section id="create-form">
                <Formik
                  initialValues={{ title: "", posts: [] }}
                  onSubmit={(values, actions) => {
          
                    dispatch({payload:values,type:"CREATE_PROJECT"})
                    actions.setSubmitting(false);
                  }}
                >
                  <Form>
                    <Field
                      className="bg-gray-700"
                      id="title"
                      name="title"
                      placeholder="title"
                    />
                    <div className="button-group">
                      <button>Add Project</button>
                    </div>
                  </Form>
                </Formik>
              </section>
              <section id="create-projects">
                {projectList.map((proj) => (
                  <ProjectLinks key={proj.title} title={proj.title} />
                ))}
              </section>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default CreateProject;
