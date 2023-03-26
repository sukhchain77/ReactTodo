import React, { useRef } from "react";
const Form = () =>{
   const nameref = useRef(null);
   const emailref = useRef(null);
   const passref = useRef(null);

   const chngeData = () =>{
      console.log(nameref.current.value,emailref.current.value,passref.current.value);
   }
     return(
        <div>
           <form>
            <input type="text" name="" id="" placeholder="name" ref={nameref}/>
            <input type="email" name="" id="" placeholder="email" ref={emailref}/>
            <input type="password" name="" id="" placeholder="password" ref={passref}/>
            <input type="button" value="Register" onClick={chngeData}/>
           </form>
        </div>
     )
}

export default Form;
