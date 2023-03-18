import React, { useState } from "react";


const Counter = () =>{

    let curTime = new Date().toLocaleTimeString();
    const [count, setCount ] = useState(0);
    const [time,setTime] = useState(curTime);
    
    const IncNum = () =>{
        setCount(count + 1);
        //console.log("Click");
    }
    
    const GetTime =() =>{
       curTime = new Date().toLocaleTimeString();  
      setTime(curTime);  
      console.log("time");
    }
    setInterval(GetTime,2000);

    return(
        <>
        <h1>{time}</h1>
        {/* <button onClick={GetTime}>Get Time</button> */}

        <h1>{count}</h1>
        <button onClick={IncNum}>Click me</button>
        </>
    )
}

export default Counter;