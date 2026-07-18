import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import SecurityCard from "../components/SecurityCard";

import {
  Users,
  ShieldCheck,
  Activity,
  Lock,
  UserCheck,
  TrendingUp,
  CheckCircle2,
  Clock3,
} from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F4EC] flex overflow-hidden">

     <Sidebar
    sidebarOpen={sidebarOpen}
    setSidebarOpen={setSidebarOpen}
/>

     <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden p-4 md:p-8">

        <Navbar setSidebarOpen={setSidebarOpen} />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mt-4 rounded-[35px] bg-gradient-to-r from-[#556B2F] to-[#7A8C4B] text-white p-6 md:p-10 shadow-xl flex flex-col lg:flex-row justify-between items-center gap-8 overflow-hidden relative"
        >

          <div>

            <h1 className="text-3xl md:text-5xl font-bold">
              Welcome to AuthSphere 👋
            </h1>

            <p className="mt-4 text-[#EEF2E5] max-w-xl leading-8">
              Secure JWT Authentication Platform built using React,
              Express, MongoDB and Node.js.
              Manage authentication with a modern dashboard.
            </p>

            <button className="mt-6 w-full sm:w-auto bg-white text-[#556B2F] px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">

              Explore Dashboard

            </button>

          </div>

          <div className="hidden lg:flex">

            <div className="w-60 h-60 rounded-full bg-white/10 flex items-center justify-center">

              <ShieldCheck
                size={120}
                className="text-white"
              />

            </div>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >

          <StatCard
            title="Users"
            value="128"
            subtitle="+12% Growth"
            color="#556B2F"
            icon={<Users size={28} />}
          />

          <StatCard
            title="Security"
            value="100%"
            subtitle="JWT Protected"
            color="#6C7A3E"
            icon={<ShieldCheck size={28} />}
          />

          <StatCard
            title="Today's Login"
            value="48"
            subtitle="Today's Sessions"
            color="#87955D"
            icon={<Clock3 size={28} />}
          />

          <StatCard
            title="Database"
            value="Online"
            subtitle="MongoDB"
            color="#A2AE78"
            icon={<Lock size={28} />}
          />

        </motion.div>

       <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

          <div className="xl:col-span-2 space-y-6">

            <div className="bg-white rounded-[35px] border border-[#E8E2D3] shadow-sm p-6 md:p-8">

              <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                <div>

                  <h2 className="text-3xl font-bold text-[#36411B]">

                    Account Overview

                  </h2>

                  <p className="text-gray-500 mt-2">

                    Monitor authentication status and user statistics.

                  </p>

                </div>

                <div className="w-24 h-24 rounded-full bg-[#EEF1E6] flex items-center justify-center">

                  <ShieldCheck
                    size={52}
                    className="text-[#556B2F]"
                  />

                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                <div className="rounded-3xl bg-[#F8F7F2] p-7">

                  <UserCheck
                    className="text-[#556B2F]"
                    size={36}
                  />

                  <h3 className="mt-6 text-lg font-semibold">

                    Registered Users

                  </h3>

                  <h1 className="text-3xl md:text-5xl font-bold mt-3">

                    128

                  </h1>

                  <p className="text-gray-500 mt-2">

                    Active Accounts

                  </p>

                </div>

                <div className="rounded-3xl bg-[#F8F7F2] p-7">

                  <TrendingUp
                    className="text-[#556B2F]"
                    size={36}
                  />

                  <h3 className="mt-6 text-lg font-semibold">

                    Weekly Growth

                  </h3>

                  <h1 className="text-3xl md:text-5xl font-bold mt-3">

                    +18%

                  </h1>

                  <p className="text-gray-500 mt-2">

                    Compared to last week

                  </p>

                </div>

              </div>


              <div className="mt-8">

                <h2 className="text-3xl font-bold text-[#36411B]">
                  Recent Activity
                </h2>

                <p className="text-gray-500 mt-2">
                  Latest authentication events
                </p>

                <div className="mt-8 space-y-5">

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#F8F7F2] hover:bg-[#EEF1E6] transition">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-[#556B2F] text-white flex items-center justify-center">

                        <CheckCircle2 size={22} />

                      </div>

                      <div>

                        <h3 className="font-semibold">
                          Login Successful
                        </h3>

                        <p className="text-gray-500 text-sm">
                          JWT Token Verified
                        </p>

                      </div>

                    </div>

                    <span className="text-sm text-gray-400">
                      2 min ago
                    </span>

                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#F8F7F2] hover:bg-[#EEF1E6] transition">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-[#6C7A3E] text-white flex items-center justify-center">

                        <Users size={22} />

                      </div>

                      <div>

                        <h3 className="font-semibold">
                          New User Registered
                        </h3>

                        <p className="text-gray-500 text-sm">
                          Account Created Successfully
                        </p>

                      </div>

                    </div>

                    <span className="text-sm text-gray-400">
                      Today
                    </span>

                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#F8F7F2] hover:bg-[#EEF1E6] transition">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-[#87955D] text-white flex items-center justify-center">

                        <Activity size={22} />

                      </div>

                      <div>

                        <h3 className="font-semibold">
                          MongoDB Connected
                        </h3>

                        <p className="text-gray-500 text-sm">
                          Database Running Successfully
                        </p>

                      </div>

                    </div>

                    <span className="text-sm text-green-600 font-medium">
                      Active
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>


          <div className="space-y-6">

            <SecurityCard />

            <div className="bg-white rounded-[35px] border border-[#E8E2D3] shadow-sm p-6 md:p-8">

              <h2 className="text-2xl font-bold text-[#36411B]">

                AuthSphere

              </h2>

              <p className="mt-4 text-[#EEF2E5] max-w-xl leading-7 text-sm md:text-base">

                Secure JWT Authentication Platform designed with
                React, Express, MongoDB, Node.js and Tailwind CSS.

              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center justify-between">

                  <span>React</span>

                  <span className="text-[#556B2F] font-semibold">
                    ✓
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span>JWT Authentication</span>

                  <span className="text-[#556B2F] font-semibold">
                    ✓
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span>MongoDB</span>

                  <span className="text-[#556B2F] font-semibold">
                    ✓
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span>Password Hashing</span>

                  <span className="text-[#556B2F] font-semibold">
                    ✓
                  </span>

                </div>

              </div>

              <button className="w-full mt-8 bg-[#556B2F] text-white py-4 rounded-2xl hover:bg-[#465823] transition">

                View Documentation

              </button>

            </div>

        </div>

        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-white border border-[#E8E2D3] rounded-[30px] p-6 shadow-sm">

          <div>

            <h2 className="text-2xl font-bold text-[#36411B]">
              AuthSphere
            </h2>

            <p className="text-gray-500 mt-2">
              Secure JWT Authentication Platform
            </p>

          </div>

          <div className="text-center md:text-right">

            <p className="font-semibold text-[#556B2F]">
              Designed & Developed
            </p>

            <p className="text-gray-500">
              Preeti Dhanawade
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}