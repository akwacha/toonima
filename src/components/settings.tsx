'use client';
import { useState } from "react";
import { 
  RiMoonClearLine, RiSunLine, RiNotification4Line, 
  RiLockPasswordLine, RiEyeOffLine, RiDatabase2Line,
  RiSmartphoneLine, RiShieldUserLine, RiArrowRightSLine,
  RiTranslate2, RiDeleteBinLine, RiShieldCheckLine,
  RiCloseLine
} from "react-icons/ri";

const SettingsScreen = () => {
  const [activeModal, setActiveModal] = useState(null); // 'language', '2fa', 'delete'
  const [selectedLang, setSelectedLang] = useState('English');
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    dataSaver: false,
    matureContent: false,
    incognito: false,
    twoFactor: false
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#edf7f6] min-h-screen text-[#102321] pt-24 pb-12 relative font-sans">
      <div className="max-w-2xl mx-auto px-4">
        
        {/* --- ⚙️ HEADER --- */}
        <div className="mb-10">
          <h1 className="text-3xl font-black uppercase tracking-tighter italic">Settings</h1>
          <p className="text-stone-500 text-sm mt-1 font-medium">Configure your Toonima experience</p>
        </div>

        {/* --- 🌗 APPEARANCE --- */}
        <section className="mb-8">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F56476] mb-4">Appearance</h2>
          <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="flex items-center justify-between px-6 py-5 hover:bg-[#edf7f6]/50 transition-colors cursor-pointer" onClick={() => toggleSetting('darkMode')}>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-[#edf7f6] rounded-xl text-[#102321]">
                  {settings.darkMode ? <RiMoonClearLine size={20} /> : <RiSunLine size={20} />}
                </div>
                <div>
                  <p className="font-bold text-sm">Dark Mode</p>
                  <p className="text-xs text-stone-500">OLED optimized black theme</p>
                </div>
              </div>
              <Toggle active={settings.darkMode} />
            </div>
            
            <div onClick={() => setActiveModal('language')}>
              <SettingLink icon={<RiTranslate2 />} title="Content Language" value={selectedLang} />
            </div>
          </div>
        </section>

        {/* --- 🔔 NOTIFICATIONS --- */}
        <section className="mb-8">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F56476] mb-4">Notifications</h2>
          <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="flex items-center justify-between px-6 py-5 hover:bg-[#edf7f6]/50 transition-colors cursor-pointer" onClick={() => toggleSetting('notifications')}>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-[#edf7f6] rounded-xl text-[#102321]">
                  <RiNotification4Line size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Push Notifications</p>
                  <p className="text-xs text-stone-500">New episodes and activity</p>
                </div>
              </div>
              <Toggle active={settings.notifications} />
            </div>
          </div>
        </section>

        {/* --- 🔒 PRIVACY & SECURITY --- */}
        <section className="mb-8">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F56476] mb-4">Privacy & Security</h2>
          <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 hover:bg-[#edf7f6]/50 transition-colors cursor-pointer" onClick={() => toggleSetting('incognito')}>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-[#edf7f6] rounded-xl text-[#102321]">
                  <RiShieldUserLine size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Incognito Mode</p>
                  <p className="text-xs text-stone-500">Don't save reading history</p>
                </div>
              </div>
              <Toggle active={settings.incognito} />
            </div>

            <div onClick={() => setActiveModal('2fa')}>
              <SettingLink 
                icon={<RiLockPasswordLine />} 
                title="Two-Factor Authentication" 
                value={settings.twoFactor ? "Enabled" : "Disabled"} 
              />
            </div>

            <div className="flex items-center justify-between px-6 py-5 hover:bg-[#edf7f6]/50 transition-colors cursor-pointer" onClick={() => toggleSetting('matureContent')}>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-[#edf7f6] rounded-xl text-[#102321]">
                  <RiEyeOffLine size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Content Filter</p>
                  <p className="text-xs text-stone-500">Hide mature content</p>
                </div>
              </div>
              <Toggle active={settings.matureContent} />
            </div>
          </div>
        </section>

        {/* --- 💾 DATA & STORAGE --- */}
        <section className="mb-12">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F56476] mb-4">Data & Storage</h2>
          <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 hover:bg-[#edf7f6]/50 transition-colors cursor-pointer" onClick={() => toggleSetting('dataSaver')}>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-[#edf7f6] rounded-xl text-[#102321]">
                  <RiDatabase2Line size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Data Saver</p>
                  <p className="text-xs text-stone-500">Lower image quality</p>
                </div>
              </div>
              <Toggle active={settings.dataSaver} />
            </div>
            <SettingLink icon={<RiSmartphoneLine />} title="Storage Usage" value="1.2 GB" />
          </div>
        </section>

        <button 
          onClick={() => setActiveModal('delete')}
          className="w-full py-4 text-stone-400 hover:text-[#F56476] text-[10px] font-black uppercase tracking-widest transition-colors"
        >
          Delete Toonima Account
        </button>
      </div>

      {/* --- 🛠️ MODALS --- */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#102321]/40 backdrop-blur-sm" onClick={() => setActiveModal(null)} />
          <div className="relative bg-white border border-stone-100 w-full max-w-sm rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            
            {activeModal === 'language' && (
              <div className="space-y-6">
                <h3 className="text-xl font-black uppercase tracking-tighter italic">Select Language</h3>
                <div className="space-y-2">
                  {['English', 'Chichewa'].map((lang) => (
                    <button 
                      key={lang}
                      onClick={() => { setSelectedLang(lang); setActiveModal(null); }}
                      className={`w-full p-4 rounded-xl text-left font-bold transition-all ${selectedLang === lang ? 'bg-[#F56476] text-white shadow-lg shadow-red-200' : 'bg-[#edf7f6]/50 text-[#102321] hover:bg-[#edf7f6]'}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeModal === '2fa' && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-[#F56476]/10 rounded-full flex items-center justify-center mx-auto text-[#F56476]">
                  <RiShieldCheckLine size={32} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter italic">2FA Security</h3>
                <p className="text-stone-500 text-xs font-medium">Verify your identity to secure your account.</p>
                <button 
                  onClick={() => { toggleSetting('twoFactor'); setActiveModal(null); }}
                  className="w-full py-4 bg-[#102321] text-white font-black uppercase text-xs rounded-xl tracking-widest hover:bg-[#F56476] transition-all"
                >
                  {settings.twoFactor ? "Disable 2FA" : "Enable 2FA"}
                </button>
              </div>
            )}

            {activeModal === 'delete' && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-red-50/50 rounded-full flex items-center justify-center mx-auto text-red-500">
                  <RiDeleteBinLine size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter italic">Delete Account?</h3>
                  <p className="text-stone-400 text-sm mt-2 font-medium italic leading-relaxed">Izi sizingasinthidwenso. Mudzataya chilichonse.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="w-full py-4 bg-[#F56476] text-white font-black uppercase text-xs rounded-xl tracking-widest hover:brightness-110 shadow-lg shadow-red-100 transition-all">Confirm Deletion</button>
                  <button onClick={() => setActiveModal(null)} className="w-full py-4 text-stone-400 font-bold text-xs uppercase tracking-widest hover:text-[#102321] transition-colors">Cancel / Ndasiya</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// --- INTERNAL HELPERS ---

const Toggle = ({ active }) => (
  <div className={`w-11 h-6 rounded-full transition-all duration-300 relative ${active ? 'bg-[#F56476]' : 'bg-stone-200'}`}>
    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 shadow-sm ${active ? 'left-6' : 'left-1'}`} />
  </div>
);

const SettingLink = ({ icon, title, value }) => (
  <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 last:border-none hover:bg-[#edf7f6]/50 transition-colors cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="p-2.5 bg-[#edf7f6] rounded-xl text-[#102321]">{icon}</div>
      <p className="font-bold text-sm">{title}</p>
    </div>
    <div className="flex items-center gap-2 text-stone-400">
      <span className="text-xs font-bold uppercase tracking-wider">{value}</span>
      <RiArrowRightSLine size={20} />
    </div>
  </div>
);

export default SettingsScreen;