import React, {  useState } from "react";
import ProfilesPic from "../../images/pro.jpg";
import Edit from "../../images/edit.png";
import Delete from "../../images/delete.png";

import { useParams } from "react-router-dom";
import { Consumer } from "../../context/context";
import UpdatePost from "./UpdatePost";

interface postValues {
  id:number;
  title: string;
  hours: number;
  date: string;
  description?: string;
  dispatch?: () => void;
}

const Post: React.FC<postValues> = ({id,
  title,
  hours,
  date,
  description,
  dispatch,
}) => {
  let [activate, setActivate] = useState<boolean>(false);
  let [deletes, setDelete] = useState<boolean>(true);
  let [postValues, ] = useState<postValues>({
    id:id,
    title: title,
    hours: hours,
    date: date,
    description: description,
  });


  let { projectName }: any = useParams();


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
                  <img
                    className="sm:h-10 h-16 rounded-full"
                    src={ProfilesPic}
                    alt="temp"
                  ></img>
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
                          <h2 className="text-sm opacity-75">
                            {projectName}
                          </h2>
                          <h2 className="opacity-50">{postValues.date}</h2>
                          <h2 className="opacity-50">
                            {postValues.hours} / 10.3 h
                          </h2>
                        </div>
                      </div>
                      <div className="flex w-11/12 h-full items-center">
                        <textarea
                          className={` textareas w-full  outline-none resize-none rounded-lg text-white opacity-75 h-full bg-gray-900 p-2 `}
                          disabled={true}
                        />
                      </div>
                    </>
                  ) : (
                    <UpdatePost id={postValues.id} title={postValues.title} date={postValues.date} hours={postValues.hours} description={postValues.description}/>
                  )}

                  <div className="w-11/12 flex py-2 px-1">
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
                              title: projectName,
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
