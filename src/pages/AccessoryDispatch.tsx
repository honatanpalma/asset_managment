export default function AccessoryDispatch() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <div className="max-w-[1200px] w-full mx-auto p-6 flex flex-col gap-8">

        {/* Page Title & Hero */}
        <section className="flex flex-col gap-2">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">Quick Peripheral Delivery</h1>
          <p className="text-slate-600 dark:text-slate-400">Streamline equipment handouts and track employee inventory in real-time.</p>
        </section>

        {/* Step 1: User Selection */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
            <h2 className="text-lg font-bold">Identify Employee</h2>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">person_search</span>
            <input className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-lg" placeholder="Search employee by name, ID, or email..." type="text" />

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest w-full mb-1">Recent Searches:</span>
              <button className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-sm flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors">
                <div className="size-5 rounded-full bg-slate-300 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCu9mcCruRVxbsLMEus78fa20JiyE7FaYnyxgzuD07S0oQzDotl3OG9nxQMwSUmhML5fR0diivCXB634X88T1SZxwkOF1SxqjwYcKUKACI3DsjUrb-Ly26vs9qcQ4wbUwoouyUqfBuSfoJ91sxbzVGHzYXaxg8UhriOkS98DSHr_SY3aO1cD2mCk05jvLYmAjWEINb0rcaMCXY5eiBHP36D--O7Y3JRBqNW64c8StuPXAaGn4fTRx-SXIMOaDX3wqCiVZPyZHlOCM4')" }}></div>
                Sarah Chen (ID: 9283)
              </button>
              <button className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-sm flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors">
                <div className="size-5 rounded-full bg-slate-300 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXYrC7uFyVpvjWFxI8fXn6MdA_wkIbHUntKoL98miQV2fW1bNB6Uj4N0r77SPK-p7T9QRTJHX1sUhSQ4BfQbxUAXegdKY-4aA7KVm_PlsNw7qQdCsFXRSRb0AjCoVGn1HOrdiXvtpi2qxCmE2iE3FISpK04MjOnnlH4xhg61LlsU_fOmKgWt76yvAH3Eoz7psAtP8Kz4g0Imnyu5m8ABGvAXvbNkb5QwpwLnJkZ7EemsMPi_iR71UCMOJ7ahRXn6-JJaD6m8-cuvA')" }}></div>
                Marcus Wright (ID: 1042)
              </button>
            </div>
          </div>
        </section>

        {/* Step 2: Catalog Selection */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Quick Catalog */}
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                  <h2 className="text-lg font-bold">Select Items</h2>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary"><span className="material-symbols-outlined">filter_list</span></button>
                  <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary"><span className="material-symbols-outlined">grid_view</span></button>
                </div>
              </div>

              {/* Categories Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary text-white px-4">
                  <span className="material-symbols-outlined text-base">apps</span>
                  <p className="text-sm font-medium">All Items</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <span className="material-symbols-outlined text-base">keyboard</span>
                  <p className="text-sm font-medium">Keyboards</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <span className="material-symbols-outlined text-base">mouse</span>
                  <p className="text-sm font-medium">Mice</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <span className="material-symbols-outlined text-base">settings_input_hdmi</span>
                  <p className="text-sm font-medium">Cables</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <span className="material-symbols-outlined text-base">cable</span>
                  <p className="text-sm font-medium">Adapters</p>
                </button>
              </div>

              {/* Grid of Items */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* Item Card */}
                <div className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all bg-slate-50/50 dark:bg-slate-950/50 cursor-pointer">
                  <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-xl mb-3 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors overflow-hidden relative">
                    <img className="object-cover w-full h-full opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYWpsuMT7fc1s7RK_3ITGscs-SdXpVVPgvYjqIZk6-l9HgWITtQfGh8yB8_jSGRzSlVl2qx6Jr6naWndc2ymYROeTKT6uczPHMf3sOl_KuOh1Hmo5JAeKGHzzBlMoVf3C9cMD2HWBvJMw6PgiaErf0919ZOjaATLbnqfcbgvkUamPi_e7PXZmURfDElyGlJOUNHwQBpouwxBlR8sTZZmBvOK63V5C2pCYX-9NA0AtAB-LtbPhR3IKxfHxiQUZeDm0sO0xLkJ-Q2ss" alt="Mechanical Keyboard" />
                    <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">12 In Stock</span>
                  </div>
                  <h4 className="font-bold text-sm">Mechanical Keyboard</h4>
                  <p className="text-xs text-slate-500">Logitech MX Mechanical</p>
                  <button className="mt-3 w-full py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all">Add to Cart</button>
                </div>

                <div className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all bg-slate-50/50 dark:bg-slate-950/50 cursor-pointer">
                  <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-xl mb-3 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors overflow-hidden relative">
                    <img className="object-cover w-full h-full opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwuqgHVYZaxzYxTa59CVo7ky3hOK2jPN6O7XFJtbCalR7Ppj61u_LYXKv5lokLSe0J_qMlMZ3BuhBdqoyfHojcmoaHim8aQZ9pbIVodroz_7Bf2r92HUgKgGM6fE2xnfnPO2LcPfZvQG0uGLfLHuOTcQYwiRy76Y4PspuJ-lZfpyWagEzjUl--SPNrXLb_thc9tBZd8_LpNkkVWxQBfdBA96mxO9YEt9_CjFPG-A4qZv3PnmIBU7jW3FMjgGjRPrSHY2H7xlRlqfI" alt="Ergonomic Mouse" />
                    <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">45 In Stock</span>
                  </div>
                  <h4 className="font-bold text-sm">Ergonomic Mouse</h4>
                  <p className="text-xs text-slate-500">MX Master 3S</p>
                  <button className="mt-3 w-full py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all">Add to Cart</button>
                </div>

                <div className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all bg-slate-50/50 dark:bg-slate-950/50 cursor-pointer">
                  <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-xl mb-3 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors overflow-hidden relative">
                    <img className="object-cover w-full h-full opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7ZEzdme7Rtv7xWZMVG-l2LbvWpkxv_uUgJBdfyy06ITsgxjxYw1jK9KFuYWcbeuZyltmri7NJuv6QTFv0LPkmTW_PJGiWreH61u_OJC2KhC2UbB9IeQsNN8DFei6ElxI4APCZkmUC__s5nYKhYabneXx1_ooeo-na8Q24t2QIFQocctuBgX9pNEkWka-xzSsmmDoGssTHi3aG0PDihWiBeLmLN4ouBKQAWyAF9aynxnOo8fEvSu3_AocpIwNmw5GKfH_7Dp6xQYU" alt="USB-C Cable" />
                    <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">120+ In Stock</span>
                  </div>
                  <h4 className="font-bold text-sm">USB-C Cable (2m)</h4>
                  <p className="text-xs text-slate-500">Braided High-Speed</p>
                  <button className="mt-3 w-full py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          {/* Bulk Kits & Confirmation */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 text-white shadow-xl shadow-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined">auto_fix_high</span>
                <h2 className="text-lg font-bold">Bulk Setup Kits</h2>
              </div>
              <p className="text-sm text-white/80 mb-6">One-click assignment for onboarding new hires.</p>

              <div className="space-y-3">
                <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 p-4 rounded-xl flex items-center justify-between transition-colors group">
                  <div className="text-left">
                    <h4 className="font-bold text-sm">Standard Office Kit</h4>
                    <p className="text-xs text-white/60">Keyboard, Mouse, Dock</p>
                  </div>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 p-4 rounded-xl flex items-center justify-between transition-colors group">
                  <div className="text-left">
                    <h4 className="font-bold text-sm">Developer Pro Kit</h4>
                    <p className="text-xs text-white/60">Mechanical KB, MX Mouse, 4K Adapter</p>
                  </div>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 p-4 rounded-xl flex items-center justify-between transition-colors group">
                  <div className="text-left">
                    <h4 className="font-bold text-sm">Remote Essentials</h4>
                    <p className="text-xs text-white/60">HD Webcam, USB-C Hub</p>
                  </div>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">shopping_cart</span>
                Selected Items (2)
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800 pb-3">
                  <span className="font-medium">1x Mechanical Keyboard</span>
                  <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined text-sm">close</span></button>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800 pb-3">
                  <span className="font-medium">1x USB-C Cable (2m)</span>
                  <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined text-sm">close</span></button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-slate-400">draw</span>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Confirmation</p>
                    <p className="text-xs text-slate-500 mt-1">Hand-off required via digital signature or badge swipe.</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-100 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">how_to_reg</span>
                Confirm & Hand-off
              </button>
            </div>
          </div>
        </section>

        {/* Recent Transactions (Aesthetic Table) */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Recent Hand-offs</h2>
            <button className="text-primary text-sm font-semibold hover:underline">View All History</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                  <th className="pb-4 font-semibold">Employee</th>
                  <th className="pb-4 font-semibold">Items</th>
                  <th className="pb-4 font-semibold">Time</th>
                  <th className="pb-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">J</div>
                      <div>
                        <p className="text-sm font-bold">Jason Miller</p>
                        <p className="text-[10px] text-slate-500">Product Design</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-sm">MX Master 3S, HDMI Cable</td>
                  <td className="py-4 text-xs text-slate-500">12:42 PM</td>
                  <td className="py-4">
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] font-bold uppercase">Completed</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">A</div>
                      <div>
                        <p className="text-sm font-bold">Anita Raj</p>
                        <p className="text-[10px] text-slate-500">Engineering</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-sm">Developer Pro Kit</td>
                  <td className="py-4 text-xs text-slate-500">11:15 AM</td>
                  <td className="py-4">
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] font-bold uppercase">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}
