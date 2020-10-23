import React, { createContext, useReducer } from "react";
import { User, jamesUser } from "./state";

export const projectsReducer = (state: any, action: any) => {
  switch (action.type) {
    case"DELETE_PROJECT":
    
      let projects = state.allProjects.filter((x:any) => x.title != action.payload);

      return{
        ...state,
        allProjects:projects
      }
    case "CREATE_POST":
      console.log(action.payload);
      return {
        ...state,
      };
    case "UPDATE_POST":
      console.log(action.payload);
      return {
        ...state,
      };
    case "DELETE_POST":
      let post = state.allProjects.map((x: any) => {
        if (x.title === action.title) {
          let news = { ...x };
          news.posts = x.posts.filter((x: any) => x.title !== action.payload);
          return news;
        } else {
          return x;
        }
      });
      return {
        ...state,
        allProjects: post,
      };
    default:
      console.log("reder");
      return state;
  }
};

export const AppContext = createContext<{ projectState: User; dispatch: any }>({
  projectState: jamesUser,
  dispatch: () => null,
});

export const Provider = (props: { children: React.ReactNode }) => {
  const [projectState, dispatch] = useReducer(projectsReducer, jamesUser);

  return (
    <AppContext.Provider value={{ projectState, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const Consumer = AppContext.Consumer;
