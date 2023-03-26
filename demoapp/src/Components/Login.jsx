import React, { useContext, useRef, useState } from "react";
import { loginContext } from "./Context/Context";

const Login = () =>{
  const [form,setForm] = useState({
    email:"",
    password:""
  });

  const{floggedIn} =useContext(loginContext);

   const chngeData = () =>{
      console.log(form);
      if(form.email == "sukh@gmail.com" && form.password == "123"){
        //alert("Login Successfull")
        floggedIn({
            islogedIn : true,
            user: "Sukh"
        })
      }
      else{
        alert("Wrong credentials");
      }
   }
     return(
        <div>
           <form>
            
            <input type="email" name="" id="" placeholder="email" onChange={(event)=>{setForm({
                ...form,
                email: event.target.value  })}}/>
            <input type="password" name="" id="" placeholder="password" onChange={(event)=>{setForm({
                ...form,
                password: event.target.value  })}} />
            <input type="button" value="Login" onClick={chngeData}/>
           </form>
        </div>
     )
}

export default Login;
