import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { to: "/dashboard", icon: "dashboard", label: "Dashboard" },
    { to: "/asset-transfers", icon: "swap_horiz", label: "Transfers" },
    { to: "/asset-delivery", icon: "local_shipping", label: "Delivery" },
    { to: "/user-offboarding", icon: "person_remove", label: "Offboarding" },
    { to: "/software-licenses", icon: "card_membership", label: "Licenses" },
    { to: "/printer-maintenance", icon: "build", label: "Printer Maintenance" },
    { to: "/printer-management", icon: "print", label: "Printers" },
    { to: "/user-profile", icon: "person", label: "Users" },
    { to: "/asset-audit", icon: "description", label: "Audit" },
    { to: "/phone-delivery", icon: "smartphone", label: "Phone Delivery" },
    { to: "/accessory-dispatch", icon: "package_2", label: "Accessories" },
    { to: "/advanced-reports", icon: "monitoring", label: "Reports" },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-screen overflow-y-auto">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-2xl">memory</span>
        </div>
        <div>
          <h1 className="font-bold text-lg leading-none">NexGen IT</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">GLPI Connected</p>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1 pb-4">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              location.pathname === link.to
                ? "bg-primary/10 text-primary font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            <span className="text-sm font-medium">{link.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 mt-auto sticky bottom-0 bg-white dark:bg-slate-900">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
            <img className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYFx8G95S4LvYWgwyyhSJfMloO4mYrHbSnRpAzt6nbKhGZ5l6LAZ-XVFwBqCrf836VO5hnw3vUYiF8O3DgV_Jzm_e2RwXlQs1oA9badvIfbLp5wsO1N8lmaFnIPAfEu-A3iISgpp-HO5lxV9Kck38_Kf8WmzpvBwsGK1bkzAv9b2ReU1jE62chdEerJ78VHP2b1IviT-gdMT2zN-accHnHp_8WK5EDcTkaJHj7NL27GXiuPAeTaOl-EaRX6O5z0X2i0gB7GA1yz2w" alt="Admin avatar" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate">Alex Rivera</p>
            <p className="text-xs text-slate-500 truncate">Super Admin</p>
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <span className="material-symbols-outlined text-xl">settings</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
