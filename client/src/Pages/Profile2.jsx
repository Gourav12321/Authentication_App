import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Signin from './Signin';
import Signup from './Signup';
function Profile2() {
    const [click , setclick] = useState(false);
  return (
    <>
    <div className='w-[23rem] h-[23rem] rounded-full bg-[#2d60fa] flex fixed left-[-10rem] top-[-10rem] '></div>
    <div className='w-[23rem] h-[23rem] rounded-full bg-[#2d60fa] flex fixed right-[-10rem] bottom-[-15rem] '></div>
    <div className='w-full h-full m-0 p-0  bg-[#1E40A8] z-10 flex'>
    
        <div className='flex flex-col mx-auto pt-[8rem]  w-[60vw] z-10'>
            <div className=' w-full flex h-[80px]'>
                <div className='w-1/2 justify-center flex items-center font-semibold text-2xl pt-3 relative mx-5'>
                    
                    <button onClick={()=> setclick(false)} className='w-full h-full border-[3px]  border-b-[#1E40A8] border-black   text-white bg-[#2d60fa] hover:opacity-50 rounded-t-3xl'>Login</button>
                </div>
                <div className='w-1/2  justify-center flex items-center font-semibold text-2xl pt-3 mx-5'>
                    <button  onClick={()=> setclick(true)} className='w-full h-full border-[3px] border-b-[#1E40A8] border-black text-white bg-[#2d60fa] hover:opacity-50 rounded-t-3xl'>Sign Up</button>
                </div>
            </div>
            <div className=' w-full h-full bg-[#1E40A8] border-black border-[3px] rounded-b-[80px] rounded-t-xl mb-7'>
               { click === false ? <Signin/> : <Signup/>}
            </div>  
        </div>
    </div>
    </>
  )
}

export default Profile2