// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Logout = () => {
//   const token = localStorage.getItem("tokens");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };
//   if (!token) {
//     return null;
//   }
//   return (
//     <button
//     onClick={handleLogout}
//     style={{ position: "absolute", top: 10, right: 10 }}>
//     Logout
//   </button>
//   );
// };

// export default Logout;

import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const token = localStorage.getItem("token");
    const navigate =useNavigate()
    if(!token){
        return null;
    }
    const handleLogout=()=>{
        localStorage.removeItem("token");
       
        setTimeout(()=>{
            navigate("/login")
        },500)
    }
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
