import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () =>{
    const {id} = useParams();
    const [state, setState] = useState([]);
    useEffect(()=>{
       fetch(`https://fakestoreapi.com/products/${id}`)
       .then((res) => res.json())
       .then((jweldata) =>{console.log(jweldata)
        setState(jweldata);
    })
    },[])
    //console.log();
    return(
        <div>
             <h2>Product Component</h2>
             <div style={{width:"500px",textAlign:"center",margin:"auto"}}>
             <img src={state.image} alt="" width={"250px"} height={"230px"} />
             <h3>{state.title}</h3>
             <p>{state.description}</p>
             <h5>{state.price}</h5>
             </div>
        </div>
    )
}

export default ProductDetail;