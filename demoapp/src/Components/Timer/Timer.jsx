import React, { useRef, useState } from "react";
import Styles from "./Timer.module.css";

const Timer = () =>{
    const[timer,setTimer] = useState(0);
    const ref1 = useRef();

    let interval;
    console.log(interval);
    const startTimer =() =>{
        ref1.current = setInterval(() =>{
            //console.log("timer");
            console.log("set interval" +interval);
            setTimer((prevTimer) => prevTimer + 1);
            
        },1000)

    }
    const stopTimer =() =>{
         clearInterval(ref1.current);
         
    }
    return(
        <div className={Styles.timerContainer}>
            <h2>Timer is {timer}</h2>
            <button onClick={startTimer}>Start</button>&nbsp;&nbsp;
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}

export default Timer;