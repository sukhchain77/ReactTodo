import React from "react";
import C from "./C";
const B = (props) =>{
    return(
        <div>
           <h2>B Component</h2>
           <C />
           {/* <C data={props.data}/> */}
        </div>
    )
}

export default B;