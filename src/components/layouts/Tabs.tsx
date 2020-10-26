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
          <div className="tab sm:w-1/6 sm:fixed relative w-full sm:h-full bg-gray-800">
            <div className="button-container flex items-end justify-end w-full ">
              <div onClick={onyx} className="sm:hidden ham">
                <div className={menu ? "line line-1" : "line "}></div>
                <div className={menu ? "line line-2" : "line "}></div>
                <div className={menu ? "line line-3" : "line"}></div>
              </div>
            </div>
            <div
              className={
                !menu
                  ? "sm:flex flex-col sm:visible hidden sm:items-start items-center p-4"
                  : "sm:flex flex-col sm:items-start items-center p-4"
              }
            >
              <div className="flex flex-col w-full">
                <div className="project-nav flex flex-col">
                  <div className="sm:hidden nav flex flex-col sm:items-start items-center">
                    <Link to="/dashboard">
                      <img className="h-5" src={Inbox} alt="inbox" /> Inbox
                    </Link>
                  </div>
                  <h1 className="text-white">Projects</h1>
                  <div className="sep"></div>
                  <div className="nav flex flex-col sm:items-start items-center">
                    {projectState.allProjects.map((x) => (
                      <Link key={x.title} to={`/dashboard/projects/${x.title}`}>
                        <img className="h-5" src={Inbox} alt="inbox" />{" "}
                        {x.title}
                      </Link>
                    ))}
                    <Link to="/createproject">
                      <img className="h-3" src={Plus} alt="inbox" />{" "}
                      <span className="opacity-50 text-sm">
                        Create Projects
                      </span>
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
