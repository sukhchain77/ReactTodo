import React, { useContext } from "react";
import "./Nav.css"
import { loginContext } from "../Context/Context";
import { Link } from "react-router-dom";

 

const Nav = () =>{
    var {state,floggedOut} =  useContext(loginContext);
    return(
        <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/product">Product</Link>
        <span style={{color:"#fff"}}>{state.user}</span>
        <button onClick={floggedOut}>Logout</button>
        </div>
    )
}

export default Nav;