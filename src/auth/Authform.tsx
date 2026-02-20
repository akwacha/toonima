'use client';
import { useState } from "react";
import { RiMailLine, RiLockPasswordLine, RiUserLine, RiGoogleFill } from "react-icons/ri";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-white">
      <div className="w-full max-w-md bg-white border border-stone-100 p-8 rounded-2xl shadow-xl">
        
        {/* --- Brand Header --- */}
        <div className="text-center mb-8">
          <div className="inline-block bg-[#00D564] p-2 rounded-sm rotate-[-2deg] mb-4">
            <h2 className="text-2xl font-black text-white leading-none tracking-tighter">
              TOONIMA
            </h2>
          </div>
          <h1 className="text-2xl font-bold text-stone-900">
            {isLogin ? "Welcome Back!" : "Join the Community"}
          </h1>
          <p className="text-sm text-stone-500 mt-2">
            {isLogin ? "Enter your details to start reading" : "Create an account to track your favorites"}
          </p>
        </div>

        {/* --- Social Login (As seen on Webtoon) --- */}
        <button className="w-full flex items-center justify-center gap-3 border border-stone-200 py-3 rounded-full text-sm font-bold hover:bg-stone-50 transition-all mb-6">
          <RiGoogleFill className="text-xl text-red-500" />
          Continue with Google
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] bg-stone-100 flex-1"></div>
          <span className="text-[10px] font-bold text-stone-400 uppercase">OR</span>
          <div className="h-[1px] bg-stone-100 flex-1"></div>
        </div>

        {/* --- Form --- */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="relative">
              <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
              <input 
                type="text" 
                placeholder="Username" 
                className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00D564] transition-all"
              />
            </div>
          )}

          <div className="relative">
            <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00D564] transition-all"
            />
          </div>

          <div className="relative">
            <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00D564] transition-all"
            />
          </div>

          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-xs font-bold text-[#00D564] hover:underline">Forgot password?</a>
            </div>
          )}

          <button className="w-full bg-black text-white py-3.5 rounded-full font-bold text-sm hover:bg-stone-800 transition-all shadow-lg shadow-stone-200">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        {/* --- Toggle State --- */}
        <div className="mt-8 text-center">
          <p className="text-sm text-stone-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 font-bold text-[#00D564] hover:underline"
            >
              {isLogin ? "Sign Up Now" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;