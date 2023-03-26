import React, { useContext } from "react";
import { loginContext } from "./Context/Context";

const PrivateRouter = (props) =>{
       //const {state} = useContext(loginContext);
    return(
        <div>
           
           {props.children}
        </div>
    )
}

export default PrivateRouter;