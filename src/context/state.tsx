export interface project{
    id:number;
    title:string;
    posts:postValues[];
    dispatch?: () => null;
}

export interface postValues {
    id:number;
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
        id:1,
        title:"James",
        hours:2,
        date:"September 21 2020",
        description:""
    },
    {
        id:2,
        title:"Generics Review",
        hours:10,
        date:"April 10 2020",
        description:""
    },
    {
        id:3,
        title:"Creating Types",
        hours:1.3,
        date:"June 11 2020",
        description:""
    },
    {
        id:4,
        title:"Implementing Interface",
        hours:4,
        date:"November 23 2020",
        description:""
    },
    {
        id:5,
        title:"Start Project",
        hours:2.6,
        date:"December 1 2020",
        description:""
    },

]


export let nonTypescript:postValues[] =[
    {
        id:1,
        title:"javascript",
        hours:2,
        date:"May 31 2021",
        description:""
    },
    {
        id:2,
        title:"C++",
        hours:10,
        date:"Jun 23 2021",
        description:""
    },
    {
        id:3,
        title:"C#",
        hours:1.3,
        date:"July 11 2021",
        description:""
    },
    {
        id:4,
        title:"Unity",
        hours:4,
        date:"November 23 2021",
        description:""
    },
    {
        id:5,
        title:"Ableton",
        hours:2.6,
        date:"December 14 2021",
        description:""
    },

]

export let music:postValues[] =[
    {
        id:1,
        title:"Chords",
        hours:1,
        date:"May 31 2021",
        description:"Hello"
    },
    {
        id:2,
        title:"Guitar Scales",
        hours:10,
        date:"Jun 23 2021",
        description:"C MAJOR"
    },
    {
        id:3,
        title:"Piano",
        hours:1.3,
        date:"July 11 2021",
        description:"YEEEEEE"
    },
    {
        id:4,
        title:"Ableton Production",
        hours:4,
        date:"November 23 2021",
        description:"DAW PRACTICE"
    },
    {
        id:5,
        title:"Song writing",
        hours:2.6,
        date:"December 14 2021",
        description:"ED"
    },

]




export let jamesProject:project[] = [
    {
        id:1,
        title:"Typescript",
        posts:myPosts
    },
    {
        id:2,
        title:"NotTypescript",
        posts:nonTypescript
    },
    {
        id:3,
        title:"Music",
        posts:music
    }
]


export let jamesUser:User ={
    name:"james",
    email:'test',
    allProjects:jamesProject
}

