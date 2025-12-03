import React, { useState } from 'react'
import {Input} from "@heroui/react";
import {Button, ButtonGroup} from "@heroui/button";
import {Link} from "@heroui/link";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const LoginPage = ({credentials,setcredentials}) => {
   const navigate=useNavigate();
   const handleEmail=(e:any)=>{
      setcredentials((prev)=>({...prev,email:e.target.value}))
   }
   const handlePassword=(e:any)=>{
      setcredentials((prev)=>({...prev,password:e.target.value}))
   }
   const handleLogin=async()=>{
    try {
      const res=await axios.post("http://localhost:5000/loginPage",credentials)
      if(res.status==200){
        alert("Login Successfully")
        navigate("/HomePage")
      }
    } catch (error) {
      console.error("Error in logging account",error)
    }
   }
  return (
    <>
     <div className="loginDiv flex w-full flex-col justify-center align-middle flex-wrap md:flex-nowrap gap-4">
      <div className='loginCenterDiv'>
      <Input onChange={(e)=>handleEmail(e)} className="loginInput"label="Email" placeholder="Enter your email" type="email" />
      <Input onChange={(e)=>handlePassword(e)} className="loginInput" label="Password" placeholder='Enter your password' type='password'/>
      <Button onPress={handleLogin} color="primary">Login In</Button>
       <Link href="/signupPage" underline="always">
        Create New Account
      </Link>
      </div>
    
    </div>
    </>
  )
}

export default LoginPage
