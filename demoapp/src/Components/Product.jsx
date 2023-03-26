import React from "react";
import { Link,Outlet } from "react-router-dom";

const Product = () =>{
    const productContainer = {
        margin : "50px auto",
        width: "1000px",
        height: "400px",
        boxShadow: "0 0 10px black",
        backgroundColor: "black",
        display : "flex"
    }
    return(
        <div style={productContainer}>
            <div style={{display: "grid", width: "30%"}}>  
                <Link to="electronic">Electronics</Link> 
                <Link to="jwellery">Jwellery</Link> 
                <Link to="mens">Mens</Link> 
                <Link to="womens">Womens</Link> 
            </div>
            <div style={{color: "#fff"}}>
                 <Outlet />
            </div>
        </div>
    )
}

export default Product;