import React from "react";
import Createpost from "./Createpost";
import Post from "./Post";
import { Consumer } from "../../context/context";

function Posts() {
  return (
    <Consumer>
      {(User) => {
        let allProjects = User.allProjects;
        let posts = allProjects[0];
        return (
          <div className="p-10 relative flex flex-col">
            <div className="sm:flex items-center hidden h-12">
              <div className="fixed p-4">
                <h1 className="text-xl font-semibold text-white">{posts.title}</h1>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="md:w-2/3  w-full flex flex-col items-center ">
                {posts.posts.map((post,index) =>
                  <Post key={index} title={post.title} hours={post.hours} date={post.date} />
                )}
              </div>
              <div className="sm:visible hidden w-1/3 md:relative absolute md:flex flex-col items-center">
                <Createpost />
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}


export default Posts;
