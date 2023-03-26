import React, { useState } from "react";
import B from "./B";
import Context from "./Context";

const A = () =>{
    const[state,setState] = useState({
        name:"Sukhchain",
        email:"sukh@gmail.com",
        city:"Sangrur"
    })
    return(
        <div>
           <h2>A Component</h2>
           <Context.Provider value={state}>
            <B />
           </Context.Provider>
           {/* <B data={state}/> */}
        </div>
    )
}

export default A;