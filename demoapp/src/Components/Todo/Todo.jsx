import React from "react";
import { useState } from "react";

const Todo = () =>{
    
    const[data,setData] = useState();
    const[state,setState] = useState();


    const showData =(event) =>{
        console.log(event.target.value);
        setData(event.target.value);

    }
    const updateData =(event) =>{
        setState(data);

    }

    return(
        <>
        <h2>Todo</h2>
        <h3>Text here : {state}</h3>
        <input type="text" name="" id="" onChange={showData} placeholder="enter data"/>
        <button onClick={updateData}>Add</button>

        </>
    )
}

export default Todo;