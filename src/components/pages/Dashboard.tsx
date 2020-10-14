import React from "react";
import { Route, Switch } from "react-router-dom";
import Tabs from "../layouts/Tabs"; 

import Posts from "../posts/Posts";
import CreateProject from "../projects/CreateProject";

function Dashboard() {
  return (
    <div className="flex justify-center h-full  bg-gray-700">
      <div className=" w-full flex sm:flex-row flex-col items-center">
        <Tabs />
        <div className="w-1/6"></div>
        <div className="feed h-full sm:w-5/6 w-3/4 overflow-y-scroll">
          
          <Switch>
            <Route path="/dashboard/projects" component={Posts}/>
            <Route path="/dashboard/createproject" component={CreateProject}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
