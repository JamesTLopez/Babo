import React from "react";
import Post from "./Post";

import { Consumer } from "../../context/context";
import { useParams } from "react-router-dom";

interface proj {
  key: string;
  title: string;
}

const Posts: React.FC<proj> = ({ key, title }) => {
  let { id }: any = useParams();

  return (
    <Consumer>
      {({ projectState, dispatch }) => {
        
        let allProjects = projectState.allProjects;
        let posts = allProjects.filter((x: any) => x.title === id);
        let projectPosts = posts[0];

        return (
          <div className="flex items-center flex-col w-full">
            {projectPosts.posts.map((post) => (
              <Post
                key={post.title}
                title={post.title}
                hours={post.hours}
                date={post.date}
                dispatch={dispatch}
              />
            ))}
          </div>
        );
      }}
    </Consumer>
  );
};

// const Posts: React.FC<project> = ({posts}) => {
//   console.log(posts);
//   return (
//     <div className="flex items-center flex-col w-full">
//       {posts.map((post, index) => (
//         <Post
//           key={index}
//           title={post.title}
//           hours={post.hours}
//           date={post.date}
//         />
//       ))}
//     </div>
//   );
// };

export default Posts;
