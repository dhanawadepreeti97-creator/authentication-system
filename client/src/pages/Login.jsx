import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post("/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Welcome Back!");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] flex items-center justify-center relative overflow-hidden">

      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#D7DEC4] blur-3xl opacity-50"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#E9E5D8] blur-3xl opacity-60"></div>

      <form
        onSubmit={handleSubmit}
        className="w-[92%] sm:w-[470px] bg-white/70 backdrop-blur-xl rounded-[35px] shadow-2xl border border-[#E8E2D3] p-6 sm:p-10"
      >
        <div className="flex justify-center">

          <div className="w-24 h-24 rounded-full bg-[#EEF1E6] flex items-center justify-center">

            <ShieldCheck
              size={50}
              className="text-[#556B2F]"
            />

          </div>

        </div>

        <h1 className="text-center text-3xl sm:text-5xl font-bold text-[#36411B] mt-8">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Login to continue your journey
        </p>

        <div className="mt-10 relative">

          <Mail className="absolute left-5 top-5 text-[#556B2F]" />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full h-14 sm:h- rounded-2xl bg-[#FCFCFA] border border-[#E5E1D3] pl-14 outline-none"
          />

        </div>

        <div className="mt-5 relative">

          <Lock className="absolute left-5 top-5 text-[#556B2F]" />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full h-14 sm:h-14 sm:h-16 rounded-2xl bg-[#FCFCFA] border border-[#E5E1D3] pl-14 pr-14 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-5"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>

        </div>

        <div className="flex justify-between mt-5 text-sm">

          <label className="flex gap-2">

            <input type="checkbox" />

            Remember Me

          </label>

          <button
            type="button"
            className="text-[#556B2F]"
          >
            Forgot Password?
          </button>

        </div>

        <button
          disabled={loading}
          className="mt-8 h-14 sm:h-16 rounded-2xl w-full bg-[#556B2F] text-white font-semibold text-lg hover:bg-[#465823] transition flex justify-center items-center gap-3"
        >
          {loading ? "Please Wait..." : "Login"}

          {!loading && <ArrowRight />}
        </button>

        <div className="mt-10 text-center text-gray-400">

          OR CONTINUE WITH

        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">

          <button
            type="button"
            className="border rounded-2xl py-4 hover:bg-gray-50"
          >
            Google
          </button>

          <button
            type="button"
            className="border rounded-2xl py-4 hover:bg-gray-50"
          >
            GitHub
          </button>

          <button
            type="button"
            className="border rounded-2xl py-4 hover:bg-gray-50"
          >
            LinkedIn
          </button>

        </div>

        <p className="text-center mt-8">

          Don't have an account?

          <Link
            className="text-[#556B2F] font-semibold ml-2"
            to="/register"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
}