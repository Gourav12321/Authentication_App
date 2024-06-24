// import React from 'react'
import { useEffect, useRef, useState } from 'react';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import {app} from '../Firebase.js'
import { useSelector } from 'react-redux'
function Profile() {
  const fileref = useRef(null);
  const {currentUser} = useSelector((state) => state.user);
  const [image , setimage] = useState(undefined);
  const [percent , setpercent] = useState(0);
  const [imgerror , setimgerror] = useState(false);
  const [formData , setFormData] = useState({
  });
  useEffect(()=> {
    if (image){
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) =>{
    const Storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const StorageRef = ref(Storage , fileName);
    const uploadTask = uploadBytesResumable(StorageRef , image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
        setpercent(Math.round(progress));
      },
      (error)=>{
        setimgerror(true);
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) =>{
          setFormData({...formData , profile : downloadUrl});
        })}
    );
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input type="file" ref={fileref} className='hidden' accept='image/*' onChange={(e)=> setimage(e.target.files[0])}/>
        <img src={formData.profile || currentUser.profile} alt="Profile" className='h-24 w-24 self-center rounded-full cursor-pointer object-cover mt-2' onClick={() => fileref.current.click()}/>
        <p className='text-sm self-center'>
          {imgerror ? (
            <span className='text-red-700'>Error Uploading image</span> ): percent >0 && percent< 100 ? (
              <span className='text-slate-700'>{`Uploading : ${percent}%`}</span>
            ): percent === 100 ? (
              <span className='text-green-700'>Image Upload Successfully</span>
          ): '' }
        </p>
        <input defaultValue={currentUser.username} type="text" id='username' placeholder='Username' className='bg-slate-100 rounded-lg p-3' />
        <input defaultValue={currentUser.email} type="text" id='email' placeholder='Email' className='bg-slate-100 rounded-lg p-3' />
        <input type="text" id='password' placeholder='Password' className='bg-slate-100 rounded-lg p-3' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase'>Update </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile