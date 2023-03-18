import React, { useState } from "react";

const Form = () =>{
    const [data, setData] = useState();
    const [fullname, setFullname] = useState();

    const eventHandle = (event) =>{
        console.log(event.target.value);
        setData(event.target.value);
    }

    const submitData = () =>{
        setFullname(data);
    }

    return(
        <>
        <h2>Hello {fullname}</h2>
        <input type="text" name="" id="" placeholder="Enter name" value={data} onChange={eventHandle}/>
        <button onClick={submitData}>Click me</button>
        </>
    )
}

export default Form;