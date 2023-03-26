import React, { useContext } from "react";
import Home from "./Home/Home";
import Login from "./Login";
import { loginContext } from "./Context/Context";

const Auth = () =>{
    //const isLogged = false;
    const {state} = useContext(loginContext);
    return(
        <div>
             {
                // isLogged ? <Home /> : <Login />
                state.isLogged ? <Home /> : <Login/>
             }
        </div>
    )
}

export default Auth;