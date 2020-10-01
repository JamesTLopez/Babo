import React from "react";
import ProfilesPic from "../../images/pro.jpg";
import Edit from "../../images/edit.png"
import Delete from "../../images/delete.png"

interface props {
  user: string;
  replyingTo?: string;
  content: string;
}

const Post: React.FC<props> = ({ user, replyingTo, content }) => {
  return (
    <div className="post h-48 w-4/6 bg-gray-800 my-5 rounded-lg flex">
      <div className="image flex flex-col items-center m-2 ">
        <img className="h-10 rounded-full" src={ProfilesPic} alt="temp"></img>
        <div className="my-1 vertical-divider h-full rounded-lg"></div>
      </div>
      <div className="flex items-center flex-col w-full p-2 bg-gray-800 rounded-lg">
        <textarea
          className="textarea w-11/12 mt-3 outline-none resize-none bg-gray-800 text-white opacity-75 h-full"
        />
        <div className="w-full flex py-3 px-1">
            <div className="flex-1">

            </div>
            <div className="flex-1 flex justify-end">
                <button className="p-1 m-1 rounded-lg bg-yellow-500  text-xs p-1 text-white"><img className="h-4" src={Edit} alt="Edit Message"></img></button>
                <button className="p-1 m-1 rounded-lg bg-red-500  text-xs p-1 text-white"><img className="h-4" src={Delete} alt="Delete Message"></img></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
