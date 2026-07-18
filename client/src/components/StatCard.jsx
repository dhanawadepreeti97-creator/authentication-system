import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  color,
}) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] bg-white border border-[#E8E2D3] p-5 md:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 w-full">

      
      <div
        className="absolute right-0 top-0 h-28 w-28 rounded-full opacity-10 translate-x-8 -translate-y-8"
        style={{ backgroundColor: color }}
      />

   
      <div className="flex items-center justify-between">

        <div
          className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white shadow-lg"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>

        <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#F5F5EF] flex items-center justify-center group-hover:bg-[#556B2F] group-hover:text-white transition">
          <ArrowUpRight size={18} />
        </div>

      </div>

    
      <h3 className="mt-6 text-xs md:text-sm uppercase tracking-widest text-gray-400">
        {title}
      </h3>

      
      <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#36411B] break-words">
        {value}
      </h1>

      
      <div className="mt-5 inline-flex max-w-full flex-wrap items-center bg-[#EEF1E6] px-3 py-2 rounded-full text-[#556B2F] font-medium text-xs md:text-sm">
        {subtitle}
      </div>

    </div>
  );
}