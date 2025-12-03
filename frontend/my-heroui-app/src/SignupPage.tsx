import React from 'react'
import {Input} from "@heroui/react";
import {Button, ButtonGroup} from "@heroui/button";
import {Link} from "@heroui/link";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import "./index.css"
const SignupPage = ({credentials,setcredentials}) => {
  const [confirmPassword,setConfirmPassword]=useState("")

   const handleSignup=async()=>{
     try {
       if(credentials.password!=confirmPassword){
        alert("Your passwords are not same")
        return;
      }
      const res=await axios.post("http://localhost:5000/signupPage",credentials)
      alert("Account created successfully")
      if(res.status==201){
        navigate("/loginPage")
      }
     } catch (error) {
      console.error("Error in creating account")
     }
   }
  
   const handleConfirmPassword=(e:any)=>{
      setConfirmPassword(e.target.value);
   }
    const navigate=useNavigate();
    
       const handleEmail=(e:any)=>{
          setcredentials((prev)=>({...prev,email:e.target.value}))
       }
       const handlePassword=(e:any)=>{
          setcredentials((prev)=>({...prev,password:e.target.value}))
       }
  return (
    <>
    <div className='SignupDiv'>
    <div className='SignupCenterDiv'>
      <Input onChange={(e)=>handleEmail(e)} className="loginInput"label="Email" placeholder="Enter your email" type="email" />
      <Input onChange={(e)=>handlePassword(e)} className="loginInput" label="Password" placeholder='Enter your password' type='password'/>
      <Input onChange={(e)=>handleConfirmPassword(e)} className='loginInput' label="ConfirmPassword" placeholder='Enter Password again' type='password'/>
      <Button onPress={handleSignup} color="primary">Signup</Button>
       <span className='haveAnAccountSpan' onClick={()=>navigate("/loginPage")}>
       Already Have an Account
      
      </span>
      </div>
      </div>
    </>
  )
}

export default SignupPage
