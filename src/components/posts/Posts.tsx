import React from "react";
import Post from "./Post";
import { project } from "../../context/state";

const Posts: React.FC<project> = ({posts}) => {
  return (
    <div className=" flex items-center flex-col w-full">
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          hours={post.hours}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default Posts;
