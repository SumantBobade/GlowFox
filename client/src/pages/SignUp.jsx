import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5001/auth/signup", {
        name,
        email,
        password,
      });

      alert("Account created successfully!");
      navigate("/signin");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
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
            required
            placeholder="Enter your name"
            className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-orange-500"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-300">Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-orange-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-gray-300">Password</label>
          <input
            type="password"
            required
            placeholder="Enter password"
            className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-orange-500"
            onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
}

export default SignUp;
