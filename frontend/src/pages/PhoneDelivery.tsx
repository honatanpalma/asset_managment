export default function PhoneDelivery() {
  return (
    <div className="flex-1 px-6 py-8 lg:px-20 max-w-[1280px] mx-auto w-full">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">New Device Assignment</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Complete the form below to assign a mobile asset to a team member.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form Column */}
        <div className="lg:col-span-2 space-y-8">

          {/* Section 1: Phone Inventory */}
          <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="material-symbols-outlined text-primary">inventory_2</span>
              <h3 className="text-lg font-bold">Phone Inventory Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Model</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">devices</span>
                  <select className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary outline-none">
                    <option>Select device model...</option>
                    <option>iPhone 15 Pro Max - Titanium (256GB)</option>
                    <option>iPhone 15 - Blue (128GB)</option>
                    <option>Samsung Galaxy S24 Ultra - Black (512GB)</option>
                    <option>Google Pixel 8 Pro - Porcelain (256GB)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">IMEI Number</label>
                <input className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary outline-none" placeholder="Enter 15-digit IMEI" type="text" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">SIM Card ID (ICCID)</label>
                <input className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary outline-none" placeholder="Enter ICCID" type="text" />
              </div>
            </div>
          </section>

          {/* Section 2: User Assignment */}
          <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="material-symbols-outlined text-primary">person_add</span>
              <h3 className="text-lg font-bold">User Assignment</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Search User</label>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary outline-none" placeholder="Search by name, email or employee ID..." type="text" />
                  </div>
                  <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Search</button>
                </div>
              </div>

              {/* Selected User Card (Mockup) */}
              <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-primary/20 bg-primary/5">
                <div className="h-14 w-14 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_cLBLAPvgydBfonViwmxu4nloeL6bDf8oMPud9N2wL4RNVvAJYed8nESu9s0IXlFxtRzsQzeYiDzfeHZcpZ3I1faroRJ2kDed0v8JChBUCTSCWtyLMC8bL8jhGz1vXH83DEpPtwdl-OwvDQ9wMMS4Yn0Oko3C-DVyQPgXRTidKgfpsDRa4WMsFdijlT0nx_A5mfuv51oJ3ZVq19i6N_3e2o4Y9IxDrudP5_MmzvVCq4_I2EhjpI1iL8fHWAE19Xo58A9nEfwtyxk" alt="Marcus Thorne" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">Marcus Thorne</h4>
                  <p className="text-sm text-slate-500">Senior Project Manager • ID: #EM-4920</p>
                </div>
                <button className="text-primary hover:text-primary/80">
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-1 space-y-6">

          {/* Terms & Checklist */}
          <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-4">Agreement Checklist</h3>
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input className="mt-1 h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">Employee has verified the device condition is 'New/Excellent'.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input className="mt-1 h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">User agrees to the Corporate Mobility Policy and Security terms.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input className="mt-1 h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">Device tracking is enabled for enterprise security purposes.</span>
              </label>
            </div>
          </section>

          {/* Confirmation / Signature */}
          <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-4">Confirm Delivery</h3>
            <div className="mb-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Digital Signature</p>
              <div className="h-32 w-full bg-slate-50 dark:bg-slate-950 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg flex flex-col items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-3xl mb-1">draw</span>
                <p className="text-xs">Signature required on tablet</p>
              </div>
            </div>

            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">check_circle</span>
              Complete Assignment
            </button>
            <button className="w-full mt-3 py-3 bg-transparent text-slate-500 font-semibold hover:text-slate-700 transition-colors text-sm">
              Cancel & Reset
            </button>
          </section>

          {/* Status Tracking Card */}
          <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-6 text-white shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-3xl opacity-80">local_shipping</span>
              <span className="px-2 py-1 bg-white/20 rounded text-[10px] font-bold uppercase tracking-widest">Inventory Live</span>
            </div>
            <p className="text-sm opacity-80 mb-1">Stock remaining</p>
            <p className="text-3xl font-bold">142 Units</p>

            <div className="mt-4 w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-white h-full" style={{ width: '65%' }}></div>
            </div>
            <p className="mt-2 text-[10px] font-medium opacity-70 italic text-right">Last sync: 2 mins ago</p>
          </div>

        </div>
      </div>
    </div>
  );
}
