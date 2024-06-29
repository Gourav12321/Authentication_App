import React, { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../Firebase.js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../Redux/slice/user.slice.js";
import Swal from 'sweetalert2'
function Profile() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [image, setImage] = useState(undefined);
  const [percent, setPercent] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const response = await axios.post(
        `/api/user/update/${currentUser._id}`,
        formData
      );
      if (response.data.success === false) {
        dispatch(updateUserFailure(response.data));
        return;
      }

      dispatch(updateUserSuccess(response.data));
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
        title: "Updated successfully"
      });
    
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleFileUpload = (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(Math.round(progress));
        
      },
      (error) => {
        setImgError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setFormData({ ...formData, profile: downloadUrl });
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your File is Uploaded Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
      
    );
   
  };

  const handleDelete = async () =>{
    try{
      dispatch(deleteUserStart());
      const res = await axios.delete(`/api/user/delete/${currentUser._id}`);
      if(res.success === false){
        dispatch(deleteUserFailure(res));
        return;
      }
      Swal.fire({
        title: "Are you sure?",
        text: "Your Account Would be deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Account has been deleted.",
            icon: "success"
          });
          dispatch(deleteUserSuccess(res));
        }
      });
      
      
    }catch(error){
      dispatch(deleteUserFailure(error));
    }
  };
  const handleSignOut = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to be Signed Out",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sign Out!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Sign Out!",
            
            icon: "success"
          });
          dispatch(signOut());
        }
      });
      
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return (
    <div className="w-full h-[100vh] bg-[#1E40A8]">
        <div className='w-[23rem] h-[23rem] rounded-full bg-[#2d60fa] flex fixed left-[-10rem] top-[-10rem] '></div>
        <div className='w-[23rem] h-[23rem] rounded-full bg-[#2d60fa] flex fixed right-[-10rem] bottom-[-15rem] '></div>
       <div className="w-full h-full">
      
    <div className="pt-[5rem] p-3 max-w-lg mx-auto bg-[#1E40A8] flex flex-col  z-10  ">
      <h1 className="text-3xl font-semibold text-center my-7 text-white z-10">Profile</h1>
      <form className="flex flex-col gap-4 z-10" onSubmit={handleSubmit}>
        <input
          type="file"
          ref={fileRef}
          className="hidden"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <img
          src={formData.profile || currentUser.profile}
          alt="Profile"
          className="h-24 w-24 self-center rounded-full cursor-pointer object-cover mt-2"
          onClick={() => fileRef.current.click()}
        />
        <p className="text-sm self-center">
          {imgError ? (
            <span className="text-red-700">Error Uploading Image</span>
          ) : percent > 0 && percent < 100 ? (
            <span className="text-slate-700">{`Uploading: ${percent}%`}</span>
          ) : percent === 100 ? (
            <span className="text-green-700">Image Upload Successful</span>
          ) : (
            ""
          )}
        </p>
        <input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="Username"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          defaultValue={currentUser.email}
          type="text"
          id="email"
          placeholder="Email"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-[#1E40A8] text-[#03E639] font-bold border-[#03E639] border-[3px] p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 z-10"
        >
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer font-bold text-xl z-10" onClick={handleDelete}>Delete Account</span>
        <span className="text-red-700 cursor-pointer font-bold text-xl z-10" onClick={handleSignOut}>Sign Out</span>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
