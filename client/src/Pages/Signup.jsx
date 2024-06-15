import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Signup() {

  const [formdata , setformdata] = useState({});
  const [error1 , seterror1] = useState(false);
  const [loading , setloading] = useState(false);
  const handleChange = (e)=>{
    setformdata({ ...formdata , [e.target.id]: e.target.value});
  }

const handleSubmit= async (e)=>{
  e.preventDefault();
    try {
      setloading(true);
      seterror1(false);
      const response = await axios.post('/api/auth/signup', formdata);
      console.log('Signup successful:', response.data);
      // const data = await res.json();
      setloading(false);
      if(response.success == false){
        seterror1(true);
        return;
      }
    } catch (error) {
      console.error('There was an error signing up:', error);
      seterror1(true);
      setloading(false)
    }
}

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type="text" placeholder='Email id' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? "Loading" : "Sign up"}
          </button>
        
      </form>
      <div className='flex gap-2 px-2 py-5'>
        <p>
          Have an account?
        </p>
        <Link to='/sign-in' >
        <span className='text-blue-500'>Sign in </span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'> {error1 && "Something Went Wrong"}</p>
    </div>
  )
}

export default Signup