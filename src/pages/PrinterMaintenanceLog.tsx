export default function PrinterMaintenanceLog() {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Header */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-bold tracking-tight">Printer Maintenance Log</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
            <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Search maintenance logs..." type="text" />
          </div>
        </div>
      </header>

      <div className="p-8 space-y-8 overflow-y-auto">
        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Service</span>
              <span className="material-symbols-outlined text-primary">history</span>
            </div>
            <div className="text-2xl font-black">1,284</div>
            <div className="text-xs text-green-500 font-medium mt-1">↑ 12% from last month</div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pending Tasks</span>
              <span className="material-symbols-outlined text-amber-500">pending_actions</span>
            </div>
            <div className="text-2xl font-black text-amber-500">24</div>
            <div className="text-xs text-slate-500 mt-1">4 urgent requests</div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Upcoming Today</span>
              <span className="material-symbols-outlined text-blue-500">today</span>
            </div>
            <div className="text-2xl font-black">08</div>
            <div className="text-xs text-slate-500 mt-1">Across 3 locations</div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Techs</span>
              <span className="material-symbols-outlined text-slate-400">engineering</span>
            </div>
            <div className="text-2xl font-black">12</div>
            <div className="text-xs text-slate-500 mt-1">All currently assigned</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Log Table Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">Recent Activity</h3>
                  <p className="text-sm text-slate-500">Detailed logs of all maintenance actions performed.</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">filter_list</span>
                    Filter
                  </button>
                  <button className="px-3 py-1.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Export
                  </button>
                </div>
              </div>

              {/* Filters Bar */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex flex-wrap gap-4">
                <select className="text-xs font-medium bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 min-w-[140px] outline-none">
                  <option>All Printers</option>
                  <option>HP LaserJet M605</option>
                  <option>Xerox Altalink C8145</option>
                  <option>Canon imageRUNNER</option>
                </select>
                <select className="text-xs font-medium bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 min-w-[140px] outline-none">
                  <option>All Technicians</option>
                  <option>Sarah Johnson</option>
                  <option>Michael Chen</option>
                  <option>David Miller</option>
                </select>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-sm text-slate-400">calendar_today</span>
                  <input className="text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg pl-8 pr-3 py-1.5 outline-none" type="text" defaultValue="Oct 01 - Oct 31, 2023" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase text-[10px] font-bold tracking-widest border-b border-slate-200 dark:border-slate-800">
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Printer Name</th>
                      <th className="px-6 py-3">Service Type</th>
                      <th className="px-6 py-3">Technician</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium">Oct 24, 2023</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">HP LaserJet-04</span>
                          <span className="text-xs text-slate-500">Floor 2, Room 204</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 text-[11px] font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">Toner Replacement</span>
                      </td>
                      <td className="px-6 py-4 text-sm">Sarah Johnson</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          <span className="text-xs font-medium text-green-600 dark:text-green-400">Completed</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium">Oct 23, 2023</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">Xerox-Altalink-A</span>
                          <span className="text-xs text-slate-500">Reception Lobby</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 text-[11px] font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full">Drum Kit</span>
                      </td>
                      <td className="px-6 py-4 text-sm">Michael Chen</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          <span className="text-xs font-medium text-amber-600 dark:text-amber-400">Pending</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium">Oct 22, 2023</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">Canon-IR-882</span>
                          <span className="text-xs text-slate-500">IT Dept, Lab 1</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 text-[11px] font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">Paper Jam</span>
                      </td>
                      <td className="px-6 py-4 text-sm">David Miller</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                          <span className="text-xs font-medium text-slate-400">Cancelled</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium">Oct 22, 2023</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">HP LaserJet-01</span>
                          <span className="text-xs text-slate-500">Executive Floor</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 text-[11px] font-bold bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">Scheduled Maint.</span>
                      </td>
                      <td className="px-6 py-4 text-sm">Sarah Johnson</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          <span className="text-xs font-medium text-green-600 dark:text-green-400">Completed</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Showing 1 to 4 of 1,284 entries</span>
                <div className="flex gap-1">
                  <button className="p-1.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                  <button className="px-2.5 py-1 text-xs font-bold bg-primary text-white rounded">1</button>
                  <button className="px-2.5 py-1 text-xs font-bold text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">2</button>
                  <button className="px-2.5 py-1 text-xs font-bold text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">3</button>
                  <button className="p-1.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Maintenance Section */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden h-full">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold">Upcoming Maintenance</h3>
                <p className="text-sm text-slate-500">Scheduled service tasks for the week.</p>
              </div>
              <div className="p-6 space-y-4">
                {/* Upcoming Item 1 */}
                <div className="group p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-transparent hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">Tomorrow</span>
                      <h4 className="text-sm font-bold">Quarterly Audit</h4>
                    </div>
                    <span className="material-symbols-outlined text-red-500 text-lg">priority_high</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-sm">print</span>
                      <span>All Floor 4 Printers (12 Units)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-sm">person</span>
                      <span>Tech: David Miller</span>
                    </div>
                  </div>
                </div>

                {/* Upcoming Item 2 */}
                <div className="group p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-transparent hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Oct 28</span>
                      <h4 className="text-sm font-bold">Scanner Calibration</h4>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-sm">print</span>
                      <span>Xerox Altalink C8145</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-sm">person</span>
                      <span>Tech: Sarah Johnson</span>
                    </div>
                  </div>
                </div>

                {/* Upcoming Item 3 */}
                <div className="group p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-transparent hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Oct 30</span>
                      <h4 className="text-sm font-bold">Deep Cleaning</h4>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-sm">print</span>
                      <span>Main Reception Unit</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-sm">person</span>
                      <span>Tech: Michael Chen</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 text-xs font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 mt-4">
                  <span className="material-symbols-outlined text-sm">calendar_add_on</span>
                  Schedule New Task
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats / Legend */}
        <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-primary/5 rounded-2xl border border-primary/10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-green-500">check_circle</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Uptime</p>
                <p className="text-sm font-black">99.8%</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-blue-500">speed</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg Response</p>
                <p className="text-sm font-black">45m</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="w-2 h-2 rounded-full bg-primary"></span> Maintenance
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span> Repair
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span> Cleaning
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
