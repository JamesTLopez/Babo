import React from "react";
import Post from "./Post";

import { Consumer } from "../../context/context";
import { useParams } from "react-router-dom";


const Posts: React.FC = () => {
  let { id }: any = useParams();

  return (
    <Consumer>
      {({ projectState }) => {
        let allProjects = projectState.allProjects;
        let posts = allProjects.filter((x: any) => x.title === id);
        let projectPosts = posts[0];

        return (
          <div className="flex items-center flex-col w-full">
            {projectPosts.posts.map((post) => (
              <div
                className="flex items-center flex-col w-full"
                key={post.title || post.hours || post.date || post.description}
              >
                <Post ids={post.id} title={post.title} hours={post.hours} date={post.date} description={post.description}/>
              </div>
            ))}
          </div>
        );
      }}
    </Consumer>
  );
};

export default Posts;
