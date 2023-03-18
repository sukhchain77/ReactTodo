import React from "react";

const fname = "Avtar";
const lname = "Singh";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const para ={
  color: 'blue',
  textAlign :'center'
}
let currentDate = new Date(2023,5,5,10);
 currentDate = currentDate.getHours();
 let greeting ="";
 const cssStyle = {}

 if(currentDate >= 1 && currentDate < 12){
   greeting = "Good Morning";
   cssStyle.color = "green";
 }else if(currentDate >= 12 && currentDate < 19){
   greeting = "Good Afternoon";
   cssStyle.color = "red";
 }else{
   greeting = "Good Night";
   cssStyle.color = "black";
 }
function Header(){
    return(
        <>
        <h1>Sukhchain Developer</h1>
        <h1 style={{color : "peachpuff"}}>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
        <h1>Sukhchain Technical Netflix Pick</h1>
        <p style={para}>Today date is {currDate}</p>
        <p>Todat Time is {currTime}</p>
        <h2 contentEditable = "true">{fname} {lname}</h2>
        <h2>{fname+ " " +lname}</h2>
        <h2 className='headding'>{`${fname} ${lname}`} </h2> 
        <p>{Math.random()}</p>
        <p style={{color:"red"}}>Here the list of my fav 5 netflix series</p>
        <ol>
            <li>Dark</li>
            <li>Extra curricular</li>
            <li>My holo love</li>
            <li>My first 2 love</li>
            <li>My robot</li>
        </ol>
       </>
    )
}

export default Header;