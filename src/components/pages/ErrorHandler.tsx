import React from 'react'

interface errorMessage {
    message:string;
}

const Error:React.FC<errorMessage> = ({message}) => {
    return (
        <div className=" h-full w-full flex justify-center items-center">
            <div className="card bg-gray-800 shadow-lg">
            <label>{message}</label>
            </div>
            
        </div>
    )
}

export default Error
