import React, { useContext } from "react";
import Context from "./Context";

const D = (props) =>{
        const data =  useContext(Context);
    return(
        <div>
            
           <h2>D Component</h2>
           <p>Email is: {data.email}</p>
        </div>
    )
}

export default D;