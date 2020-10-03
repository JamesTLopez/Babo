import React from 'react'
import Post from './Post'


function Posts() {

    return (
        <div className="flex flex-wrap flex-col items-center ">
            <Post user="James" replyingTo="Terry" content="This my first post"/>
            <Post user="James" replyingTo="Terry" content="This my first post"/>
            <Post user="James" replyingTo="Terry" content="This my first post"/>
            <Post user="James" replyingTo="Terry" content="This my first post"/>
            <Post user="James" replyingTo="Terry" content="This my first post"/>
            <Post user="James" replyingTo="Terry" content="This my first post"/>
        </div>
    )
}

export default Posts
