import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");
  const[success,setSuccess]=useState("");

  const getHandleLoginForm=async(e)=>{
    e.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/login",{
        email,password
      })
      // console.log(response.data.token);
      localStorage.setItem("token",response.data.token)
      
      setSuccess("Login is completed,token stored")
    } catch (err) {
      setError("Error is" + err.response.data.error)
    }

  }
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={getHandleLoginForm}>
        <div>
        <label>Email:</label>
        <input type="email" required value={email}  onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
        <label>Password:</label>
        <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type='submut'>Login</button>
      </form>
      {error &&  <p style={{color:"red"}}>{error}</p>}
      {success &&  <p style={{color:"green"}}>{success}</p>}

    </div>
  )
}

export default Login
