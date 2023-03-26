import React from "react";
import D from "./D";

const C = (props) =>{
    return(
        <div>
           <h2>C Component</h2>
           <D />
           {/* <p>city : {props.data.city} </p> */}
           {/* <D data={props.data}/> */}
        </div>
    )
}

export default C;