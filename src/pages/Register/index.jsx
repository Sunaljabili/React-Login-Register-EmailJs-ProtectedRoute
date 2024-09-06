import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfrimPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState();
  const navigate= useNavigate();

  const handleForm = async(e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
      setError("Password is not match!");
      setSuccess("")
      return;
    }

    try {
      const response = await axios.post("https://reqres.in/api/register",{
        email,password
      });
      setSuccess("Register is successful !")
      setTimeout(()=>{
        navigate("/login")
      },1000)
      

    } catch (err) {
      setError("Register is not completed" , err.response.data.error)
    }
  }
  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleForm} action="">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfrimPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{color:"red"}}>{error}</p>}
      {success&& <p style={{color:"green"}}>{success}</p>}
    </div>
  );
};

export default Register;
