export default function AssetDelivery() {
  return (
    <div className="px-6 lg:px-40 flex flex-1 justify-center py-8 w-full">
      <div className="layout-content-container flex flex-col max-w-[1024px] flex-1 gap-8">
        {/* Title Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-tight">Asset Delivery</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base">Assign hardware to employees and generate verification labels</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Search and Select */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Recipient Selection Card */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person_search</span>
                Recipient Information
              </h3>
              <div className="flex flex-col gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Select User</span>
                  <div className="relative">
                    <select className="form-select w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-14 px-4 text-base focus:ring-primary focus:border-primary appearance-none outline-none">
                      <option disabled selected value="">Search user by name, ID or email...</option>
                      <option value="1">Alex Rivera (ID: 4429) - Design Team</option>
                      <option value="2">Sarah Chen (ID: 1102) - Engineering</option>
                      <option value="3">Marcus Wright (ID: 8831) - Sales</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-slate-400">expand_more</span>
                    </div>
                  </div>
                </label>
              </div>
            </section>

            {/* Asset Selection Card */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">devices</span>
                Asset Selection
              </h3>
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                  <input className="w-full pl-12 pr-4 h-14 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary outline-none" placeholder="Search GLPI Inventory (Monitor, Keyboard, Mouse...)" type="text" />
                </div>
                <div className="space-y-3 mt-2">
                  <div className="flex items-center justify-between p-4 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">monitor</span>
                      <div>
                        <p className="font-bold">Dell UltraSharp 27" 4K</p>
                        <p className="text-xs text-slate-500">SN: DE-99283-X | Tag: IT-2024-081</p>
                      </div>
                    </div>
                    <button className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded-md transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">keyboard</span>
                      <div>
                        <p className="font-bold">Logitech MX Mechanical</p>
                        <p className="text-xs text-slate-500">SN: LOGI-331-M | Tag: IT-2024-094</p>
                      </div>
                    </div>
                    <button className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded-md transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                <button className="mt-2 w-full border-2 border-dashed border-slate-200 dark:border-slate-700 py-3 rounded-xl text-slate-500 hover:border-primary hover:text-primary flex items-center justify-center gap-2 font-semibold transition-colors">
                  <span className="material-symbols-outlined">add_circle</span>
                  Add another asset
                </button>
              </div>
            </section>
          </div>

          {/* Right Column: Verification & QR */}
          <div className="flex flex-col gap-6">
            {/* QR Code Card */}
            <section className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg text-center">
              <div className="mb-4 inline-flex items-center justify-center p-2 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                <span className="text-xs font-bold text-primary px-2 uppercase tracking-wider">Secure Transfer</span>
              </div>
              <h3 className="text-lg font-bold mb-6">Delivery QR Token</h3>

              <div className="bg-white p-4 rounded-xl border-4 border-slate-50 dark:border-slate-800 inline-block shadow-inner mx-auto mb-6">
                <div className="w-48 h-48 bg-slate-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-200/50"></div>
                  <img className="w-40 h-40 relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwoRfpwhWq1FyurlPnBbkYJvXxrmW1atbw599w5JrVvSqeLEWq9ndovLBTTXwKPzv0AE3kiCbypj1vISKmqUZaUbduqeiLMenME9ExFL8lbLLz_7_Sg5Jypiyv72dPgliaedN2lcUqp8PggVL0qoS0pGROov3SOkFLZtml8MOe1O_lSixvVOeJrrf_Gb9AIUIbFSeUI-SSwzBpD3bsZkT1nyhR7AMGIYoVA0rhObvMTdku2mjAsYwQgwbJb0HKAj_UMars6iHhvO4" alt="Transaction QR Code" />
                </div>
              </div>

              <div className="text-sm text-slate-500 mb-6 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg leading-relaxed text-left">
                <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">How it works:</p>
                Ask the user to scan this code using their mobile GLPI app to digitally sign for the delivery.
              </div>

              <div className="flex flex-col gap-3">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-primary/20 transition-colors">
                  <span className="material-symbols-outlined">print</span>
                  Print QR Label
                </button>
                <button className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <span className="material-symbols-outlined">share</span>
                  Send to Email
                </button>
              </div>
            </section>

            {/* Delivery Summary Mini-Card */}
            <section className="bg-primary text-white p-6 rounded-xl shadow-lg shadow-primary/30 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <span className="material-symbols-outlined text-9xl">inventory</span>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest opacity-80 mb-4">Delivery Summary</h4>
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-sm opacity-80">Recipient</span>
                  <span className="text-sm font-bold">Alex Rivera</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-sm opacity-80">Total Items</span>
                  <span className="text-sm font-bold">02</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-sm opacity-80">Location</span>
                  <span className="text-sm font-bold">HQ - Floor 4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm opacity-80">Status</span>
                  <span className="bg-yellow-400 text-slate-900 px-2 py-0.5 rounded text-[10px] font-black">PENDING SCAN</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Help */}
        <footer className="border-t border-slate-200 dark:border-slate-800 pt-6 mt-4 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Connected to GLPI Production Instance • Transaction ID: #DEL-2024-9981
          </p>
        </footer>
      </div>
    </div>
  );
}
