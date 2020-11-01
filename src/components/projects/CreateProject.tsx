import React from "react";
import { Field, Form, Formik } from "formik";
import Babo from "../../images/BaboHeader.svg";
import { Consumer } from "../../context/context";
import { useHistory } from "react-router-dom";
import ProjectLinks from "./projectComponents/ProjectLinks";

function CreateProject() {
  let history = useHistory();
  return (
    <Consumer>
      {(Projects) => {
        let { projectState, dispatch } = Projects;

        let projectList = projectState.allProjects;
        return (
          <div className="fadeIn createTasks">
            <div className="content">
              <section id="create-title">
                <img src={Babo} alt="Babo Header"/>
                <h1>Project Manager</h1>
              </section>
              <section id="create-form">
                <Formik
                  initialValues={{ title: "",color:"", posts: [] }}
                  onSubmit={(values) => {
                    if(values.title.includes(" ")){
                      alert("Title can not contain whitespace")
                    }else if(values.title === ""){
                      alert("Title must have a value");
                    }else if(values.color === ""){
                      alert("Color for project must be selected");
                    }else{
                      dispatch({ payload: values, type: "CREATE_PROJECT" });
                      history.push(`/dashboard/projects/${values.title}`);
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
