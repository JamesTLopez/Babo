import React from "react";
import { Route, Switch } from "react-router-dom";
import Tabs from "../layouts/Tabs";
import Post from "../posts/Post";
import Posts from "../posts/Posts"

function Home() {
  return (
    <div className="flex justify-center h-full overflow-y-scroll bg-gray-700">
      <div className=" w-full flex sm:flex-row flex-col items-center">
      <Tabs/>
        <div className="feed h-full sm:w-full w-3/4 ">
          <Switch>
            <Route path="/dashboard/projects">   <Posts/></Route>
          </Switch>
       
        </div>
      </div>
    </div>
  );
}

export default Home;
