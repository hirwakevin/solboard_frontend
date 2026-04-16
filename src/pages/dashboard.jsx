import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";


export default function Dashboard() {
  const [videoCount, setVideoCount] = useState(0);
  const [solarPower, setSolarPower] = useState(72); // % remaining

  useEffect(() => {
    const videos = JSON.parse(localStorage.getItem("videos")) || [];
    setVideoCount(videos.length);
  }, []);

  const powerColor =
    solarPower > 60
      ? "bg-green-500"
      : solarPower > 30
      ? "bg-yellow-400"
      : "bg-red-500";

  return (
    <>
      <Sidebar />

      <div className="ml-64 min-h-screen flex flex-col bg-gradient-to-br from-sky-400 via-cyan-300 to-blue-400 animate-fadeIn">
        <main className="flex-grow p-10">

          <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <i className="fa-solid fa-gauge text-sky-400"></i>
            Dashboard
          </h1>

          {/* TOP STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            {/* Videos */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8">
              <h3 className="text-sky-900">Uploaded Videos</h3>
              <p className="text-4xl font-bold mt-2 text-sky-000">
                {videoCount}
              </p>
            </div>

            {/* System Status */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8">
              <h3 className="text-sky-900">System Status</h3>
              <p className="text-xl font-semibold mt-3 text-green-400">
                Online
              </p>
            </div>

            {/* Solar Power */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8">
              <h3 className="text-sky-900 flex items-center gap-2">
                <i className="fa-solid fa-solar-panel text-yellow-400"></i>
                Solar Power Remaining
              </h3>

              <p className="text-2xl font-bold mt-2">
                {solarPower}%
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-3 mt-3 overflow-hidden">
                <div
                  className={`${powerColor} h-3 rounded-full transition-all duration-700`}
                  style={{ width: `${solarPower}%` }}
                />
              </div>
            </div>

          </div>

          {/* QUICK ACTIONS */}
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <a
              href="/upload"
              className="bg-gradient-to-r from-sky-500 to-cyan-500
              rounded-2xl p-6 text-center shadow-xl
              hover:scale-105 transition"
            >
              <i className="fa-solid fa-cloud-arrow-up text-3xl mb-3"></i>
              <h3 className="text-xl font-bold">Upload</h3>
            </a>

            <a
              href="/cast"
              className="bg-gradient-to-r from-purple-500 to-indigo-500
              rounded-2xl p-6 text-center shadow-xl
              hover:scale-105 transition"
            >
              <i className="fa-solid fa-tv text-3xl mb-3"></i>
              <h3 className="text-xl font-bold">Cast</h3>
            </a>

            <a
              href="/voice"
              className="bg-gradient-to-r from-emerald-500 to-teal-500
              rounded-2xl p-6 text-center shadow-xl
              hover:scale-105 transition"
            >
              <i className="fa-solid fa-microphone text-3xl mb-3"></i>
              <h3 className="text-xl font-bold">Voice</h3>
            </a>

          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}
