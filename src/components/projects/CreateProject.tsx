import React from "react";
import { Field, Form, Formik } from "formik";

import { Consumer } from "../../context/context";
import ProjectLinks from "./projectComponents/ProjectLinks";

function CreateProject() {
  return (
    <Consumer>
      {(Projects) => {
        let { projectState, dispatch } = Projects;

        let projectList = projectState.allProjects;
        return (
          <div className="fadeIn createTasks">
            <div className="content">
              <section id="create-title">
                <h1>Project Manager</h1>
              </section>
              <section id="create-form">
                <Formik
                  initialValues={{ title: "", posts: [] }}
                  onSubmit={(values) => {
                    console.log(values);
                    dispatch({ payload: values, type: "CREATE_PROJECT" });
                  }}
                >
                  <Form>
                    <Field
                      className="bg-gray-700 text-white"
                      id="title"
                      name="title"
                      placeholder="Project title..."
                    />
                    <label>Project Color</label>
                    <div className="radio-group">
                      <label>
                        <Field type="radio" name="color" value="red" />
                        <span style={{color:'red'}}>Red</span>
                      </label>
                      <label>
                        <Field type="radio" name="color" value="green" />
                        <span style={{color:'green'}}>Green</span>
                      </label>
                      <label>
                        <Field type="radio" name="color" value="blue" />
                        <span style={{color:'blue'}}>Blue</span>
                      </label>
                      <label>
                        <Field type="radio" name="color" value="yellow" />
                        <span style={{color:'yellow'}}>Yellow</span>
                      </label>
                    </div>
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
