import React, { useState } from 'react'
import   { app,provider }  from "./Firebase";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";


function Sign() {


  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[checker,setChecker]=useState("signIn")
  const[name,setName]=useState("")

  const auth=getAuth()
 
  async function handleSubmitSignIn(){
    const result = await createUserWithEmailAndPassword(auth,email,password)
    setEmail("")
    setPassword("")
    setName("")
    
  }
  async function handleSubmitLogin(){
    const result = await signInWithEmailAndPassword(auth,email,password)
    console.log("you loged in");
    setEmail("")
    setPassword("")
    
  }
   async function logInWithGppgle(){
    const result = await signInWithPopup(auth,provider)
   }


  return (
   <>
   {checker ==="signIn"?
   <div className='flex justify-center'>
    <div className='w-[400px] h-[400px] shadow-lg mt-20 px-5 flex flex-col gap-5 py-10' >
    <input value={name} type='text' placeholder='Enter your name' className='w-full h-10 px-1 rounded-lg bg-gray-900 text-white'
        onChange={(e)=>setName(e.target.value)}></input>
        <input value={email} type='email' placeholder='Enter email' className='w-full h-10 px-1 rounded-lg bg-gray-900 text-white'
        onChange={(e)=>setEmail(e.target.value)}></input>
        <input value={password} type='password' placeholder='Enter password' className='w-full h-10 px-1 rounded-lg bg-gray-900 text-white'
         onChange={(e)=>setPassword(e.target.value)}></input>
         <p>I have already Exits ? <strong onClick={()=>setChecker("logIn")}>Log In</strong></p>
        <button className='w-full h-10 px-1 rounded-lg bg-gray-900 text-white'
        onClick={()=>handleSubmitSignIn()}>Sign In</button>
    </div>
    </div>:
    <div className='flex justify-center'>
    <div className='w-[400px] h-[300px] shadow-lg mt-20 px-5 flex flex-col gap-5 py-10' >
        <input value={email} type='email' placeholder='Enter email' className='w-full h-10 px-1 rounded-lg bg-gray-900 text-white'
        onChange={(e)=>setEmail(e.target.value)}></input>
        <input value={password} type='password' placeholder='Enter password' className='w-full h-10 px-1 rounded-lg bg-gray-900 text-white'
         onChange={(e)=>setPassword(e.target.value)}></input>

        <p>Create new Account  <strong onClick={()=>setChecker("signIn")}>Sign In</strong></p>
        <button className='w-full h-10 px-1 rounded-lg bg-gray-900 text-white'
        onClick={()=>handleSubmitLogin()}>Log In</button>
        <button  className='w-full h-10 px-1 rounded-lg bg-gray-900 text-white' onClick={()=>logInWithGppgle()}>Log in with Google</button>
    </div>
    
    </div>
   }
   </>
  )
}

export default Sign