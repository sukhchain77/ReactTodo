import React, { useEffect, useState } from "react";
import { Link ,NavLink} from "react-router-dom";

const Jwellery = () =>{
    const[data,setData] = useState([]);
    useEffect(()=>{
           fetch("https://fakestoreapi.com/products/category/jewelery")
           .then((res) => res.json())
           .then((jdata) => {console.log(jdata)
           
             setData(jdata)
           
        })
    },[])
    return(
        <div>
            <h1>Jwellery Category</h1>
            {
                data.length > 0 ? <ul>
                    {
                        data.map((ele,index)=>{
                             return <NavLink to={`/productdetails/${ele.id}`}><li key={index+1}>{ele.title}</li></NavLink>
                        })
                    }
                </ul> : <h3 style={{color:"red",textAlign:"center"}}>....Loading....</h3> 
            }
        </div>
    )
}

export default Jwellery;