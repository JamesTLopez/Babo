import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context/context";
import Inbox from "../../images/inbox.svg";
import Plus from "../../images/plus.svg";

function Tabs() {
  const [menu, isMenuSelected] = useState<boolean>(false);

  const onyx = () => {
    isMenuSelected(!menu);
  };

  return (
    <Consumer>
      {(Projects) => {
        let { projectState } = Projects;

        return (
          <div className="tab lg:w-1/6 lg:fixed relative w-full lg:h-full bg-gray-800">
            <div className="button-container flex items-end justify-end w-full ">
              <div onClick={onyx} className="lg:hidden ham">
                <div className={menu ? "line line-1" : "line "}></div>
                <div className={menu ? "line line-2" : "line "}></div>
                <div className={menu ? "line line-3" : "line"}></div>
              </div>
            </div>
            <div
              className={
                !menu
                  ? "lg:flex flex-col lg:visible hidden lg:items-start items-center p-4"
                  : "lg:flex flex-col lg:items-start items-center p-4"
              }
            >
              <div className="flex flex-col w-full">
                <div className="project-nav flex flex-col">
                  <h1 className="text-white">Projects</h1>
                  <div className="sep"></div>
                  <div className="nav flex flex-col sm:items-start items-center">
                    {projectState.allProjects.map((x) => (
                      <Link key={x.title} to={`/dashboard/projects/${x.title}`}>
                        <div className="dot-tab" style={{borderColor:`${x.color}`}}/>
                        {x.title}
                      </Link>
                    ))}
                    <Link to="/createproject">
                      <img className="h-3" src={Plus} alt="inbox" />{" "}
                      <span className="opacity-50 text-sm">
                        Project Manager
                      </span>
                    </Link>
                  </div>
                  <div className="sep"></div>
                <div className="nav flex flex-col sm:items-start items-center">
                  <Link to="/dashboard/completed">
                    <img className="h-5" src={Inbox} alt="inbox" /> Completed Posts
                  </Link>
                </div>
                </div>
              </div>
              <div className="flex flex-col p-3"></div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Tabs;
