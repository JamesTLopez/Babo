import React from "react";
import { Field, Form, Formik } from "formik";

import { Consumer } from "../../context/context";

interface postValues {
  title: string;
  time: number;
  img: string;
}

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
                  <div id="project-link">
                    <label>{proj.title}</label>
                    <div className="item-group">
                      <button>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          height="1.5em"
                          width="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                        </svg>
                      </button>
                      <button>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          height="1.5em"
                          width="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"
                            clip-rule="evenodd"
                          ></path>
                          <rect width="3" height="3" x="2" y="9" rx="1"></rect>
                          <path d="M1 5h14v2H1z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
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
