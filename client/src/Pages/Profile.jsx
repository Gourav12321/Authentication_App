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
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../Redux/slice/user.slice.js";

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
      console.log(response.data);
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
      }
    );
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
          className="bg-slate-700 text-white p-3 rounded-lg uppercase"
        >
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}

export default Profile;
