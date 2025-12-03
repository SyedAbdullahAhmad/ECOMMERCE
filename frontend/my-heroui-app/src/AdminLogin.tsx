import React, { useState } from 'react'
import "./index.css"
import { Input } from '@heroui/input'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const AdminLogin = () => {
  const navigate=useNavigate();
 const[adminCredentials,setAdminCredentials]=useState({
  adminEmail:"",
  adminPassword:""
 }
 )
  const handleAdminEmail=(e:any)=>{
    setAdminCredentials((prev)=>({...prev,adminEmail:e.target.value}))
  }
  const handleAdminPassword=(e:any)=>{
    setAdminCredentials((prev)=>({...prev,adminPassword:e.target.value}))
  }
  const handleAdminLoginbtn=async()=>{
     console.log("Credentials being sent:", adminCredentials);
    try {
       const res=await axios.post("http://localhost:5000/adminLogin",adminCredentials)
    if(res.status==200){
      alert("Login Successfully");
      navigate("/adminPanel")
    }
    
    
    } catch (error:any) {
       if(error.response.status==404){
      alert("Admin with these credential is not exists")
    }
    if(error.response.status==401){
      alert("Wrong Password")
    }
      console.error("Error in login Admin Account")
    }
   
  }
  return (
   <>
        <div className="loginDiv flex w-full flex-col justify-center align-middle flex-wrap md:flex-nowrap gap-4">
         <div className='loginCenterDiv'>
         <Input onChange={(e)=>handleAdminEmail(e)} className="loginInput"label="Email" placeholder="Enter your email" type="email" />
         <Input onChange={(e)=>handleAdminPassword(e)} className="loginInput" label="Password" placeholder='Enter your password' type='password'/>
         <Button onPress={handleAdminLoginbtn} color="primary">Login In</Button>
          
         </div>
       
       </div>
       </>
  
  )
}

export default AdminLogin
