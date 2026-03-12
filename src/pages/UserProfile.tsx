export default function UserProfile() {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">User Profile</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage personal information and IT asset assignments.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm">
              Export Report
            </button>
            <button className="px-6 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 shadow-md shadow-primary/20">
              Save Changes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Personal Info & Assets */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Card */}
            <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex flex-col @container">
                <div className="flex flex-col @[500px]:flex-row gap-6 items-center @[500px]:items-start">
                  <div className="relative group">
                    <div className="w-32 h-32 rounded-full border-4 border-primary/10 overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpG1HXTXu5vP8BdXCaJ1m0jzdUtbItCAfl-7bykMzzJSTDuWu0UI5OqnbD3omtz6ILxCUIqL7UM9rSoH1VYc6c-4-b1EvQBVpqV-Ea7mQ_p10sbR4sS3N-ta5IGvEfqj1uP3pwQpFwmgyd6sQM42kIY0JIyvLU9VGzgAte3LSkvwOQzFPwxdIE0fjZ37bamBuD1k_VC2i7xbvk-JHyFNqjpt7PR_S1Y43dZAEgH7mMBXr3oWEF7E3lWsP6tEVxIunKDq3n7ixBd88" alt="Alex Rivera" />
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-sm">photo_camera</span>
                    </button>
                  </div>
                  <div className="flex-1 text-center @[500px]:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Alex Rivera</h3>
                    <p className="text-primary font-semibold text-sm">Senior Systems Engineer</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Infrastructure & Operations</p>
                    <div className="mt-4 grid grid-cols-1 @[400px]:grid-cols-2 gap-y-2 gap-x-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 justify-center @[500px]:justify-start">
                        <span className="material-symbols-outlined text-base text-slate-400">mail</span>
                        alex.rivera@company.com
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 justify-center @[500px]:justify-start">
                        <span className="material-symbols-outlined text-base text-slate-400">call</span>
                        +1 (555) 012-3456
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 justify-center @[500px]:justify-start">
                        <span className="material-symbols-outlined text-base text-slate-400">location_on</span>
                        Austin, TX - HQ
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 justify-center @[500px]:justify-start">
                        <span className="material-symbols-outlined text-base text-slate-400">calendar_today</span>
                        Joined Aug 2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Assigned Assets */}
            <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">devices</span>
                  Assigned Assets
                </h3>
                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">3 Assets Total</span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {/* Asset Item 1 */}
                <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                      <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">laptop_mac</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">MacBook Pro 16" (2023)</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Asset Tag: #AS-9982 • S/N: C02F5...X7M</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">Assigned</p>
                    <p className="text-[10px] text-slate-400">12 Jan 2023</p>
                  </div>
                </div>
                {/* Asset Item 2 */}
                <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                      <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">smartphone</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">iPhone 15 Pro</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Asset Tag: #PH-4421 • S/N: G7K9L...2W1</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">Assigned</p>
                    <p className="text-[10px] text-slate-400">05 Oct 2023</p>
                  </div>
                </div>
                {/* Asset Item 3 */}
                <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                      <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">monitor</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Dell UltraSharp 27"</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Asset Tag: #MN-1102 • S/N: DE098...PQ2</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">Assigned</p>
                    <p className="text-[10px] text-slate-400">12 Jan 2023</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-50/50 dark:bg-slate-800/30 text-center">
                <button className="text-primary text-sm font-bold hover:underline">Request New Hardware</button>
              </div>
            </section>
          </div>

          {/* Right Column: Security, Notifications, Preferences */}
          <div className="space-y-8">
            {/* Security & Credentials */}
            <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">security</span>
                Security
              </h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-primary/5 group transition-colors">
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Change Password</p>
                    <p className="text-[11px] text-slate-500">Last changed 3 months ago</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">chevron_right</span>
                </button>
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Two-Factor Auth</p>
                    <p className="text-[11px] text-green-500 font-semibold">Enabled (Authenticator)</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </section>

            {/* Notification Settings */}
            <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">notifications</span>
                Notifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Asset Transfers</p>
                    <p className="text-[11px] text-slate-500 leading-tight">Notify on assignment changes</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Maintenance Alerts</p>
                    <p className="text-[11px] text-slate-500 leading-tight">Scheduled device service</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Push Notifications</p>
                    <p className="text-[11px] text-slate-500 leading-tight">Mobile app alerts</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" />
                    <div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </section>

            {/* System Preferences */}
            <section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">tune</span>
                Preferences
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">Language</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-900 dark:text-white focus:ring-primary outline-none">
                    <option value="en">English (US)</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">Theme</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="flex items-center justify-center gap-2 p-2 rounded-lg border-2 border-primary bg-primary/5 text-primary text-xs font-bold">
                      <span className="material-symbols-outlined text-sm">light_mode</span>
                      Light
                    </button>
                    <button className="flex items-center justify-center gap-2 p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800">
                      <span className="material-symbols-outlined text-sm">dark_mode</span>
                      Dark
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-600">Last login: Today at 08:42 AM from 192.168.1.45 (Windows/Chrome)</p>
        </div>
      </div>
    </div>
  );
}
