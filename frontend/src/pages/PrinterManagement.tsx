export default function PrinterManagement() {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-background-dark">
      <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg py-2 pl-10 text-sm focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Search printers, models, or departments..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="size-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="size-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>
      </header>

      <div className="p-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Printer Setup</h2>
            <p className="text-slate-500 dark:text-slate-400">Manage and configure network and local printing assets.</p>
          </div>
          <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all">
            <span className="material-symbols-outlined">add_circle</span>
            Add New Printer
          </button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 text-sm font-medium">Total Assets</p>
            <p className="text-2xl font-bold mt-1">124</p>
            <div className="flex items-center gap-1 text-green-500 text-xs mt-2">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>2.4% vs last month</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 text-sm font-medium">Online Status</p>
            <p className="text-2xl font-bold mt-1">118</p>
            <div className="flex items-center gap-1 text-green-500 text-xs mt-2">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              <span>Optimal performance</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 text-sm font-medium">Maintenance Alerts</p>
            <p className="text-2xl font-bold mt-1">6</p>
            <div className="flex items-center gap-1 text-orange-500 text-xs mt-2">
              <span className="material-symbols-outlined text-sm">warning</span>
              <span>Action required</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 text-sm font-medium">Avg Ink Level</p>
            <p className="text-2xl font-bold mt-1">64%</p>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
              <div className="bg-primary h-full w-[64%]"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Printer Table Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold">Active Inventory</h3>
                <button className="text-primary text-sm font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                  Filter
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Printer Name</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Model</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">IP Address</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Dept</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                            <span className="material-symbols-outlined text-sm">print</span>
                          </div>
                          <span className="text-sm font-semibold">HP LaserJet Pro</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">M404dn</td>
                      <td className="px-6 py-4 text-sm font-mono text-slate-600 dark:text-slate-400">192.168.1.50</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase">Online</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Marketing</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                            <span className="material-symbols-outlined text-sm">print</span>
                          </div>
                          <span className="text-sm font-semibold">Canon imageRUNNER</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">C3525i</td>
                      <td className="px-6 py-4 text-sm font-mono text-slate-600 dark:text-slate-400">192.168.1.62</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase">Offline</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Finance</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                            <span className="material-symbols-outlined text-sm">print</span>
                          </div>
                          <span className="text-sm font-semibold">Epson WorkForce</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">WF-7840</td>
                      <td className="px-6 py-4 text-sm font-mono text-slate-600 dark:text-slate-400">192.168.1.75</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase">Online</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">HR</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Configuration Section */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
              <h3 className="font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">tune</span>
                Global Configuration
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Default Paper Size</span>
                    <select className="mt-1 block w-full rounded-lg border-slate-200 dark:bg-slate-800 dark:border-slate-700 text-sm focus:ring-primary/20 outline-none">
                      <option>A4 (210 x 297 mm)</option>
                      <option>Letter (8.5 x 11 in)</option>
                      <option>Legal (8.5 x 14 in)</option>
                    </select>
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Enforce Duplex</span>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Color Mode Default</span>
                    <div className="mt-2 flex gap-2">
                      <button className="flex-1 px-3 py-2 border border-primary bg-primary/5 text-primary rounded-lg text-xs font-bold">Grayscale</button>
                      <button className="flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-500">Full Color</button>
                    </div>
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Eco-Mode Mode</span>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" value="" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Maintenance Alerts</h4>
                  <div className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Low Toner Notification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Paper Jam Alerts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-2 rounded-full bg-slate-300"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Offline Trigger (15m)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add New Printer Form Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 p-8 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Printer Details</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Printer Name</label>
                  <input className="w-full rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary focus:border-primary outline-none" placeholder="e.g. Marketing_HQ_01" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Model</label>
                  <input className="w-full rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary focus:border-primary outline-none" placeholder="HP LaserJet, Canon..." type="text" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">IP Address</label>
                    <input className="w-full rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary focus:border-primary outline-none" placeholder="192.168.x.x" type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Type</label>
                    <select className="w-full rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary focus:border-primary outline-none">
                      <option>Network</option>
                      <option>USB Local</option>
                      <option>Wireless</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Driver Version</label>
                  <input className="w-full rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary focus:border-primary outline-none" placeholder="v4.5.12-build8" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Department</label>
                  <select className="w-full rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700 focus:ring-primary focus:border-primary outline-none">
                    <option>Unassigned</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                  </select>
                </div>
                <div className="pt-4">
                  <button className="w-full bg-slate-900 dark:bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all" type="submit">
                    Save Printer Asset
                  </button>
                  <button className="w-full mt-2 bg-transparent text-slate-500 py-2 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all" type="button">
                    Clear Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
