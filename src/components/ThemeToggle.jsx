import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-6 right-6 z-50
      bg-white dark:bg-slate-800
      text-black dark:text-white
      px-4 py-2 rounded-full shadow-lg
      flex items-center gap-2
      transition-all duration-300"
    >
      {dark ? (
        <>
          <i className="fa-solid fa-sun text-yellow-400"></i>
          Light
        </>
      ) : (
        <>
          <i className="fa-solid fa-moon text-indigo-500"></i>
          Dark
        </>
      )}
    </button>
  );
}
