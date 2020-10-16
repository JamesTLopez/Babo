import React,{createContext} from 'react'

export interface project{
    title:string;
    posts:postValues[];
}

export interface postValues {
    title:string;
    hours:number;
    date:string;
    description?:string;
}



interface User {
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


export let jamesProject:project[] = [
    {
        title:"Typescript",
        posts:myPosts
    }
]



export let jamesUser:User ={
    name:"james",
    email:'test',
    allProjects:jamesProject
}



// 


export const AppContext = createContext<User>({   name:"james",
email:'test',
allProjects:jamesProject});

export const Provider = (props: { children: React.ReactNode; }) =>{
    return <AppContext.Provider value={jamesUser}>
        {props.children}
    </AppContext.Provider>
}

export const Consumer = AppContext.Consumer;