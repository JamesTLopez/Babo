import React from "react";
import Post from "./Post";

function Posts() {
  return (
    <div className="flex flex-col">
      <div className="sm:flex hidden  h-8">
        <div className="fixed p-4">
          <h1 className="text-lg font-semibold text-white">Typescript</h1>
        </div>
      </div>
      <div className="flex flex-wrap flex-col items-center shadow-xl">
        <Post user="James" replyingTo="Terry" content="This my first post" />
        <Post user="James" replyingTo="Terry" content="This my first post" />
        <Post user="James" replyingTo="Terry" content="This my first post" />
        <Post user="James" replyingTo="Terry" content="This my first post" />
        <Post user="James" replyingTo="Terry" content="This my first post" />
        <Post user="James" replyingTo="Terry" content="This my first post" />
      </div>
    </div>
  );
}

export default Posts;
