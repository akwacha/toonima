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
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-20">
      <div className="max-w-3xl mx-auto px-4 pb-20">
        
        {/* --- 👤 USER IDENTITY CARD --- */}
        <section className="relative bg-stone-900/40 border border-white/5 rounded-3xl p-8 mb-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D564]/10 blur-3xl rounded-full -mr-16 -mt-16" />
          
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="relative group cursor-pointer">
              <div className="w-28 h-28 rounded-full border-2 border-[#00D564] p-1">
                <div className="w-full h-full bg-stone-800 rounded-full overflow-hidden flex items-center justify-center">
                  <RiUserLine size={40} className="text-stone-600" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <RiCameraSwitchLine size={24} />
              </div>
            </div>

            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <h2 className="text-2xl font-black uppercase tracking-tighter">Austin Kwacha</h2>
                <RiCheckboxCircleFill className="text-[#00D564]" size={20} title="Verified Creator" />
              </div>
              <p className="text-stone-500 text-sm font-medium">austin.kwacha@toonima.mw</p>
              
              <div className="flex gap-6 mt-4 justify-center md:justify-start">
                <div className="text-center md:text-left">
                  <p className="text-lg font-black leading-none text-[#00D564]">42</p>
                  <p className="text-[10px] text-stone-500 uppercase font-bold tracking-widest mt-1">Episodes Read</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center md:text-left">
                  <p className="text-lg font-black leading-none text-white">12</p>
                  <p className="text-[10px] text-stone-500 uppercase font-bold tracking-widest mt-1">Series Followed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 🚀 CREATOR QUICK ACCESS (New) --- */}
        <div className="mb-8 p-1 bg-gradient-to-r from-[#00D564]/20 to-transparent rounded-2xl border border-white/5">
           <div className="bg-[#0a0a0a] rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#00D564]/10 rounded-xl text-[#00D564]">
                  <RiLayoutMasonryFill size={24} />
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tight">Creator Studio</h4>
                  <p className="text-xs text-stone-500">Manage your published series</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-white text-black text-[10px] font-black uppercase rounded-lg hover:bg-[#00D564] transition-colors">
                Open Dashboard
              </button>
           </div>
        </div>

        {/* --- ⚙️ SETTINGS GROUPS --- */}
        <div className="space-y-4">
          
          <div className="bg-stone-900/20 border border-white/5 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#00D564]">Preferences</p>
            </div>
            
            <SettingItem icon={<RiUserLine />} title="Profile Details" subtitle="Edit your name and bio" />
            
            <div className="flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors cursor-pointer border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-stone-900 rounded-lg"><RiNotification3Line size={20} /></div>
                <div>
                  <p className="font-bold text-sm">Push Notifications</p>
                  <p className="text-xs text-stone-500">Alerts for new chapters</p>
                </div>
              </div>
              <button 
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-6 rounded-full transition-colors relative ${notifications ? 'bg-[#00D564]' : 'bg-stone-700'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${notifications ? 'left-7' : 'left-1'}`} />
              </button>
            </div>

            <SettingItem icon={<RiGlobalLine />} title="Language" subtitle="English (Malawi)" />
            <SettingItem icon={<RiHistoryLine />} title="Reading History" subtitle="Manage your recently read titles" />
          </div>

          <div className="bg-stone-900/20 border border-white/5 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5">
              <p className="text-[10px] font-black uppercase tracking-widest text-stone-500">Security & Privacy</p>
            </div>
            <SettingItem icon={<RiShieldFlashLine />} title="Account Security" subtitle="Passwords and 2FA" />
            <SettingItem icon={<RiSettings4Line />} title="App Settings" subtitle="Cache, Data Usage, and OLED Mode" />
          </div>

          {/* Logout */}
          <button className="w-full flex items-center justify-center gap-2 p-5 text-red-500 font-black uppercase text-xs tracking-widest bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 rounded-2xl transition-all">
            <RiLogoutBoxRLine size={18} /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

const SettingItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors cursor-pointer border-b border-white/5 last:border-none">
    <div className="p-2 bg-stone-900 rounded-lg text-stone-300">{icon}</div>
    <div className="flex-1">
      <p className="font-bold text-sm">{title}</p>
      <p className="text-xs text-stone-500">{subtitle}</p>
    </div>
  </div>
);

export default ProfileScreen;