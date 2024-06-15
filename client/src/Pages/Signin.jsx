import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Signin() {
  const [formdata, setFormdata] = useState({});
  const [error1, setError1] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError1(false);
      const response = await axios.post('/api/auth/signin', formdata);
      console.log('Signin successful:', response.data);
      setLoading(false);
      if (response.data.success === false) {
        setError1(true);
        return;
      }
    } catch (error) {
      console.error('There was an error signing in:', error);
      setError1(true);
      setLoading(false);
    }
  };

  

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Email id' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? "Loading" : "Sign In"}
        </button>
      </form>
      <div className='flex gap-2 px-2 py-5'>
        <p>Don't Have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500'>Sign up </span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'> {error1 && "Something Went Wrong"}</p>
      
    </div>
  );
}

export default Signin;
