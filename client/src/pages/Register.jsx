import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  ArrowRight,
} from "lucide-react";
import toast from "react-hot-toast";
import API from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      await API.post("/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      toast.success("Account Created Successfully");

      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration Failed");
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
        className="w-[500px] bg-white/70 backdrop-blur-xl rounded-[35px] shadow-2xl border border-[#E8E2D3] p-10"
      >

        <div className="flex justify-center">

          <div className="w-24 h-24 rounded-full bg-[#EEF1E6] flex items-center justify-center">

            <UserPlus
              size={50}
              className="text-[#556B2F]"
            />

          </div>

        </div>

        <h1 className="text-center text-5xl font-bold text-[#36411B] mt-8">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Join AuthSphere today
        </p>

        <div className="mt-10 relative">

          <User className="absolute left-5 top-5 text-[#556B2F]" />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full h-16 rounded-2xl bg-[#FCFCFA] border border-[#E5E1D3] pl-14 outline-none"
          />

        </div>

        <div className="mt-5 relative">

          <Mail className="absolute left-5 top-5 text-[#556B2F]" />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full h-16 rounded-2xl bg-[#FCFCFA] border border-[#E5E1D3] pl-14 outline-none"
          />

        </div>

        <div className="mt-5 relative">

          <Lock className="absolute left-5 top-5 text-[#556B2F]" />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full h-16 rounded-2xl bg-[#FCFCFA] border border-[#E5E1D3] pl-14 pr-14 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-5"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>

        </div>

        <div className="mt-5 relative">

          <Lock className="absolute left-5 top-5 text-[#556B2F]" />

          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full h-16 rounded-2xl bg-[#FCFCFA] border border-[#E5E1D3] pl-14 pr-14 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-5 top-5"
          >
            {showConfirm ? <EyeOff /> : <Eye />}
          </button>

        </div>

        <button
          disabled={loading}
          className="mt-8 h-16 rounded-2xl w-full bg-[#556B2F] text-white font-semibold text-lg hover:bg-[#465823] transition flex justify-center items-center gap-3"
        >
          {loading ? "Creating..." : "Create Account"}

          {!loading && <ArrowRight />}
        </button>

        <p className="text-center mt-8">

          Already have an account?

          <Link
            to="/"
            className="text-[#556B2F] font-semibold ml-2"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
}