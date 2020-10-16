import React from "react";
import Createpost from "./Createpost";
import Post from "./Post";
import { project } from "../../context/context";

const Posts: React.FC<project> = ({ title, posts }) => {
  return (
    <div className=" flex items-center  flex-col w-full">
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
