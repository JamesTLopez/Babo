import React from "react";
import { Consumer } from "../../context/context";

function CompletedPosts() {
  return (
    <Consumer>
      {(Projects) => {
        let { projectState } = Projects;

        if (!(projectState.completed_posts.length === 0)) {
          return (
            <div className="completed_posts">
              {projectState.completed_posts.map((x: any) => (
                <div key={x.title} className="postCard bg-gray-900">
                  <div className="flex flex-col mr-3">
                    <div className="dot" style={{borderColor:`${x.color}`}}></div>
                  </div>
                  <div className="container">
                    <h1>Title: {x.title}</h1>
                    <h1>Date: {x.date}</h1>
                    <h1>Description: {x.description}</h1>
                  </div>
                </div>
              ))}
            </div>
          );
        } else {
          return <div> No Completed Posts</div>;
        }
      }}
    </Consumer>
  );
}

export default CompletedPosts;

//style={{backgroundColor:`${x.color}`}}
