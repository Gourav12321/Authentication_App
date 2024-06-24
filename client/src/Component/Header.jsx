import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const { currentUser } = useSelector(state => state.user);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (currentUser) {
  //     navigate('/profile');
  //   }
  // }, [currentUser, navigate]);

  return (
    <div className='flex justify-between px-8 py-7 bg-slate-300 lg:px-[7rem]'>
      <h1 className='px-5 font-extrabold leading-10 text-[18px]'>Authentication App</h1>
      <nav className='flex gap-5 font-bold leading-10 lg:gap-10 items-center'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        {currentUser ? (
          <Link to='/profile'>
            <img src={currentUser.profile} alt="profile" className='h-8 w-8 rounded-full object-cover' />
          </Link>
        ) : (
          <Link to='/sign-in'>
            <p>Sign-in</p>
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Header;
