import React from "react";
import { Consumer } from "../../context/context";

function Inbox() {
  return (
    <Consumer>
      {({projectState}) => {

        let allPosts = projectState.allProjects;
        console.log(allPosts.filter((x:any) => x.posts))


        return (
          <div className="flex justify-center items-center p-5">
            <div className="allItems">
      

            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Inbox;
