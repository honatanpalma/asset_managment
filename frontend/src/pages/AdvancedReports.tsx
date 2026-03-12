import '../index.css';

export default function AdvancedReports() {
  return (
    <div className="p-8 space-y-8 flex-1">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Advanced Reports</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Real-time system-wide analytics and performance metrics.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined text-sm">schedule</span>
            Schedule Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
            <span className="material-symbols-outlined text-sm">download</span>
            Export Data
          </button>
        </div>
      </div>

      {/* Complex Filters */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Asset Type</label>
            <div className="relative">
              <select className="w-full appearance-none bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none pr-10">
                <option>All Categories</option>
                <option>Hardware</option>
                <option>Software Licenses</option>
                <option>Infrastructure</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Department</label>
            <div className="relative">
              <select className="w-full appearance-none bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none pr-10">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Product</option>
                <option>Sales & Marketing</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">User Assignment</label>
            <div className="relative">
              <select className="w-full appearance-none bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none pr-10">
                <option>Active Users</option>
                <option>Unassigned</option>
                <option>External Vendors</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Date Range</label>
            <div className="relative">
              <button className="w-full flex items-center justify-between bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-2.5 text-sm text-left focus:ring-2 focus:ring-primary/20 outline-none">
                <span>Oct 1, 2023 - Oct 31, 2023</span>
                <span className="material-symbols-outlined text-slate-400">calendar_today</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Visualization Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Bar Chart: Asset Distribution */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-lg">Asset Allocation</h3>
              <p className="text-xs text-slate-500">Distribution by department across the organization</p>
            </div>
            <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
          </div>

          <div className="flex-1 flex items-end justify-around gap-2 h-64 px-4">
            <div className="w-12 space-y-2 text-center group">
              <div className="h-48 w-full rounded-t-lg bg-gradient-to-b from-blue-500 to-blue-400 transition-all group-hover:brightness-110"></div>
              <span className="text-[10px] font-bold text-slate-400">ENG</span>
            </div>
            <div className="w-12 space-y-2 text-center group">
              <div className="h-32 w-full rounded-t-lg bg-gradient-to-b from-purple-500 to-purple-400 transition-all group-hover:brightness-110"></div>
              <span className="text-[10px] font-bold text-slate-400">PRD</span>
            </div>
            <div className="w-12 space-y-2 text-center group">
              <div className="h-40 w-full rounded-t-lg bg-gradient-to-b from-emerald-500 to-emerald-400 transition-all group-hover:brightness-110"></div>
              <span className="text-[10px] font-bold text-slate-400">SLS</span>
            </div>
            <div className="w-12 space-y-2 text-center group">
              <div className="h-56 w-full rounded-t-lg bg-gradient-to-b from-blue-500 to-blue-400 transition-all group-hover:brightness-110"></div>
              <span className="text-[10px] font-bold text-slate-400">HR</span>
            </div>
            <div className="w-12 space-y-2 text-center group">
              <div className="h-24 w-full rounded-t-lg bg-gradient-to-b from-amber-500 to-amber-400 transition-all group-hover:brightness-110"></div>
              <span className="text-[10px] font-bold text-slate-400">FIN</span>
            </div>
            <div className="w-12 space-y-2 text-center group">
              <div className="h-36 w-full rounded-t-lg bg-gradient-to-b from-purple-500 to-purple-400 transition-all group-hover:brightness-110"></div>
              <span className="text-[10px] font-bold text-slate-400">OPS</span>
            </div>
          </div>
        </div>

        {/* Pie Chart: Cost Distribution */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="mb-8">
            <h3 className="font-bold text-lg">Expense Breakdown</h3>
            <p className="text-xs text-slate-500">Total expenditure per category</p>
          </div>

          <div className="relative size-48 mx-auto flex items-center justify-center">
            {/* Abstract Pie Representation */}
            <div className="absolute inset-0 rounded-full border-[18px] border-primary border-t-purple-500 border-r-emerald-400"></div>
            <div className="text-center">
              <p className="text-2xl font-black">$42.8k</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Total Cost</p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary"></span>
                <span className="font-medium">Cloud Services</span>
              </div>
              <span className="font-bold">45%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400"></span>
                <span className="font-medium">Hardware</span>
              </div>
              <span className="font-bold">25%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-purple-500"></span>
                <span className="font-medium">SaaS Subscriptions</span>
              </div>
              <span className="font-bold">30%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Summary & Calendar Mini */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-lg">System Activity</h3>
            <button className="text-sm font-bold text-primary">View All Logs</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Action</th>
                  <th className="px-6 py-3">Object</th>
                  <th className="px-6 py-3">Time</th>
                  <th className="px-6 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="text-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[10px]">JD</div>
                      <span className="font-semibold">John Doe</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">Deprovisioned</td>
                  <td className="px-6 py-4 text-slate-500">MacBook Pro M2</td>
                  <td className="px-6 py-4 text-slate-400">2h ago</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Complete</span>
                  </td>
                </tr>
                <tr className="text-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-[10px]">SC</div>
                      <span className="font-semibold">Sarah Chen</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">Assigned</td>
                  <td className="px-6 py-4 text-slate-500">AWS Instance X2</td>
                  <td className="px-6 py-4 text-slate-400">5h ago</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Pending</span>
                  </td>
                </tr>
                <tr className="text-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[10px]">MK</div>
                      <span className="font-semibold">Mike King</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">Modified</td>
                  <td className="px-6 py-4 text-slate-500">License #8821</td>
                  <td className="px-6 py-4 text-slate-400">1d ago</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Complete</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mini Calendar Date Filter */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">Scheduled Dates</h3>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400"><span className="material-symbols-outlined text-base">chevron_left</span></button>
              <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400"><span className="material-symbols-outlined text-base">chevron_right</span></button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-4">
            <span className="text-[10px] font-black text-slate-300">S</span>
            <span className="text-[10px] font-black text-slate-300">M</span>
            <span className="text-[10px] font-black text-slate-300">T</span>
            <span className="text-[10px] font-black text-slate-300">W</span>
            <span className="text-[10px] font-black text-slate-300">T</span>
            <span className="text-[10px] font-black text-slate-300">F</span>
            <span className="text-[10px] font-black text-slate-300">S</span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            <div className="p-2 text-xs font-medium text-slate-400">26</div>
            <div className="p-2 text-xs font-medium text-slate-400">27</div>
            <div className="p-2 text-xs font-medium text-slate-400">28</div>
            <div className="p-2 text-xs font-medium text-slate-400">29</div>
            <div className="p-2 text-xs font-medium text-slate-400">30</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">1</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">2</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">3</div>
            <div className="p-2 text-xs font-medium text-white bg-primary rounded-lg ring-4 ring-primary/20">4</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">5</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">6</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">7</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">8</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">9</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">10</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">11</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">12</div>
            <div className="p-2 text-xs font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-lg">13</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">14</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">15</div>
            <div className="p-2 text-xs font-medium text-slate-900 dark:text-white">16</div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border-l-4 border-primary">
              <p className="text-[10px] font-bold text-primary uppercase">09:00 AM</p>
              <p className="text-xs font-bold truncate">Quarterly Budget Report</p>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border-l-4 border-slate-300">
              <p className="text-[10px] font-bold text-slate-400 uppercase">02:30 PM</p>
              <p className="text-xs font-bold truncate">Cloud Usage Sync</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
