'use client';
import { useState } from "react";
import { RiMailLine, RiLockPasswordLine, RiUserLine, RiGoogleFill } from "react-icons/ri";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    /* Changed min-h-screen to py-20 to allow footer visibility */
    <section className="flex items-center justify-center px-2 py-20 bg-[#edf7f6]">
      <div className="w-full max-w-md bg-white border border-stone-200 p-6 md:p-10 rounded-[2.5rem] shadow-2xl shadow-[#102321]/5">
        
        {/* --- Brand Header --- */}
        <div className="text-center mb-8">
          <div className="inline-block bg-[#F56476] px-4 py-2 rounded-xl rotate-[-2deg] mb-6 shadow-lg shadow-[#F56476]/20">
            <h2 className="text-xl md:text-2xl font-black text-white leading-none tracking-tighter italic">
              TOONIMA
            </h2>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-[#102321] uppercase tracking-tighter italic">
            {isLogin ? "Continue Your Quest" : "Start Your Odyssey"}
          </h1>
          <p className="text-[9px] md:text-[10px] text-stone-400 font-black uppercase tracking-widest mt-3">
            {isLogin ? "Identify yourself to enter the realm" : "Forge an account to explore new worlds"}
          </p>
        </div>

        {/* --- Social Login --- */}
        <button 
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-stone-200 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#edf7f6] hover:border-[#F56476] transition-all mb-6 group active:scale-[0.98]"
        >
          <RiGoogleFill className="text-xl text-[#F56476] group-hover:scale-110 transition-transform" />
          Enter via Google Portal
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] bg-stone-100 flex-1"></div>
          <span className="text-[9px] font-black text-stone-300 uppercase tracking-[0.3em]">OR USE ANCIENT SCROLLS</span>
          <div className="h-[1px] bg-stone-100 flex-1"></div>
        </div>

        {/* --- Form --- */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="relative group animate-in fade-in slide-in-from-top-2">
              <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-[#F56476] transition-colors" />
              <input 
                type="text" 
                placeholder="HERO ALIAS" 
                className="w-full pl-12 pr-4 py-4 bg-[#edf7f6]/50 border border-stone-100 rounded-2xl text-[11px] font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#F56476] focus:bg-white transition-all placeholder:text-stone-300"
              />
            </div>
          )}

          <div className="relative group">
            <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-[#F56476] transition-colors" />
            <input 
              type="email" 
              placeholder="MESSENGER ADDRESS" 
              className="w-full pl-12 pr-4 py-4 bg-[#edf7f6]/50 border border-stone-100 rounded-2xl text-[11px] font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#F56476] focus:bg-white transition-all placeholder:text-stone-300"
            />
          </div>

          <div className="relative group">
            <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-[#F56476] transition-colors" />
            <input 
              type="password" 
              placeholder="SECRET CIPHER" 
              className="w-full pl-12 pr-4 py-4 bg-[#edf7f6]/50 border border-stone-100 rounded-2xl text-[11px] font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#F56476] focus:bg-white transition-all placeholder:text-stone-300"
            />
          </div>

          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-[10px] font-black text-[#F56476] uppercase tracking-widest hover:underline">Lost your key?</a>
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-[#F56476] text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#102321] transition-all shadow-xl shadow-[#F56476]/20 mt-4 active:scale-95"
          >
            {isLogin ? "Open the Portal" : "Inscribe My Name"}
          </button>
        </form>

        {/* --- Toggle State --- */}
        <div className="mt-8 text-center">
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
            {isLogin ? "New to these lands?" : "Already part of the legend?"}
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 font-black text-[#F56476] hover:text-[#102321] transition-colors cursor-pointer"
            >
              {isLogin ? "Start Your Adventure" : "Return to Login"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;