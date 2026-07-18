import { Bell, Search, Menu } from "lucide-react";

export default function Navbar({ setSidebarOpen }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white border border-[#E8E2D3] rounded-[28px] shadow-sm px-4 md:px-8 py-4 md:py-5 flex items-center justify-between gap-4">

      
      <div className="flex items-center gap-4">

        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden"
        >
          <Menu size={28} />
        </button>

        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#36411B]">
            Hello, {user?.name || "Preeti"} 👋
          </h1>

          <p className="hidden sm:block text-gray-500 mt-2">
            Welcome back to <span className="font-semibold">AuthSphere</span>
          </p>
        </div>

      </div>

      
      <div className="flex items-center gap-3 md:gap-6">

    
        <div className="relative hidden lg:block">

          <Search
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-11 pr-5 py-3 rounded-xl border border-[#E8E2D3] bg-[#F8F7F2] outline-none w-72"
          />

        </div>

        <button className="relative w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#F5F5EF] hover:bg-[#EEF1E6] transition flex items-center justify-center">

          <Bell
            size={22}
            className="text-[#556B2F]"
          />

          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500"></span>

        </button>

        
        <div className="hidden md:flex items-center gap-3 bg-[#F8F7F2] px-4 py-2 rounded-2xl border border-[#E8E2D3]">

          <div className="w-11 h-11 rounded-full bg-[#556B2F] text-white flex items-center justify-center font-bold">
            {user?.name?.charAt(0).toUpperCase() || "P"}
          </div>

          <div>
            <h3 className="font-semibold text-[#36411B]">
              {user?.name || "Preeti"}
            </h3>

            <p className="text-sm text-gray-500">
              {user?.email || "preeti@gmail.com"}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}