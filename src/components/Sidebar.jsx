import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";


export default function Sidebar() {
  const { theme } = useTheme();
  const path = window.location.pathname;

  const linkClass = (link) =>
    `group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
     ${
       path === link
         ? "bg-sky-400 text-black shadow-lg shadow-sky-400/40"
         : "hover:bg-sky-400/20 hover:text-sky-300"
     }`;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      

      {/* LOGO */}
      <div className="py-8 text-center border-b border-slate-700">
        <h2 className="text-2xl font-bold text-sky-400 tracking-wide">
          SolBoard
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Smart Digital Display
        </p>
      </div>

      {/* NAV */}
      <nav className="flex flex-col mt-8 px-4 space-y-3">
        <a href="/home" className={linkClass("/home")}>
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </a>

        <a href="/upload" className={linkClass("/upload")}>
          <i className="fa-solid fa-cloud-arrow-up"></i>
          <span>Upload</span>
        </a>

        <a href="/cast" className={linkClass("/cast")}>
          <i className="fa-solid fa-tv"></i>
          <span>Cast</span>
        </a>

        <a href="/voice" className={linkClass("/voice")}>
          <i className="fa-solid fa-microphone"></i>
          <span>Voice</span>
        </a>

         <a href="/dashboard" className={linkClass("/dashboard")}>
          <i className="fa-solid fa-chart-line"></i>

          <span>Dashboard</span>
        </a>


        <a href="/logout" className={linkClass("/logout")}>
          <i className="fa-solid fa-right-from-bracket"></i>
          <span>Logout</span>


        </a>
      </nav>
    </aside>
  );
}
