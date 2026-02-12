import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-hidden font-display">
      {/* Top Status Bar (Minimalist) */}
      <header className="flex items-center justify-between px-6 pt-8 pb-4 w-full">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight">Home</h1>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Active • 3 Devices</p>
        </div>
        <div className="size-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center border border-slate-200 dark:border-slate-700">
          <span className="material-symbols-outlined text-primary text-xl">person</span>
        </div>
      </header>

      {/* Main Content Area: 3D Isometric Home Map */}
      <main className="flex-1 relative flex items-center justify-center isometric-container overflow-hidden">
        {/* Interactive Map Wrapper */}
        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
          {/* Isometric Base Layer (Placeholder Image) */}
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-contain transform scale-110 drop-shadow-2xl"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAazQ-V_Ltfen8ZdoEoFzU4smQcZFK_v0ASe5VPFdJPJvbuGaIgomjevSZkW7IjVYDknOn62sj3uTldNqC8XecXMv28pKLwQ5wYYHFS-BNhHwrzQgDHv34MdgdtwmpjfFeA0LHS3kb5REQI7hngVuzRaag6_A0x0z45UGQRilfK-JoONqZi7INq0mhw6JrXOPKFCgQ_aBUjRsfTRKImb37Lemcr-pbDBN9tnVRH4H_WYW3EfY46VwF83xiC39ya_cDEImKMcnPlsds')"
            }}
          >
          </div>

          {/* Contextual Status Badges (Floating over the map) */}
          {/* Bedroom Badge */}
          <div className="absolute top-[20%] left-[25%] flex flex-col items-center gap-1">
            <div className="bg-white dark:bg-slate-800 px-3 py-1.5 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-500 text-sm font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
              <span className="text-xs font-bold">On</span>
            </div>
            <div className="size-3 bg-yellow-400 rounded-full border-2 border-white dark:border-slate-800"></div>
          </div>

          {/* Kitchen Badge */}
          <div className="absolute top-[30%] right-[25%] flex flex-col items-center gap-1">
            <div className="bg-white dark:bg-slate-800/80 px-3 py-1.5 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400 text-sm font-bold">kitchen</span>
              <span className="text-xs font-medium text-slate-500">Idle</span>
            </div>
          </div>
        </div>

        {/* Selected Room Overlay (Example context) */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[85%] max-w-sm">
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary">living</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Living Room</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">2 Active Lights • Smart TV Standby</p>
              </div>
            </div>
            <button className="bg-primary text-white p-2 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Search Component */}
      <footer className="p-6 pb-10 w-full flex justify-center">
        <div className="w-full max-w-lg">
          <label className="relative flex items-center group">
            <div className="absolute left-4 text-primary transition-colors group-focus-within:text-primary">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="w-full h-16 pl-12 pr-6 rounded-2xl border-none glass-effect shadow-2xl focus:ring-2 focus:ring-primary/40 focus:ring-offset-0 text-slate-800 dark:text-white dark:bg-slate-900/80 placeholder-slate-400 font-medium transition-all outline-none"
              placeholder="Search devices, rooms, or actions..."
              type="text"
            />
            <div className="absolute right-4 size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary cursor-pointer hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-xl">mic</span>
            </div>
          </label>
        </div>
      </footer>
    </div>
  );
};

export default App;
