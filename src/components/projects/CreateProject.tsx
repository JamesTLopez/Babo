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
                  initialValues={{ title: "",color:"", posts: [] }}
                  onSubmit={(values) => {
                    console.log(values);
                    if(values.title === ""){
                      alert("title must have a value");

                    }else if(values.color === ""){
                      alert("Color for project must be selected");
                    }else{
                      dispatch({ payload: values, type: "CREATE_PROJECT" });
                    }
   
                    
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
                        <Field type="radio" name="color" value="#ef476f" />
                        <span style={{color:'#ef476f'}}>Red</span>
                      </label>
                      <label>
                        <Field type="radio" name="color" value="#06d6a0" />
                        <span style={{color:'#06d6a0'}}>Green</span>
                      </label>
                      <label>
                        <Field type="radio" name="color" value="#118ab2" />
                        <span style={{color:'#118ab2'}}>Blue</span>
                      </label>
                      <label>
                        <Field type="radio" name="color" value="#ffd166" />
                        <span style={{color:'#ffd166'}}>Yellow</span>
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
