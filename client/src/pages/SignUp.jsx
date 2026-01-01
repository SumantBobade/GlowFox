import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import api from "../services/api";

function SignUp() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "top-left",
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post(
        "/auth/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }

    setInputValue({
      ...inputValue,
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 border border-gray-800 p-8 rounded-xl w-96 shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create <span className="text-orange-500">Account</span>
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            required
            placeholder="Enter your name"
            className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-orange-500"
            onChange={handleOnChange}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            required
            placeholder="Enter your email"
            className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-orange-500"
            onChange={handleOnChange}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-gray-300">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            required
            placeholder="Enter password"
            className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-orange-500"
            onChange={handleOnChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-black py-2 rounded font-semibold hover:bg-orange-400 transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-orange-500 cursor-pointer hover:underline"
          >
            Sign In
          </span>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default SignUp;
