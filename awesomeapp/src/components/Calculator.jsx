import React from "react";

function Calculator(){

    function add(a,b){
      let sum =a+b;
       return sum;
    }
    function sub(a,b){
        let res =a-b;
         return res;
    }
    function mul(a,b){
        let res =a*b;
         return res;
    }
    function div(a,b){
        let res =a/b;
         return res;
    }


    const arr = ['sukh','pari','raman'];
    const newarr = arr.map((ele)=>{
        return ele;
    })
    console.log(newarr);
    
    return(
        <>
        <ul>
            <li>The addition of two numbers: {add(11,4)}</li>
            <li>The subtraction of two numbers: {sub(11,4)}</li>
            <li>The multiplication of two numbers: {mul(11,4)}</li>
            <li>The division of two numbers: {div(11,4)}</li>
        </ul>
        </>
    )
}

export default Calculator;