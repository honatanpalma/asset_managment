export default function SoftwareLicenses() {
  return (
    <div className="flex-1 p-8">
      {/* Header Section */}
      <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Software Licenses</h2>
          <p className="text-slate-500 text-sm mt-1">Manage, track, and optimize your organization's software stack.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
            <input className="pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all w-64" placeholder="Search licenses..." type="text" />
          </div>
          <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">add</span>
            Add New License
          </button>
        </div>
      </header>

      {/* Stats Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8 group-hover:scale-110 transition-transform"></div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-3xl">token</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total Licenses</p>
              <h3 className="text-2xl font-black">1,284</h3>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
            <span className="material-symbols-outlined text-base">trending_up</span>
            <span>+12% this month</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full -mr-8 -mt-8 group-hover:scale-110 transition-transform"></div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-600">
              <span className="material-symbols-outlined text-3xl">history</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Expiring Soon</p>
              <h3 className="text-2xl font-black">42</h3>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-amber-600">
            <span className="material-symbols-outlined text-base">priority_high</span>
            <span>Renewals due in 30 days</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full -mr-8 -mt-8 group-hover:scale-110 transition-transform"></div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-rose-500/10 text-rose-600">
              <span className="material-symbols-outlined text-3xl">person_off</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Unassigned</p>
              <h3 className="text-2xl font-black">156</h3>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-rose-600">
            <span className="material-symbols-outlined text-base">trending_down</span>
            <span>-2% cost efficiency</span>
          </div>
        </div>
      </div>

      {/* License Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">License Type</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Assigned User</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Expiry Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                      <span className="material-symbols-outlined">admob</span>
                    </div>
                    <span className="font-semibold text-sm">Adobe Creative Cloud</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">Subscription</span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-slate-500 line-clamp-1">Design & Illustration Suite for Marketing</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img className="w-7 h-7 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWHvjE-vpPP7u2sdm3BH-PS-8ZwbW6LBqcQ-Kde986l_3r0VgtJhanpLYcXxTTeWp5I-Z-gZ63zIE9p5mAijMS6imog1yq1VLxJMra7fWz-WYpXTBj1B-QinROpqsTaQpBAE7yxv0nLtQ5kwQwLCLT_krfXZfTAXJMWKyWDPL13NpTNhAIcoOJsP0ZxbpZB6w_Te7vGxdSg7xeOHMJoKdAOwH18rivXnL1utAt8CLR_I4j937MBrmjuE2SDqCMWo8RszFJlzDHp2o" alt="Sarah Johnson" />
                    <span className="text-sm">Sarah Johnson</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium">Dec 15, 2024</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-400">
                    <span className="material-symbols-outlined text-xl">more_vert</span>
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                      <span className="material-symbols-outlined">work</span>
                    </div>
                    <span className="font-semibold text-sm">Microsoft 365 Business</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">Subscription</span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-slate-500 line-clamp-1">Office Apps & Cloud Storage</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img className="w-7 h-7 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcycbMZX37p_OJdqJoLWwVlomdCvUzXdYlsxm25mSyqj0ITUO7DhILCRF5lvcD9paE-qhrKhM4h0aQRO-OUcdGh0eFKY_paflj453WBunJitVOWN-po2714RYlp6nJ69Vot8nq9FjVnoWtFO8HpsSvSAmfEHgabQcZWLJIfGyE8Dgdto32RrEmQ4WSA8i-9lBTjj4rlynSeXLkfP-1sokT7FREhRt-mcmwPg5E1KPqDt9_lzQPdUMbuuZpISbsQ-CUGX0vPNWVPus" alt="David Chen" />
                    <span className="text-sm">David Chen</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium">Jan 20, 2025</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-400">
                    <span className="material-symbols-outlined text-xl">more_vert</span>
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <span className="font-semibold text-sm">JetBrains All Products</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase rounded-full bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400">Perpetual</span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-slate-500 line-clamp-1">Professional IDE for Engineering</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">MW</div>
                    <span className="text-sm">Marcus Wright</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-400 italic">No Expiry</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-400">
                    <span className="material-symbols-outlined text-xl">more_vert</span>
                  </button>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                      <span className="material-symbols-outlined">chat_bubble</span>
                    </div>
                    <span className="font-semibold text-sm">Slack Enterprise Grid</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">Subscription</span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-slate-500 line-clamp-1">Internal Team Communication</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img className="w-7 h-7 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOOgHe21g5CcvcVIo26whajHqR-PSVBS4IWnvnv5bBZ-F44heeJjKQb04wQQOjHDLBkNXp4LADlvGlkJ1UVT1p-na92sMx0gqa-RR_3t7lxK7__PHeBKh6awsZiVKpH__-eCT38NJJe2raKaXkNB9QOh891ujArIcH7YWXmPw8ftp1JHExoeaiFyFwAv8ULRaz1_WzjN-lND6DUmd10_NYM3Nf-0r_8-IT8hVYHqFhZ87n--sZKpSine6w_zOqsev_HdzBDEN48HM" alt="Robert Fox" />
                    <span className="text-sm">Robert Fox</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-rose-500">Nov 30, 2024</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-400">
                    <span className="material-symbols-outlined text-xl">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">Showing <span className="text-slate-900 dark:text-slate-100">1 to 4</span> of 1,284 licenses</p>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-md hover:bg-slate-100 dark:bg-slate-800 transition-colors text-slate-500">
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded-md bg-primary text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-bold">2</button>
            <button className="w-8 h-8 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-bold">3</button>
            <button className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500">
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
