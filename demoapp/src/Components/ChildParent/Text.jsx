import React, { useState } from "react";
import Input from "./Input";

const Text = ({data}) =>{
   const[state,setState] = useState("No data here")

    return(
        <div style={{textAlign : "center",marginTop: "50px"}}>
        <h2>Text Component Parent</h2> 
        <p style={{color : "crimson", fontSize : "30px"}}>{state}</p>
        <Input sendData = {setState}/>
        </div>
        
    )
}

export default Text;