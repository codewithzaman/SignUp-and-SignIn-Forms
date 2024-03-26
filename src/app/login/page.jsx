"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Signup = () => {
    const [user, setUser] = useState({
        email:"",
        password:"",
    })
    const onLogin = async ()=>{

    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className=" text-2xl text-center mb-4">Login</h1>
        <hr />
       
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
        type="text" 
         id="email"
         value={user.email}
         onChange={(e)=> setUser({...user,email:e.target.value})}
         placeholder="email"
         />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
        type="password" 
         id="password"
         value={user.password}
         onChange={(e)=> setUser({...user,password:e.target.value})}
         placeholder="password"
         />
         <button onClick={onLogin} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500">Login</button>
         <Link href="./signup">Visit Signup Page</Link>
    </div>
  )
}

export default Signup