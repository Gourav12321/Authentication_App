import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { app } from '../Firebase.js';
import {useDispatch} from 'react-redux';
import axios from 'axios'
import { signInSuccess } from '../Redux/slice/user.slice.js';
function OAuth() {
  const dispatch = useDispatch();
    const handleClick = async ()=>{
        try{
          const provider = new GoogleAuthProvider();
          const auth = getAuth(app);
          const result =  await signInWithPopup(auth , provider);
          const dt = JSON.stringify({
            name : result.user.displayName,
            email : result.user.email,
            photoURL : result.user.photoURL,
          });
         
          const res = await axios.post('/api/auth/google', dt, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          dispatch(signInSuccess(res.data));
        }catch(error){
            console.log("could not login with google" , error);
        }
    }

  return (
    <button className='bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95' type='button' onClick={handleClick}>
        Continue With Google
    </button>
  )
}

export default OAuth