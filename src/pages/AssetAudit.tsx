export default function AssetAudit() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">

          {/* Page Hero Section */}
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-3xl font-extrabold tracking-tight">Auditing & Asset Sheets</h3>
              <p className="text-slate-500 dark:text-slate-400">Generate assignment documents and track financial depreciation.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-lg">download</span>
                Export CSV
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-lg">add_notes</span>
                Generate Asset Sheet
              </button>
            </div>
          </div>

          {/* Main Audit Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left: User Search & Asset Info */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* User Card */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-bold text-lg">Employee Assignment</h4>
                  <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs px-2.5 py-1 rounded-full font-bold">Audit Ready</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
                  <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">person</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 font-medium">Currently Selected</p>
                    <h5 className="text-lg font-bold">Sarah Jenkins</h5>
                    <p className="text-xs text-slate-400">Senior UI/UX Designer • Product Team</p>
                  </div>
                  <button className="text-primary text-sm font-bold hover:underline">Change</button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">laptop_mac</span>
                      <div>
                        <p className="text-sm font-bold leading-none">MacBook Pro 16" (M2 Max)</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">ID: #ASSET-8829</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">$3,499.00</p>
                      <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">Depr: -$420/yr</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">monitor</span>
                      <div>
                        <p className="text-sm font-bold leading-none">Pro Display XDR</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">ID: #ASSET-4102</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">$4,999.00</p>
                      <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">Depr: -$650/yr</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">keyboard</span>
                      <div>
                        <p className="text-sm font-bold leading-none">Magic Keyboard & Mouse</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">ID: #ASSET-0921</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">$199.00</p>
                      <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">Depr: -$50/yr</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Depreciation Analytics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Book Value</p>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-slate-100">$8,697.00</h4>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    <span>Verified for 2024 Audit</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Annual Depreciation</p>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-slate-100">$1,120.00</h4>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-primary">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>Next review in 4 months</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: PDF Preview Pane */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-slate-200 dark:bg-slate-800 rounded-xl flex flex-col h-full border-4 border-white dark:border-slate-900 shadow-xl overflow-hidden min-h-[500px]">

                {/* PDF Toolbar */}
                <div className="bg-slate-700 text-white px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Preview: ASSET_SHEET_JENKINS_S.pdf</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-slate-600 rounded"><span className="material-symbols-outlined text-lg">zoom_in</span></button>
                    <button className="p-1 hover:bg-slate-600 rounded"><span className="material-symbols-outlined text-lg">print</span></button>
                  </div>
                </div>

                {/* PDF Content Simulation */}
                <div className="bg-white flex-1 p-10 overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <span className="material-symbols-outlined text-[120px] text-slate-900">verified_user</span>
                  </div>

                  <div className="border-b-2 border-slate-900 pb-4 mb-6">
                    <h5 className="text-2xl font-black text-slate-900 uppercase">IT Asset Assignment</h5>
                    <p className="text-xs text-slate-500 font-bold">REF NO: IT-2024-00129-SJ</p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Assignee</p>
                      <p className="text-sm font-bold text-slate-900">Sarah Jenkins</p>
                      <p className="text-xs text-slate-600">UI/UX Department</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Effective Date</p>
                      <p className="text-sm font-bold text-slate-900">October 24, 2023</p>
                      <p className="text-xs text-slate-600">Review Date: Oct 2024</p>
                    </div>
                  </div>

                  <table className="w-full text-left mb-8">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asset Description</th>
                        <th className="py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Condition</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs font-medium text-slate-800">
                      <tr className="border-b border-slate-100">
                        <td className="py-3">Apple MacBook Pro 16" - M2 Max / 64GB / 2TB</td>
                        <td className="py-3 text-right">Excellent</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3">Apple Pro Display XDR - 32" Nano-Texture</td>
                        <td className="py-3 text-right">Pristine</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3">Peripherals Bundle (Keyboard, Mouse, Cables)</td>
                        <td className="py-3 text-right">New</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mt-auto pt-10 grid grid-cols-2 gap-12">
                    <div className="border-t border-slate-900 pt-2">
                      <p className="text-[8px] font-black uppercase tracking-tighter">Authorized IT Officer Signature</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">signature</span>
                        <span className="text-xs italic font-serif text-slate-600">Alex Rivers</span>
                      </div>
                    </div>
                    <div className="border-t border-slate-900 pt-2">
                      <p className="text-[8px] font-black uppercase tracking-tighter">Employee Acknowledgment</p>
                      <div className="mt-2 h-6 w-full border border-dashed border-slate-300"></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
