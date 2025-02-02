export interface project{
    id:number;
    title:string;
    color:string;
    posts:postValues[];
    dispatch?: () => null;
}

export interface postValues {
    id:number;
    color:string;
    title:string;
    hours:number;
    date:string;
    description?:string;
    isCompleted:boolean;

}



export interface User {
    name:string;
    email:string;
    allProjects:project[];
    completed_posts:postValues[];
}




export let myPosts:postValues[] =[
    {
        id:1,
        color:'#ef476f',
        title:"James",
        hours:2,
        date:"September 21 2020",
        description:"Example",
        isCompleted:false
    },
    {
        id:2,
        color:'#ef476f',
        title:"Generics Review",
        hours:10,
        date:"April 10 2020",
        description:"Refresh oop",
        isCompleted:false
    },
    {
        id:3,
        color:'#ef476f',
        title:"Creating Types",
        hours:1.3,
        date:"June 11 2020",
        description:"refresher",
        isCompleted:false
    },
    {
        id:4,
        color:'#ef476f',
        title:"Implementing Interface",
        hours:4,
        date:"November 23 2020",
        description:"refresher",
        isCompleted:false
    },
    {
        id:5,
        color:'#ef476f',
        title:"Start Project",
        hours:2.6,
        date:"December 1 2020",
        description:"Babo",
        isCompleted:false
    },

]


export let nonTypescript:postValues[] =[
    {
        id:1,
        color:'#06d6a0',
        title:"javascript",
        hours:2,
        date:"May 31 2021",
        description:"",
        isCompleted:false
    },
    {
        id:2,
        color:'#06d6a0',
        title:"C++",
        hours:10,
        date:"Jun 23 2021",
        description:"",
        isCompleted:false
    },
    {
        id:3,
        color:'#06d6a0',
        title:"C#",
        hours:1.3,
        date:"July 11 2021",
        description:"",
        isCompleted:false
    },
    {
        id:4,
        color:'#06d6a0',
        title:"Unity",
        hours:4,
        date:"November 23 2021",
        description:"",
        isCompleted:false
    },
    {
        id:5,
        color:'#06d6a0',
        title:"Ableton",
        hours:2.6,
        date:"December 14 2021",
        description:"",
        isCompleted:false
    },

]

export let music:postValues[] =[
    {
        id:1,
        color:'#118ab2',
        title:"Chords",
        hours:1,
        date:"May 31 2021",
        description:"Hello",
        isCompleted:false
    },
    {
        id:2,
        color:'#118ab2',
        title:"Guitar Scales",
        hours:10,
        date:"Jun 23 2021",
        description:"C MAJOR",
        isCompleted:false
    },
    {
        id:3,
        color:'#118ab2',
        title:"Piano",
        hours:1.3,
        date:"July 11 2021",
        description:"YEEEEEE",
        isCompleted:false
    },
    {
        id:4,
        color:'#118ab2',
        title:"Ableton Production",
        hours:4,
        date:"November 23 2021",
        description:"DAW PRACTICE",
        isCompleted:false
    },
    {
        id:5,
        color:'#118ab2',
        title:"Song writing",
        hours:2.6,
        date:"December 14 2021",
        description:"ED",
        isCompleted:false
    },

]




export let jamesProject:project[] = [
    {
        id:1,
        color:'#ef476f',
        title:"Typescript",
        posts:myPosts
    },
    {
        id:2,
        color:'#06d6a0',
        title:"NotTypescript",
        posts:nonTypescript
    },
    {
        id:3,
        color:'#118ab2',
        title:"Music",
        posts:music
    }
]


export let jamesUser:User ={
    name:"james",
    email:'test',
    allProjects:jamesProject,
    completed_posts:[  {
        id:1,
        color:'#ffd166',
        title:"true",
        hours:1,
        date:"May 31 2021",
        description:"Whud up",
        isCompleted:true
    }]
}

