import React from "react";
import Post from "./Post";

function Posts() {
  return (
    <div className="flex flex-col">
      <div className="sm:flex hidden h-8">
        <div className="fixed p-4">
          <h1 className="text-xl font-semibold text-white">Typescript</h1>
        </div>
      </div>
      <div className="flex flex-wrap flex-col items-center ">
        <Post title="James" hours={10} date="September 21 2020" description="This my first post" />
        <Post title="Generics Review" hours={1.3} date="November 23 2020" description="learned about generics" />
        <Post title="Creating Types" hours={2.3} date="November 24 2020" description="types" />
        <Post title="Implementing Interface" hours={4.3} date="November 30 2020" description="interface" />
        <Post title="Start Project" hours={6.3} date="December 1 2020" description="weatherboi application" />
      </div>
    </div>
  );
}

export default Posts;
