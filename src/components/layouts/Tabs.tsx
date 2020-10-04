import React from "react";
import { Link } from "react-router-dom";
function Tabs() {
  return (
    
    <div className="sm:w-1/6 sm:fixed relative w-full sm:h-full bg-gray-800">
      <div className="flex flex-col sm:items-start items-center p-2">
        <div className="flex flex-col">
          <h1 className="text-white">Projects</h1>
          <Link to="/dashboard/projects"> All Projects</Link>
          <Link to="/dashboard/createproject"> All Projects</Link>
        </div>
        <div className="flex flex-col p-3"></div>
      </div>
    </div>
  );
}

export default Tabs;
