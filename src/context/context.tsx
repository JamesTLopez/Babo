import { replace } from "formik";
import React, { createContext, useReducer } from "react";

import { User, jamesUser, jamesProject, project } from "./state";



export const projectsReducer = (state: any, action: any) => {
  switch (action.type) {
    case "DELETE_POST":
      console.log("Project Reducer works");

      let post = state.allProjects.map((x:any) => {
        if(x.title === action.title){
            let news = {...x}
            news.posts = x.posts.filter((x:any) => x.title !== action.payload)
            return news
        }
        else{
          return x;
        }
        });
      return {
        ...state,
        allProjects:post
      };
    default:
      console.log("reder");
      return state;
  }
};



export const AppContext = createContext<{ state: User; dispatch: any }>(
  {
    state: jamesUser,
    dispatch: () => null,
  }
);

export const Provider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(projectsReducer, jamesUser);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const Consumer = AppContext.Consumer;
