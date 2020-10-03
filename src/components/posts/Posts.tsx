import React from 'react'
import Post from './Post'


function Posts() {

    let x: number = 4;
    return (
        <div className="container flex flex-wrap flex-col items-center ">
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
