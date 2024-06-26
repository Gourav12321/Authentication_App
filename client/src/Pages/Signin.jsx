import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFaliure,
  signInSuccess,
  signInStart,
} from "../Redux/slice/user.slice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../Component/OAuth";
import Swal from 'sweetalert2'
function Signin() {
  const [formdata, setFormdata] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  //  console.log(loading , error);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await axios.post("/api/auth/signin", formdata);

      if (res.success === false) {
        dispatch(signInFaliure(res));
        // console.log(res);
        return;
      }
      dispatch(signInSuccess(res.data));
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
        title: "Signed in successfully"
      });
      navigate("/");
    } catch (error) {
      dispatch(signInFaliure(error));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto bg-[#1E40A8] rounded-b-[80px] rounded-t-2xl">
      <h1 className="text-3xl text-center font-semibold my-5 text-white">Login </h1>
      <h3 className="text-center my-3 text-white">Please Enter Email id and Password</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email id"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-[#1E40A8] text-[#03E639] font-bold border-[#03E639] border-[3px] p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading" : "Sign In"}
        </button>
        <OAuth />
      </form>
      {/* <div className="flex gap-2 px-2 py-5 text-white">
        <p>Don't Have an account?</p>
        <Link to="/sign-up">
          <span className="text-[#03E639]">Sign up </span>
        </Link>
      </div> */}
      <p className="text-red-700 mt-5">
        {" "}
        {error ? error.message || "Something Went Wrong" : ""}
      </p>
    </div>
  );
}

export default Signin;
