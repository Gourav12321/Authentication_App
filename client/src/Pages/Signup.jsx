import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import OAuth from '../Component/OAuth';
import {useDispatch, useSelector } from 'react-redux';
import { signInFaliure, signInStart, signInSuccess } from '../Redux/slice/user.slice.js';
import Swal from 'sweetalert2'
function Signup() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [formdata , setformdata] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const handleChange = (e)=>{
    setformdata({ ...formdata , [e.target.id]: e.target.value});
  }

const handleSubmit= async (e)=>{
  e.preventDefault();
    try {
     
      dispatch(signInStart());
      const response = await axios.post('/api/auth/signup', formdata);
     
      dispatch(signInSuccess(response.data));

      if(response.success == false){
        
        dispatch(signInFaliure(response));
        return;
      }
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Registered successfully"
      });
      navigate('/');
    } catch (error) {
      dispatch(signInFaliure(error));
     
    }
}

  return (
    <div className='p-3 max-w-lg mx-auto'>
      
      <h1 className='text-3xl text-center font-semibold my-7 text-white'>Sign Up </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type="text" placeholder='Email id' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={loading} className="bg-[#1E40A8] text-[#03E639] font-bold border-[#03E639] border-[3px] p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? "Loading" : "Sign up"}
          </button>
        <OAuth/>
      </form>
      {/* <div className='flex gap-2 px-2 py-5 text-white'>
        <p>
          Have an account?
        </p>
        <Link to='/sign-in' >
        <span className='text-[#03E639]'>Sign in </span>
        </Link>
      </div> */}
      <p className="text-red-700 mt-5">
        {" "}
        {error ? error.message || "Something Went Wrong" : ""}
      </p>
    </div>
  )
}

export default Signup