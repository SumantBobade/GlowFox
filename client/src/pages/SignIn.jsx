import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../services/AuthContext";
import api from "../services/api";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/login", inputValue);

      const { success, message, token } = data;

      if (success) {
        toast.success(message, { position: "top-left" });

        // 🔑 THIS IS THE KEY LINE
        login(token ?? "authenticated");

        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        toast.error(message, { position: "top-left" });
      }
    } catch (err) {
      toast.error("Login failed", { position: "top-left" });
      console.error(err);
    }

    setInputValue({ email: "", password: "" });
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

        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleOnChange}
            className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-300">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={handleOnChange}
            className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-orange-500"
          />
        </div>

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

      <ToastContainer />
    </div>
  );
}

export default SignIn;
