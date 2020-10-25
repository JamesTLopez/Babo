import React from "react";
import { Route, Switch } from "react-router-dom";
import { Consumer } from "../../context/context";
import Header from "../layouts/Header";
import Tabs from "../layouts/Tabs";
import CreateProject from "../projects/CreateProject";
import Project from "../projects/Project";
import Inbox from "./Inbox";

function Dashboard() {
  return (
    <Consumer>
      {(Projects) => { 
        
        let {projectState,dispatch} = Projects;

        return(
        <div className="back flex justify-center h-full  bg-gray-700">
          <Header />
          <div className="theTop w-full flex sm:flex-row flex-col items-center">
            <Tabs />
            <div className="divs w-1/6"></div>
          
            <div className="feed h-full sm:w-5/6 w-3/4 overflow-y-scroll">
              <Switch>
              <Route
                  path="/dashboard/inbox"
                  component={Inbox}
                />
                <Route path="/dashboard/projects/:id">
                  <Project state={projectState} dispatch={dispatch}/>
                </Route>
                <Route
                  path="/dashboard/createproject"
                  component={CreateProject}
                />
              </Switch>
            </div>
          </div>
        </div>
      )}}
    </Consumer>
  );
}

export default Dashboard;
