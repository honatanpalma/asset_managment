export default function UserOffboarding() {
  return (
    <div className="flex flex-1 justify-center py-8 px-4 md:px-0">
      <div className="layout-content-container flex flex-col max-w-[1024px] flex-1 gap-6">

        {/* Title & Search Area */}
        <div className="flex flex-col gap-4 px-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight">User Offboarding</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base">Process asset returns and service hand-offs for departing team members.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Search Departing User</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">person_search</span>
                <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="Enter name, email or employee ID (e.g. Sarah Jenkins)" defaultValue="Sarah Jenkins" />
              </div>
              <button className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">Select User</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">

          {/* Left Column: Asset List */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center justify-between w-full mb-2">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="material-symbols-outlined">devices</span>
                Assigned Assets (3)
              </h3>
              <button className="flex items-center gap-2 text-xs font-bold py-2 px-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined text-sm">keyboard_return</span>
                Return All
              </button>
            </div>

            {/* Asset Card 1 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 flex flex-col sm:flex-row gap-4">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">laptop_mac</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">MacBook Pro 16" - M2 Max</p>
                      <p className="text-xs text-slate-500">SN: GLPI-LAP-9923 | Tag: #4402</p>
                    </div>
                    <span className="px-2 py-1 text-[10px] font-bold uppercase rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Pending</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="flex-1 text-xs font-bold py-2 px-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-sm">supervisor_account</span> Transfer
                    </button>
                    <button className="flex-1 text-xs font-bold py-2 px-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-sm">inventory</span> Return
                    </button>
                    <button className="flex-1 text-xs font-bold py-2 px-3 border border-red-200 text-red-600 dark:border-red-900/50 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-sm">report</span> Damaged
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Asset Card 2 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm opacity-60">
              <div className="p-4 flex flex-col sm:flex-row gap-4">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <span className="material-symbols-outlined text-3xl">monitor</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white line-through">Dell UltraSharp 27" 4K</p>
                      <p className="text-xs text-slate-500">SN: DELL-MON-0012 | Tag: #3118</p>
                    </div>
                    <span className="px-2 py-1 text-[10px] font-bold uppercase rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Recovered</span>
                  </div>
                  <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Returned to Main Stock - Shelf B2
                  </div>
                </div>
              </div>
            </div>

            {/* Asset Card 3 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 flex flex-col sm:flex-row gap-4">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">smartphone</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">iPhone 14 Pro - 256GB</p>
                      <p className="text-xs text-slate-500">SN: APPL-PH-552 | Tag: #8812</p>
                    </div>
                    <span className="px-2 py-1 text-[10px] font-bold uppercase rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Pending</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="flex-1 text-xs font-bold py-2 px-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-sm">supervisor_account</span> Transfer
                    </button>
                    <button className="flex-1 text-xs font-bold py-2 px-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-sm">inventory</span> Return
                    </button>
                    <button className="flex-1 text-xs font-bold py-2 px-3 border border-red-200 text-red-600 dark:border-red-900/50 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-sm">report</span> Damaged
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Status Summary */}
          <div className="flex flex-col gap-6">

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-primary to-blue-600 p-6 flex flex-col justify-end text-white">
                <p className="text-xs font-bold uppercase opacity-80 tracking-widest">Offboarding Progress</p>
                <h2 className="text-3xl font-black">Sarah Jenkins</h2>
              </div>

              <div className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Hand-off Status</p>
                    <p className="text-lg font-bold">1 / 3 Assets</p>
                  </div>

                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '33.3%' }}></div>
                  </div>

                  <div className="flex flex-col gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Asset Recovery</span>
                      <span className="font-semibold text-emerald-600">33%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Network Access</span>
                      <span className="font-semibold text-amber-600">Active</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">LDAP Status</span>
                      <span className="font-semibold text-red-600">Locked</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button className="w-full bg-primary text-white font-bold py-4 px-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">cloud_sync</span>
                  Complete Offboarding
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-3 italic">This will update the GLPI API record and release all assigned licenses.</p>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary">info</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-blue-900 dark:text-blue-300">Manager Hand-off</p>
                  <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                    Sarah's direct manager is <span className="font-bold">Mark Henderson</span>. Transfers will automatically assign assets to him.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
