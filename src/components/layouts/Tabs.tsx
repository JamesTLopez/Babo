import React from "react";
import { Link } from "react-router-dom";
import Inbox from "../../images/inbox.svg"
import Plus from "../../images/plus.svg"
import Time from "../../images/timeline.svg"

function Tabs() {
  return (
    
    <div className="tab sm: sm:w-1/6 sm:fixed relative w-full sm:h-full bg-gray-800">
      <div className="flex flex-col sm:items-start items-center p-4">
        <div className="flex flex-col w-full">
          <div className="project-nav flex flex-col">

            <div className="nav flex flex-col sm:items-start items-center">
              <Link to="/dashboard/projects"><img className="h-5" src={Inbox} alt="inbox"/> Inbox</Link>
              <Link to="/dashboard/projects"><img className="h-5" src={Time} alt="inbox"/> Time Line</Link>

            </div>
            <h1 className="text-white">Projects</h1>
            <div className="sep"></div>
            <div className="nav flex flex-col sm:items-start items-center">
              <Link to="/dashboard/projects"><img className="h-5" src={Inbox} alt="inbox"/> Typescript</Link>
              <Link  to="/dashboard/createproject"> <img className="h-3" src={Plus} alt="inbox"/> <span className="opacity-50 text-sm">Create Projects</span></Link>  
            </div>

          </div>
        </div>
        <div className="flex flex-col p-3"></div>
      </div>
    </div>
  );
}

export default Tabs;
