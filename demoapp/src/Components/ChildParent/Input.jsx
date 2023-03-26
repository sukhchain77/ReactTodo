import React, { useState } from "react";
import Text from "./Text";

const Input = (props) =>{
   const[data,setData] =useState();
   
    
    const updateData= () =>{
       props.sendData(data);
    }
    return(
        
        <div style={{textAlign : "center",marginTop: "50px"}}>
        <h2>Input Component Child</h2>    
        <input type="text" name="" id="" placeholder="Enter Name"  onChange={(e) =>{setData(e.target.value)}}/>
        <button onClick={updateData}>Submit</button>
        </div>
        

    )
}

export default Input;