import React from "react";
import {Link} from "react-router-dom"
function Tabs() {

  return (
    <div className="outer sm:w-1/6 w-full">
      <div className="inner sm:h-full sm:w-1/6 w-full h-10 sm:fixed relative bg-gray-800 flex flex-col items-center p-2">
          <div className="flex">
            <h1 className="text-white">Projects</h1>
          </div>
          <div className="flex flex-col p-3">
            <Link to="/dashboard/projects"> All Projects</Link>
            <Link to="/dashboard/createproject"> All Projects</Link>

          </div>
      </div>
    </div>
  );
}

export default Tabs;
