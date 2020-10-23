import React from "react";
import { Field, Form, Formik } from "formik";

import { Consumer } from "../../context/context";
import ProjectLinks from "./projectComponents/ProjectLinks";

function CreateProject() {
  return (
    <Consumer>
      {(Projects) => {
        let state = Projects.projectState;
        console.log(state);
        let projectList = state.allProjects;
        return (
          <div className="createTasks">
            <div className="content">
              <section id="create-title">
                <h1>Project Manager</h1>
              </section>
              <section id="create-form">
                <input type="text" placeholder="Project name..."></input>
                <div className="button-group">
                  <button>Add Project</button>
                </div>
              </section>
              <section id="create-projects">
                {projectList.map((proj) => (
                 <ProjectLinks key={proj.title} title={proj.title}/>
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
