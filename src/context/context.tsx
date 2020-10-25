import React, { createContext, useReducer } from "react";
import { User, jamesUser } from "./state";

export const projectsReducer = (state: any, action: any) => {
  switch (action.type) {
    case "DELETE_PROJECT":
      let projects = state.allProjects.filter(
        (x: any) => x.title !== action.payload
      );

      return {
        ...state,
        allProjects: projects,
      };
    case "CREATE_PROJECT":
      return {
        ...state,
        allProject: state.allProjects.push(action.payload),
      };
    case "UPDATE_PROJECT":
    
      return {
        ...state,
        allProject: state.allProjects.push(action.payload),
      };
    case "CREATE_POST":
      
      state.allProjects.map((x: any) => {
        if (x.title === action.title) {
          let news = { ...x };
          news.posts = x.posts.push(action.payload);
          return news;
        } else {
          return x;
        }
      });


      return {
        ...state
      };
    case "UPDATE_POST":


      let changedPost = state.allProjects.map((x: any) => {
        if (x.title === action.payload.title) {
          let news = { ...x };
          console.log(news);
          return news;
        } else {
          return x;
        }
      });
      // console.log(changedPost)
      
      return {
        ...state
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
