import React from "react";

const Hello = () => {
    // return (
    //     <div className = 'dummyClass'>
    //         <h1>Hello Emmanuel</h1>
    //     </div>
    // )
    return React.createElement('div', 
    {id: 'hello', className: 'dummyClass'}, 
    React.createElement('h1', null, 'Hello Emmanuel'))
}

export default Hello