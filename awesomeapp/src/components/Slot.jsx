import React from "react";

const SlotM = (props) =>{
    
//    let x = "smile";
//    let y = "smile";
//    let z = "smilie";
    let x = props.x;
    let y = props.y;
    let z = props.z;

   if((x == y) && (y == z)){
      return(
        <>
        <div className="slot_inner">
            <h1>
                {x} {y} {z}
            </h1>
            <h1>This is matching</h1>
        </div>
        </>
      )
   }else{
    return(
        <>
        <div className="slot_inner">
            <h1>
                {x} {y} {z}
            </h1>
            <h1>This is not matching</h1>
        </div>
        </>
      )

   }
}

const Slot = () =>{
    return (
        <>
        <h2>Welcome to{' '} <span style={{fontWeight: "bold"}}>Slot Machine Game</span></h2>
        <div className="slotmachine">
          <SlotM  x="smile" y="smile" z="smile"/>
          <SlotM  x="smile" y="danger" z="smile"/>
          <SlotM  x="danger" y="smile" z="smile"/>
        </div>
        
        </>
    )
}

export default Slot;