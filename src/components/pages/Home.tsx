import React from "react";
import Post from "../posts/Post";

function Home() {
  return (
    <div className="h-screen flex overflow-y-scroll bg-gray-700">
      <div className="container mx-auto w-3/4 flex flex-col items-center">
        <div className="tabs w-8/12 ">
          <div className="container flex justify-center">
            
          </div>
       

        </div>
        <div className="feed w-8/12 ">
          <div className="container flex flex-col items-center ">
            <Post user="James" replyingTo="Terry" content="This my first post"/>
            <Post user="James" replyingTo="Terry" content="This my first post"/>
            <Post user="James" replyingTo="Terry" content="This my first post"/>
            <Post user="James" replyingTo="Terry" content="This my first post"/>
            <Post user="James" replyingTo="Terry" content="This my first post"/>
            <Post user="James" replyingTo="Terry" content="This my first post"/>
          </div>
        </div>
      </div>
      {/* <div className="container right-0 absolute w-1/4 flex justify-center ">
        <div className="feed fixed w-1/4">
          <div className="container flex flex-col items-center mt-0">
            <Post user="James" replyingTo="Terry" content="This my first post"/>
            <Post user="James" replyingTo="Terry" content="This my first post"/>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
