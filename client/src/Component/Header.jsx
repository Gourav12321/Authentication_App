import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'

function Header() {
  return (
    <div className='flex justify-between px-8 py-7 bg-slate-300 lg:px-[7rem]'>
      <h1 className='px-5 font-extrabold leading-10 text-[18px]'>Authentication App</h1>
    <nav className='flex gap-5 font-bold leading-10 lg:gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/sign-in'>Sign-in</Link>
        
    </nav>
    </div>
  )
}

export default Header