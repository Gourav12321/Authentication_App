import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const { currentUser } = useSelector(state => state.user);
 

  return (
    <div className='flex justify-between md:px-8 px-3 py-5 bg-[#1E40A8] lg:px-[7rem] fixed z-20 w-full  text-white shadow-black shadow-xl'>
      <h1 className='px-5 font-extrabold leading-10 md:text-[18px] text-[12px]'>Authentication App</h1>
      <nav className='flex md:gap-5 gap-4 font-bold md:leading-10 lg:gap-10 items-center'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        
        {currentUser ? (
          <Link to='/profile'>
            <img src={currentUser.profile} alt="profile" className='h-8 w-8 rounded-full object-cover' />
          </Link>
        ) : (
          <Link to='/authentication'>Log in</Link>
        )}
      </nav>
    </div>
  );
}

export default Header;
