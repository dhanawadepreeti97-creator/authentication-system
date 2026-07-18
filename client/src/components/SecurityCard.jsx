import { ShieldCheck } from "lucide-react";

export default function SecurityCard() {
  return (
    <div className="bg-white rounded-[30px] p-5 md:p-8 border border-[#E8E2D3] shadow-sm w-full">

    
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#36411B]">
            Security Analytics
          </h2>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Authentication Health
          </p>
        </div>

        <ShieldCheck
          size={34}
          className="text-[#556B2F]"
        />

      </div>

      
      <div className="flex justify-center mt-8 md:mt-10">

        <div className="relative">

          <svg
            className="w-36 h-36 md:w-[170px] md:h-[170px]"
            viewBox="0 0 170 170"
          >
            <circle
              cx="85"
              cy="85"
              r="70"
              stroke="#ECE9DE"
              strokeWidth="12"
              fill="none"
            />

            <circle
              cx="85"
              cy="85"
              r="70"
              stroke="#556B2F"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="440"
              strokeDashoffset="0"
              transform="rotate(-90 85 85)"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h1 className="text-3xl md:text-4xl font-bold text-[#36411B]">
              100%
            </h1>

            <p className="text-xs md:text-sm text-gray-500">
              Protected
            </p>

          </div>

        </div>

      </div>

      <div className="space-y-5 mt-8 md:mt-10">

        <div>

          <div className="flex justify-between text-sm md:text-base">

            <span>Password Encryption</span>

            <span>100%</span>

          </div>

          <div className="h-2 rounded-full bg-[#ECE9DE] mt-2">

            <div className="h-2 rounded-full bg-[#556B2F] w-full"></div>

          </div>

        </div>

        
        <div>

          <div className="flex justify-between text-sm md:text-base">

            <span>JWT Security</span>

            <span>100%</span>

          </div>

          <div className="h-2 rounded-full bg-[#ECE9DE] mt-2">

            <div className="h-2 rounded-full bg-[#71854A] w-full"></div>

          </div>

        </div>

       
        <div>

          <div className="flex justify-between text-sm md:text-base">

            <span>MongoDB</span>

            <span>100%</span>

          </div>

          <div className="h-2 rounded-full bg-[#ECE9DE] mt-2">

            <div className="h-2 rounded-full bg-[#8E9C63] w-full"></div>

          </div>

        </div>

      </div>

    </div>
  );
}