import React, { useState } from "react"

const Login=()=>{

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    return(
        <div className="login">
            <form className="login_form">
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