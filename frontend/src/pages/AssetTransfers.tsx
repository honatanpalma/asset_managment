export default function AssetTransfers() {
  return (
    <div className="flex-1 p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Asset Transfers</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage hardware movements between personnel and departments</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-lg">download</span>
            Download Report
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">add</span>
            Start New Transfer
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-6xl text-amber-500">pending_actions</span>
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending Requests</p>
          <p className="text-3xl font-black mt-2 text-amber-500">12</p>
          <p className="text-xs text-green-600 font-bold mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">trending_up</span> +2% this week
          </p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-6xl text-primary">local_shipping</span>
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">In Transit</p>
          <p className="text-3xl font-black mt-2 text-primary">05</p>
          <p className="text-xs text-slate-400 font-bold mt-2">Active movement</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-6xl text-green-500">check_circle</span>
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Completed (MTD)</p>
          <p className="text-3xl font-black mt-2 text-green-500">148</p>
          <p className="text-xs text-green-600 font-bold mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">trending_up</span> +12% vs last month
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Transfer Initiation Form */}
        <div className="xl:col-span-1">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-lg">Initiate New Transfer</h3>
              <p className="text-sm text-slate-500">GLPI synchronization active</p>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Search Asset</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400">search</span>
                  <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm outline-none" placeholder="SN: 8F92-K10 or Asset Name..." type="text" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-400">Current Owner (Detected)</label>
                <div className="flex items-center gap-3 p-3 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-500 text-lg">person</span>
                  </div>
                  <span className="text-sm font-medium">Sarah Jenkins (Design Team)</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">New Owner</label>
                <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm outline-none">
                  <option>Select user from GLPI directory</option>
                  <option>David Chen (Engineering)</option>
                  <option>Maria Garcia (Marketing)</option>
                  <option>Robert Smith (Legal)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Reason for Transfer</label>
                <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm outline-none">
                  <option>Onboarding</option>
                  <option>Hardware Upgrade</option>
                  <option>Department Switch</option>
                  <option>Maintenance/Repair</option>
                  <option>Offboarding</option>
                </select>
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-xl font-black tracking-wide hover:opacity-95 transition-opacity mt-4 flex items-center justify-center gap-2">
                SUBMIT TRANSFER REQUEST
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Active & History Lists */}
        <div className="xl:col-span-2 space-y-8">
          {/* Pending Transfers */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-bold text-lg">Pending & In Transit</h3>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-500 rounded-full text-xs font-bold uppercase tracking-wider">12 Active</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-bold uppercase">
                  <tr>
                    <th className="px-6 py-4">Asset Detail</th>
                    <th className="px-6 py-4">Movement</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                          <span className="material-symbols-outlined text-slate-500">laptop_mac</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold">MacBook Pro 16"</p>
                          <p className="text-xs text-slate-400">SN: MB16-2023-4412</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">S. Jenkins</span>
                        <span className="material-symbols-outlined text-sm text-slate-400">arrow_forward</span>
                        <span className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded">D. Chen</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-primary">
                        <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                        IN TRANSIT
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="px-3 py-1.5 bg-green-500 text-white rounded-lg text-xs font-bold hover:bg-green-600 transition-colors">Confirm Receipt</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                          <span className="material-symbols-outlined text-slate-500">desktop_windows</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold">Dell UltraSharp 27"</p>
                          <p className="text-xs text-slate-400">SN: DELL-U27-0992</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">IT Storage</span>
                        <span className="material-symbols-outlined text-sm text-slate-400">arrow_forward</span>
                        <span className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded">M. Garcia</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-amber-500">
                        <span className="size-2 rounded-full bg-amber-500"></span>
                        REQUESTED
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors">Approve</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Transfer History Log */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-lg">Transfer History</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* Log Item */}
                <div className="flex gap-4 relative">
                  <div className="absolute left-4 top-10 bottom-[-1.5rem] w-px bg-slate-100 dark:bg-slate-800"></div>
                  <div className="z-10 size-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-green-600 text-sm">check</span>
                  </div>
                  <div className="flex-1 pb-6 border-b border-slate-50 dark:border-slate-800/50">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-bold">Transfer Completed: iPad Pro 12.9"</p>
                        <p className="text-xs text-slate-500 mt-1">From Robert Smith to Engineering Lab</p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">2 hours ago</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button className="flex items-center gap-1 px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-[10px] font-bold hover:bg-slate-100 transition-colors">
                        <span className="material-symbols-outlined text-xs">receipt_long</span> VIEW RECEIPT
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-[10px] font-bold hover:bg-slate-100 transition-colors text-primary">
                        <span className="material-symbols-outlined text-xs">link</span> GLPI RECORD
                      </button>
                    </div>
                  </div>
                </div>

                {/* Log Item */}
                <div className="flex gap-4 relative">
                  <div className="absolute left-4 top-10 bottom-[-1.5rem] w-px bg-slate-100 dark:bg-slate-800"></div>
                  <div className="z-10 size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-blue-600 text-sm">history_edu</span>
                  </div>
                  <div className="flex-1 pb-6 border-b border-slate-50 dark:border-slate-800/50">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-bold">Handover Initiated: iPhone 15 Pro</p>
                        <p className="text-xs text-slate-500 mt-1">Onboarding: New Hire Maria Garcia</p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Oct 24, 09:12 AM</span>
                    </div>
                  </div>
                </div>

                {/* Log Item */}
                <div className="flex gap-4 relative">
                  <div className="z-10 size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-slate-400 text-sm">archive</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-bold">End of Cycle: Monitor 24"</p>
                        <p className="text-xs text-slate-500 mt-1">Moved to Surplus / E-Waste Disposal</p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Oct 23, 04:45 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 py-3 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-50 transition-colors uppercase tracking-widest">
                Load More History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
