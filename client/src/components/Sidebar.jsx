import {
  LayoutDashboard,
  User,
  Shield,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
<aside
  className={`
    fixed lg:relative
    top-0 left-0
    z-50
    w-72
    min-h-screen
    bg-[#556B2F]
    text-white
    flex flex-col
    transform transition-transform duration-300
    overflow-hidden
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
  `}
>

        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden absolute top-5 right-5"
        >
          <X size={28} />
        </button>

        
        <div className="p-8">
          <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center">
            <Shield size={42} className="text-[#556B2F]" />
          </div>

          <h1 className="text-4xl font-black mt-6">
            AuthSphere
          </h1>

          <p className="text-[#DDE5C7] mt-2">
            Secure JWT Platform
          </p>
        </div>

        <nav className="flex-1 px-5 space-y-3">

          <button className="flex items-center gap-4 w-full rounded-2xl px-5 py-4 bg-white text-[#556B2F] font-semibold shadow">
            <LayoutDashboard size={22} />
            Dashboard
          </button>

          <button className="flex items-center gap-4 w-full rounded-2xl px-5 py-4 hover:bg-[#6C7A3E] transition">
            <User size={22} />
            Profile
          </button>

          <button className="flex items-center gap-4 w-full rounded-2xl px-5 py-4 hover:bg-[#6C7A3E] transition">
            <Shield size={22} />
            Security
          </button>

          <button className="flex items-center gap-4 w-full rounded-2xl px-5 py-4 hover:bg-[#6C7A3E] transition">
            <Settings size={22} />
            Settings
          </button>

        </nav>

    
        <div className="p-5 mt-auto">
          <button
            onClick={logout}
            className="w-full bg-[#455322] rounded-2xl py-4 flex items-center justify-center gap-3 hover:bg-[#36411B] transition"
          >
            <LogOut size={22} />
            Logout
          </button>
        </div>

      </aside>
    </>
  );
}