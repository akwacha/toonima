'use client';
import { useState } from "react";
import { RiMailLine, RiLockPasswordLine, RiUserLine, RiGoogleFill } from "react-icons/ri";


const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-[#edf7f6]">
      <div className="w-full max-w-md bg-white border border-stone-200 p-10 rounded-[2.5rem] shadow-2xl shadow-[#102321]/5">
        
        {/* --- Brand Header --- */}
        <div className="text-center mb-10">
          {/* Logo updated to match button color (#F56476) */}
          <div className="inline-block bg-[#F56476] px-4 py-2 rounded-xl rotate-[-2deg] mb-6 shadow-lg shadow-[#F56476]/20">
            <h2 className="text-2xl font-black text-white leading-none tracking-tighter italic">
              TOONIMA
            </h2>
          </div>
          <h1 className="text-3xl font-black text-[#102321] uppercase tracking-tighter italic">
            {isLogin ? "Welcome Back" : "Join the Paddock"}
          </h1>
          <p className="text-[10px] text-stone-400 font-black uppercase tracking-widest mt-3">
            {isLogin ? "Authentication Required to Proceed" : "Create an account to track telemetry"}
          </p>
        </div>

        {/* --- Social Login --- */}
        <button className="w-full flex items-center justify-center gap-3 border border-stone-200 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#edf7f6] hover:border-[#F56476] transition-all mb-6 group">
          <RiGoogleFill className="text-xl text-[#F56476] group-hover:scale-110 transition-transform" />
          Continue with Google
        </button>

        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] bg-stone-100 flex-1"></div>
          <span className="text-[9px] font-black text-stone-300 uppercase tracking-[0.3em]">OR</span>
          <div className="h-[1px] bg-stone-100 flex-1"></div>
        </div>

        {/* --- Form --- */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="relative">
              <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
              <input 
                type="text" 
                placeholder="USERNAME" 
                className="w-full pl-12 pr-4 py-4 bg-[#edf7f6]/50 border border-stone-100 rounded-2xl text-[11px] font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#F56476] focus:bg-white transition-all placeholder:text-stone-300"
              />
            </div>
          )}

          <div className="relative">
            <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="w-full pl-12 pr-4 py-4 bg-[#edf7f6]/50 border border-stone-100 rounded-2xl text-[11px] font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#F56476] focus:bg-white transition-all placeholder:text-stone-300"
            />
          </div>

          <div className="relative">
            <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="password" 
              placeholder="PASSWORD" 
              className="w-full pl-12 pr-4 py-4 bg-[#edf7f6]/50 border border-stone-100 rounded-2xl text-[11px] font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#F56476] focus:bg-white transition-all placeholder:text-stone-300"
            />
          </div>

          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-[10px] font-black text-[#F56476] uppercase tracking-widest hover:underline">Forgot password?</a>
            </div>
          )}

          {/* Button color (#F56476) now matches the logo above */}
          <button className="w-full bg-[#F56476] text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#102321] transition-all shadow-xl shadow-[#F56476]/20 mt-4 active:scale-95">
            {isLogin ? "Initialize Session" : "Create Account"}
          </button>
        </form>

        {/* --- Toggle State --- */}
        <div className="mt-10 text-center">
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 font-black text-[#F56476] hover:text-[#102321] transition-colors"
            >
              {isLogin ? "Sign Up Now" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;