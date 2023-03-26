import React from "react";

const Text = ({data}) =>{
    return(
        <div style={{textAlign : "center",marginTop: "50px"}}>
        <h2>Text Component</h2> 
        <p style={{color : "crimson", fontSize : "30px"}}>{data}</p>
        </div>
    )
}

export default Text;