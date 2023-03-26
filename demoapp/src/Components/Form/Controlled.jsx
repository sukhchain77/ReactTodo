import React, { useRef, useState } from "react";
const Form = () =>{
  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  });
//   const [email,setEmail] = useState();
//   const [pass,setPass] = useState();

   const chngeData = () =>{
      console.log(form);
   }
     return(
        <div>
           <form>
            <input type="text" name="" id="" placeholder="name" onChange={(event)=>{setForm({
                ...form,
                name: event.target.value  })}}/>
            <input type="email" name="" id="" placeholder="email" onChange={(event)=>{setForm({
                ...form,
                email: event.target.value  })}}/>
            <input type="password" name="" id="" placeholder="password" onChange={(event)=>{setForm({
                ...form,
                password: event.target.value  })}} />
            <input type="button" value="Register" onClick={chngeData}/>
           </form>
        </div>
     )
}

export default Form;
