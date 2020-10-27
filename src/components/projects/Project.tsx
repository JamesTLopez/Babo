import React  from "react";
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
    return <ErrorHandler message='Project does not exist' />;
  } else {
    return (
      <div key={projectPosts.title} className="p-10 relative flex flex-col">
        <div className="sm:flex items-center hidden h-12">
          <div className="fixed p-4">
            <h1 className="text-xl font-semibold text-white">
              {projectPosts.title}
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="sm:w-2/3  w-full flex flex-col items-center ">
            <Posts />
          </div>
          <div className="sm:visible hidden sm:w-1/3 md:relative absolute md:flex flex-col items-center">
            <Createpost />
          </div>
        </div>
      </div>
    );
  }
};

export default Project;
