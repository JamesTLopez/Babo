import React, { useState } from "react";
import Edit from "../../images/edit.png";
import Delete from "../../images/delete.png";
import Finished from "../../images/finished.png"

import { useParams } from "react-router-dom";
import { Consumer } from "../../context/context";
import UpdatePost from "./UpdatePost";

interface postValues {
  entirePost:any;
  ids: number;
  color:string;
  title: string;
  hours: number;
  date: string;
  description?: string;
}

const Post: React.FC<postValues> = ({entirePost,
  ids,
  color,
  title,
  hours,
  date,
  description,

}) => {
  let [activate, setActivate] = useState<boolean>(false);
  let [deletes, setDelete] = useState<boolean>(true);
  let [postValues] = useState<postValues>({
    entirePost:entirePost,
    color:color,
    ids: ids,
    title: title,
    hours: hours,
    date: date,
    description: description,
  });

  let { id }: any = useParams();


  return (
    <Consumer>
      {({ dispatch }) => {

        return (
          <>
            {deletes ? (
              <div
                className={`post fadeIn  sm:w-3/4 xl:w-4/6   bg-gray-800 my-5 rounded-lg flex justify-between flex-col sm:flex-row shadow-xl `}
              >
                <div className="image flex flex-col items-center m-2 ">
                  <div className="dot" style={{borderColor:`${color}`}}>

                  </div>
                  <div className="sm:visible sm:my-1 vertical-divider h-full rounded-lg"></div>
                </div>
                <div className="flex items-center justify-between flex-col w-full p-2 bg-gray-800 rounded-lg">
                  {!activate ? (
                    <>
                      <div className="flex w-11/12 ">
                        <div className="flex-1 p-2  text-xs text-white flex flex-col ">
                          <h2 className="text-lg font-bold opacity-100">
                            {postValues.title}
                          </h2>
                          <h2 className="text-sm opacity-75">{id}</h2>
                          <h2 className="opacity-50">{postValues.date}</h2>
                          <h2 className="opacity-50">
                            {postValues.hours} h
                          </h2>
                        </div>
                      </div>
                      <div className="flex w-11/12 h-full items-center">
                        <textarea
                          className={` textareas w-full  outline-none resize-none rounded-lg text-white opacity-75 h-full bg-gray-900 p-2 `}
                          value={postValues.description}
                          disabled={true}
                        />
                      </div>
                    </>
                  ) : (
                    <UpdatePost
                      id={postValues.ids}
                      title={postValues.title}
                      date={postValues.date}
                      hours={postValues.hours}
                      description={postValues.description}
                    />
                  )}

                  <div className="w-11/12 flex py-2 px-1">
                  <div className="flex-1 flex justify-start">
                      <button
                        onClick={() => {
                          setDelete(!deletes);
                          dispatch({
                            title: id,
                            payload: `${postValues.title}`,
                            entirePost:entirePost,
                            type: "COMPLETE_POST",
                          });
                        }}
                        className="p-1 m-1 rounded-lg bg-green-500  text-xs text-white"
                      >
                        <img
                          className="h-4"
                          src={Finished}
                          alt="Complete post"
                        ></img>
                      </button>
                    </div>
                    <div className="flex-1 flex justify-end">
                      <button
                        onClick={() => {
                          setActivate(!activate);
                        }}
                        className="p-1 m-1 rounded-lg bg-yellow-500  text-xs text-white"
                      >
                        <img
                          className="h-4"
                          src={Edit}
                          alt="Edit Message"
                        ></img>
                      </button>
                      <button className="p-1 m-1 rounded-lg bg-red-500  text-xs  text-white">
                        <img
                          className="h-4"
                          onClick={() => {
                            setDelete(!deletes);
                            dispatch({
                              title: id,
                              payload: `${postValues.title}`,
                              type: "DELETE_POST",
                            });
                          }}
                          src={Delete}
                          alt="Delete Message"
                        ></img>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </>
        );
      }}
    </Consumer>
  );
};

export default Post;
