export interface project{
    title:string;
    posts:postValues[];
    dispatch?: () => null;
}

export interface postValues {
    title:string;
    hours:number;
    date:string;
    description?:string;
    deleteHandler?:(key:number) => void;
}



export interface User {
    name:string;
    email:string;
    allProjects:project[];
}




export let myPosts:postValues[] =[
    {
        title:"James",
        hours:2,
        date:"September 21 2020"
    },
    {
        title:"Generics Review",
        hours:10,
        date:"April 10 2020"
    },
    {
        title:"Creating Types",
        hours:1.3,
        date:"June 11 2020"
    },
    {
        title:"Implementing Interface",
        hours:4,
        date:"November 23 2020"
    },
    {
        title:"Start Project",
        hours:2.6,
        date:"December 1 2020"
    },

]


export let nonTypescript:postValues[] =[
    {
        title:"javascript",
        hours:2,
        date:"May 31 2021"
    },
    {
        title:"C++",
        hours:10,
        date:"Jun 23 2021"
    },
    {
        title:"C#",
        hours:1.3,
        date:"July 11 2021"
    },
    {
        title:"Unity",
        hours:4,
        date:"November 23 2021"
    },
    {
        title:"Ableton",
        hours:2.6,
        date:"December 14 2021"
    },

]

export let music:postValues[] =[
    {
        title:"Chords",
        hours:1,
        date:"May 31 2021"
    },
    {
        title:"Guitar Scales",
        hours:10,
        date:"Jun 23 2021"
    },
    {
        title:"Piano",
        hours:1.3,
        date:"July 11 2021"
    },
    {
        title:"Ableton Production",
        hours:4,
        date:"November 23 2021"
    },
    {
        title:"Song writing",
        hours:2.6,
        date:"December 14 2021"
    },

]




export let jamesProject:project[] = [
    {
        title:"Typescript",
        posts:myPosts
    },
    {
        title:"NotTypescript",
        posts:nonTypescript
    },
    {
        title:"Music",
        posts:music
    }
]


export let jamesUser:User ={
    name:"james",
    email:'test',
    allProjects:jamesProject
}

