import React from "react";
import { useState } from "react";

const List = () =>{
    const[techitem,setTechItem] = useState(["avtar","gagan","tari","sukh","manjeet","aman"]);
    const[name,setName] = useState("sukh");
    const[city,setCity] = useState("Sangrur");

    return(
        <>
        <h2>New Technologies</h2>
        <h3>{name} is from {city}</h3>
        {/* <ol>
            <li>{techitem[0]}</li>
            <li>{techitem[3]}</li>
            <li>{techitem[1]}</li>
            <li>{techitem[5]}</li>
            <li>{techitem[2]}</li>
            <li>{techitem[4]}</li>
        </ol> */}
        <ol>
            {
                techitem.map((ele,i)=>{
                    return <li>{ele}</li>
                })
            }
        </ol>

        </>
    )
}

export default List;