import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function SignIn() {
    const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });


  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "top-left",
    });
  };

  const handleSuccess = (message) => {
    toast.success(message, {
      position: "top-left",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {data} = await axios.post(
        "http://localhost:5001/auth/login", {
        ...inputValue,
      },
        { withCredentials: true }
      );
      console.log(data);
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
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center text-white">
      <form
        className="bg-gray-900 border border-gray-800 p-8 rounded-xl w-96 shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign In to <span className="text-orange-500">GlowFox</span>
        </h2>

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
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-300">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            required
            placeholder="Enter your password"
            className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-orange-500"
            onChange={handleOnChange}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-black py-2 mt-6 rounded font-semibold hover:bg-orange-400 transition"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-orange-500 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default SignIn;
