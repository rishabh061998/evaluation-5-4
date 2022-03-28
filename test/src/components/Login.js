import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../features/userSlice"

const Login=()=>{

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn:true,
        }))
    }

    return(
        <div className="login">
            <form className="login_form" onSubmit={(e)=>handleSubmit(e)}>
             <h1>Login Here</h1>
             <input type="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
             <input type="email" placeholder="Location" value={email}onChange={(e)=>setEmail(e.target.value)}></input>
             <input type="password" placeholder="Interested-Topics" value={password}onChange={(e)=>setPassword(e.target.value)}></input>

             <button type="submit" className="submit_btn">submit</button>
            </form>

        </div>
    )
}

export default Login