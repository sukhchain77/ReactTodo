import React, { useEffect } from "react";
import { useState } from "react";

const Counter = (props) =>{
    const [state,setState] = useState(0);

    useEffect(() =>{
        document.title = `Counter is ${state}`;
    },[state])

    const updateData = () =>{ 
        console.log("Working");
        setState(state + 1);
        
    }
    return(
        <>
        <h2>Count {state}</h2>
        <button onClick={updateData}>Update count</button>
        </>
    )
}

export default Counter