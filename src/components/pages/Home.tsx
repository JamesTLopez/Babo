import React from "react";
import Post from "../posts/Post";
import Posts from "../posts/Posts"

function Home() {
  return (
    <div className="h-screen flex justify-center overflow-y-scroll bg-gray-700">
      <div className=" w-full flex flex-col items-center">
        <div className="tabs w-8/12 ">
          <div className="container flex justify-center">
            Hello
          </div>
       

        </div>
        <div className="feed w-3/4 sm:w-full">
          <Posts/>
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
