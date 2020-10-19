import React, { useState } from "react";
import Createpost from "../posts/Createpost";
import Posts from "../posts/Posts";
import { useParams } from "react-router-dom";

const Project: React.FC<any> = ({state,dispatch}) => {

  let [] = useState<any>({state,dispatch})
  let { id }: any = useParams();
  console.log(state)
  let allProjects = state.allProjects;
  let posts = allProjects.filter((x: any) => x.title === id);
  let projectPosts = posts[0];


  return (
    <div  className="p-10 relative flex flex-col">
      <div className="sm:flex items-center hidden h-12">
        <div className="fixed p-4">
          <h1 className="text-xl font-semibold text-white">
            {projectPosts.title}
            <button
              onClick={() => {
                dispatch({ title: id, payload: "James", type: "DELETE_POST" });
              }}
            >
              Delete me
            </button>
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="md:w-2/3  w-full flex flex-col items-center ">
          <Posts
            key={projectPosts.title}
            title={projectPosts.title}
            posts={projectPosts.posts}
            
          />
        </div>
        <div className="sm:visible hidden w-1/3 md:relative absolute md:flex flex-col items-center">
          <Createpost />
        </div>
      </div>
    </div>
  );

};

export default Project;
