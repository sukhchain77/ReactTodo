import React, { useState } from "react";
import Text from "./Text";

const Input = () =>{
    const[state,setState] = useState("No data");
    const[inputData,setInputData] = useState("No data");
    
    const updateData= () =>{
       setInputData(state);
    }
    return(
        
        <div style={{textAlign : "center",marginTop: "50px"}}>
        <h2>Input Component</h2>    
        <input type="text" name="" id="" placeholder="Enter Name" onChange={(event)=>{setState(event.target.value)}}/>
        <button onClick={updateData}>Submit</button>
        <Text data={inputData}/>
        </div>
        

    )
}

export default Input;