import React from "react";
import Createpost from "../posts/Createpost";
import Posts from "../posts/Posts";
import { useParams } from "react-router-dom";
import ErrorHandler from "../pages/ErrorHandler";

const Project: React.FC<any> = ({ state }) => {
  let { id }: any = useParams();

  let allProjects = state.allProjects;
  let posts = allProjects.filter((x: any) => x.title === id);
  let projectPosts = posts[0];

  if (projectPosts === undefined) {
    return <ErrorHandler message="Project does not exist" />;
  } else {
    return (
      <div key={projectPosts.title} className="p-10 relative flex flex-col justify-center overflow-x-hidden">
        <div className="flex lg:flex-row flex-col  ">
          <div className="lg:w-2/3  w-full flex flex-col items-center ">
            <Posts />
          </div>
          <div className=" lg:w-1/3 flex  justify-center ">
            <Createpost />
          </div>
        </div>
      </div>
    );
  }
};

export default Project;
