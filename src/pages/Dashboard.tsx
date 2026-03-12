export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Asset Overview</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-sm text-slate-500 dark:text-slate-400">Last synced 2 minutes ago via GLPI API</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold shadow-sm hover:shadow-md transition-all">
          <span className="material-symbols-outlined text-lg">sync</span>
          <span>Force Sync</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-l-4 border-primary shadow-sm hover:shadow-lg transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined">devices</span>
            </div>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">+5%</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Assets</p>
          <p className="text-3xl font-black text-slate-900 dark:text-white">1,284</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-l-4 border-emerald-500 shadow-sm hover:shadow-lg transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
              <span className="material-symbols-outlined">confirmation_number</span>
            </div>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">+12%</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Software Licenses</p>
          <p className="text-3xl font-black text-slate-900 dark:text-white">482</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-l-4 border-amber-500 shadow-sm hover:shadow-lg transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
              <span className="material-symbols-outlined">sync_alt</span>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">Steady</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Transfers</p>
          <p className="text-3xl font-black text-slate-900 dark:text-white">12</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-l-4 border-rose-500 shadow-sm hover:shadow-lg transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500">
              <span className="material-symbols-outlined">build</span>
            </div>
            <span className="text-xs font-bold text-rose-500 bg-rose-100 dark:bg-rose-900/30 px-2 py-1 rounded-full">+8%</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Assets for Repair</p>
          <p className="text-3xl font-black text-slate-900 dark:text-white">43</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Visualization Section */}
        <div className="lg:col-span-2 p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Assets by Type</h3>
            <select className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-xs font-bold py-1 px-3 pr-8 focus:ring-0">
              <option>This Month</option>
              <option>Last Quarter</option>
            </select>
          </div>
          <div className="flex items-center justify-between gap-8 h-64">
            {/* Placeholder Chart Design using Flex */}
            <div className="flex-1 flex items-end gap-3 h-full">
              <div className="w-full bg-primary/20 rounded-t-lg relative group h-[85%]">
                <div className="absolute inset-0 bg-primary rounded-t-lg transition-all h-0 group-hover:h-full"></div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">PCs</div>
              </div>
              <div className="w-full bg-emerald-500/20 rounded-t-lg relative group h-[65%]">
                <div className="absolute inset-0 bg-emerald-500 rounded-t-lg transition-all h-0 group-hover:h-full"></div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">Laptops</div>
              </div>
              <div className="w-full bg-purple-500/20 rounded-t-lg relative group h-[45%]">
                <div className="absolute inset-0 bg-purple-500 rounded-t-lg transition-all h-0 group-hover:h-full"></div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">Monitors</div>
              </div>
              <div className="w-full bg-amber-500/20 rounded-t-lg relative group h-[25%]">
                <div className="absolute inset-0 bg-amber-500 rounded-t-lg transition-all h-0 group-hover:h-full"></div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">Other</div>
              </div>
            </div>
            <div className="w-48 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Computers</span>
                </div>
                <span className="text-sm font-bold">42%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-emerald-500"></div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Laptops</span>
                </div>
                <span className="text-sm font-bold">32%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Monitors</span>
                </div>
                <span className="text-sm font-bold">18%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-amber-500"></div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Peripherals</span>
                </div>
                <span className="text-sm font-bold">8%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Recent Activity</h3>
            <button className="text-primary text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 relative">
              <div className="flex-shrink-0 size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary z-10">
                <span className="material-symbols-outlined text-xl">swap_horiz</span>
              </div>
              <div className="absolute left-5 top-10 bottom-[-24px] w-px bg-slate-200 dark:bg-slate-800"></div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">MacBook Pro #123 transferred to Sarah J.</p>
                <p className="text-xs text-slate-500 font-medium">Just now • Asset Transfer</p>
              </div>
            </div>
            <div className="flex gap-4 relative">
              <div className="flex-shrink-0 size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-emerald-500 z-10">
                <span className="material-symbols-outlined text-xl">add_box</span>
              </div>
              <div className="absolute left-5 top-10 bottom-[-24px] w-px bg-slate-200 dark:bg-slate-800"></div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">New Dell XPS 15 added to inventory</p>
                <p className="text-xs text-slate-500 font-medium">45 mins ago • Inventory Add</p>
              </div>
            </div>
            <div className="flex gap-4 relative">
              <div className="flex-shrink-0 size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-rose-500 z-10">
                <span className="material-symbols-outlined text-xl">build</span>
              </div>
              <div className="absolute left-5 top-10 bottom-[-24px] w-px bg-slate-200 dark:bg-slate-800"></div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">Monitor #882 marked for repair</p>
                <p className="text-xs text-slate-500 font-medium">2 hours ago • Maintenance</p>
              </div>
            </div>
            <div className="flex gap-4 relative">
              <div className="flex-shrink-0 size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary z-10">
                <span className="material-symbols-outlined text-xl">person_add</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">Marcus T. assigned to HR Department</p>
                <p className="text-xs text-slate-500 font-medium">Yesterday • User Update</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Assets List */}
      <div className="mt-8 p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">High Priority Assets</h3>
          <div className="flex gap-2">
            <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined text-lg">filter_list</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <th className="pb-4 font-bold text-slate-500 dark:text-slate-400 text-sm">Asset Name</th>
                <th className="pb-4 font-bold text-slate-500 dark:text-slate-400 text-sm">Serial Number</th>
                <th className="pb-4 font-bold text-slate-500 dark:text-slate-400 text-sm">Assigned To</th>
                <th className="pb-4 font-bold text-slate-500 dark:text-slate-400 text-sm">Status</th>
                <th className="pb-4 font-bold text-slate-500 dark:text-slate-400 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
              <tr>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-base">laptop_mac</span>
                    </div>
                    <span className="font-bold text-sm">MacBook Pro 16" (M2)</span>
                  </div>
                </td>
                <td className="py-4 text-sm font-medium text-slate-600 dark:text-slate-400">SN-8294-XJ2</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="size-6 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] font-bold text-purple-500">SJ</div>
                    <span className="text-sm font-medium">Sarah Jenkins</span>
                  </div>
                </td>
                <td className="py-4">
                  <span className="px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Active</span>
                </td>
                <td className="py-4 text-right">
                  <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400">
                    <span className="material-symbols-outlined text-lg">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
                      <span className="material-symbols-outlined text-base">desktop_windows</span>
                    </div>
                    <span className="font-bold text-sm">Dell Precision 3660</span>
                  </div>
                </td>
                <td className="py-4 text-sm font-medium text-slate-600 dark:text-slate-400">SN-1022-PQ9</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">MT</div>
                    <span className="text-sm font-medium">Marcus Thompson</span>
                  </div>
                </td>
                <td className="py-4">
                  <span className="px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider">Repair</span>
                </td>
                <td className="py-4 text-right">
                  <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400">
                    <span className="material-symbols-outlined text-lg">more_vert</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                      <span className="material-symbols-outlined text-base">monitor</span>
                    </div>
                    <span className="font-bold text-sm">UltraSharp 27" 4K</span>
                  </div>
                </td>
                <td className="py-4 text-sm font-medium text-slate-600 dark:text-slate-400">SN-4432-KK1</td>
                <td className="py-4">
                  <span className="text-sm font-medium text-slate-400 italic">Unassigned</span>
                </td>
                <td className="py-4">
                  <span className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">Storage</span>
                </td>
                <td className="py-4 text-right">
                  <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400">
                    <span className="material-symbols-outlined text-lg">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
