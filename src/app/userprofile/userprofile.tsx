'use client';
import { useState } from "react";
import { 
  RiUserLine, RiSettings4Line, RiShieldFlashLine, 
  RiNotification3Line, RiGlobalLine, RiLogoutBoxRLine,
  RiCameraSwitchLine, RiCheckboxCircleFill,
  RiLayoutMasonryFill, RiHistoryLine
} from "react-icons/ri";

const ProfileScreen = () => {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="bg-[#EDF7F6] min-h-screen text-stone-800 pt-20 selection:bg-[#F56476] selection:text-white">
      <div className="max-w-3xl mx-auto px-6 pb-20">
        
        {/* --- 👤 USER IDENTITY CARD --- */}
        <section className="relative bg-white border border-stone-200 rounded-[2.5rem] p-8 mb-8 overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#F56476]/5 blur-[60px] rounded-full -mr-20 -mt-20" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="relative group cursor-pointer">
              {/* Profile Ring - Shadow significantly reduced */}
              <div className="w-32 h-32 rounded-full border-2 border-[#F56476] p-1.5 shadow-md transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full bg-stone-100 rounded-full overflow-hidden flex items-center justify-center border border-stone-200">
                  <RiUserLine size={48} className="text-stone-400" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                <RiCameraSwitchLine size={24} className="text-white" />
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic text-stone-900">Austin Kwacha</h2>
                <RiCheckboxCircleFill className="text-[#F56476]" size={22} title="Verified Creator" />
              </div>
              <p className="text-stone-500 text-sm font-black uppercase tracking-widest opacity-60">austin.kwacha@toonima.mw</p>
              
              <div className="flex gap-8 mt-6 justify-center md:justify-start">
                <div className="text-center md:text-left">
                  <p className="text-2xl font-black italic leading-none text-[#F56476]">42</p>
                  <p className="text-[10px] text-stone-400 uppercase font-black tracking-[0.2em] mt-2">Episodes Read</p>
                </div>
                <div className="w-px h-10 bg-stone-200" />
                <div className="text-center md:text-left">
                  <p className="text-2xl font-black italic leading-none text-stone-900">12</p>
                  <p className="text-[10px] text-stone-400 uppercase font-black tracking-[0.2em] mt-2">Series Followed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 🚀 CREATOR QUICK ACCESS --- */}
        <div className="mb-10 group cursor-pointer">
           <div className="bg-stone-200 p-[1px] rounded-[2rem] transition-colors group-hover:bg-[#F56476]/30">
              <div className="bg-white rounded-[2rem] p-6 flex items-center justify-between shadow-sm transition-all">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-[#F56476]/10 rounded-2xl text-[#F56476] group-hover:scale-105 transition-transform">
                    <RiLayoutMasonryFill size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-base uppercase italic tracking-tight text-stone-900">Creator Studio</h4>
                    <p className="text-xs text-stone-500 font-medium">Manage your engine and published series</p>
                  </div>
                </div>
                <button className="px-6 py-3 bg-[#F56476] text-white text-[11px] font-black uppercase italic rounded-xl shadow-sm hover:brightness-110 active:scale-95 transition-all">
                  <a href="/creatordash">Dashboard</a>
                </button>
              </div>
           </div>
        </div>

        {/* --- ⚙️ SETTINGS GROUPS --- */}
        <div className="space-y-6">
          
          <div className="bg-white border border-stone-200 rounded-[2rem] overflow-hidden shadow-sm">
            <div className="px-8 py-5 border-b border-stone-100 bg-stone-50">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#F56476]">Preferences</p>
            </div>
            
            <SettingItem icon={<RiUserLine size={20} />} title="Profile Details" subtitle="Edit your name and bio" />
            
            <div className="flex items-center justify-between px-8 py-5 hover:bg-stone-50 transition-colors cursor-pointer border-b border-stone-100">
              <div className="flex items-center gap-5">
                <div className="p-3 bg-stone-100 rounded-xl text-stone-500"><RiNotification3Line size={20} /></div>
                <div>
                  <p className="font-black text-sm uppercase italic tracking-tight text-stone-900">Push Notifications</p>
                  <p className="text-xs text-stone-500 font-medium">Alerts for new chapters</p>
                </div>
              </div>
              <button 
                onClick={() => setNotifications(!notifications)}
                className={`w-14 h-7 rounded-full transition-all duration-300 relative ${notifications ? 'bg-[#F56476]' : 'bg-stone-300'}`}
              >
                <div className={`absolute top-1.5 w-4 h-4 bg-white rounded-full transition-all duration-300 shadow-sm ${notifications ? 'left-8' : 'left-2'}`} />
              </button>
            </div>

            <SettingItem icon={<RiGlobalLine size={20} />} title="Language" subtitle="English (Malawi)" />
            <SettingItem icon={<RiHistoryLine size={20} />} title="Reading History" subtitle="Manage your recently read titles" />
          </div>

          <div className="bg-white border border-stone-200 rounded-[2rem] overflow-hidden shadow-sm">
            <div className="px-8 py-5 border-b border-stone-100 bg-stone-50">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-400">Security & Privacy</p>
            </div>
            <SettingItem icon={<RiShieldFlashLine size={20} />} title="Account Security" subtitle="Passwords and 2FA" />
            <SettingItem icon={<RiSettings4Line size={20} />} title="App Settings" subtitle="Cache, Data Usage, and Light Mode" />
          </div>

          {/* Logout */}
          <button className="w-full flex items-center justify-center gap-3 p-6 text-[#F56476] font-black uppercase text-[11px] tracking-[0.3em] italic bg-white border border-[#F56476]/20 rounded-[2rem] transition-all hover:bg-[#F56476]/5 active:scale-95 shadow-sm">
            <RiLogoutBoxRLine size={20} /> Sign Out Transmission
          </button>
        </div>
      </div>
    </div>
  );
};

const SettingItem = ({ icon, title, subtitle }) => (
  <div className="group flex items-center gap-5 px-8 py-5 hover:bg-stone-50 transition-colors cursor-pointer border-b border-stone-100 last:border-none">
    <div className="p-3 bg-stone-100 rounded-xl text-stone-500 group-hover:text-[#F56476] transition-colors">{icon}</div>
    <div className="flex-1">
      <p className="font-black text-sm uppercase italic tracking-tight text-stone-900">{title}</p>
      <p className="text-xs text-stone-500 font-medium">{subtitle}</p>
    </div>
  </div>
);

export default ProfileScreen;