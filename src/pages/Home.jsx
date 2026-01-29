import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";


export default function Home() {
  const features = [
    {
      title: "Upload Media",
      desc: "Upload videos and manage billboard content",
      icon: "fa-cloud-arrow-up",
      link: "/upload",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Cast System",
      desc: "Cast videos to smart devices and billboards",
      icon: "fa-tv",
      link: "/cast",
      color: "from-purple-500 to-indigo-400",
    },
    {
      title: "Voice Control",
      desc: "Control system with voice commands",
      icon: "fa-microphone",
      link: "/voice",
      color: "from-emerald-500 to-green-400",
    },
    {
      title: "Smart Billboard",
      desc: "Solar-powered digital billboard system",
      icon: "fa-solar-panel",
      link: "/home",
      color: "from-yellow-500 to-orange-400",
    },
  ];

  return (
    <>
      <Sidebar />

      <div className="ml-64 min-h-screen flex flex-col bg-gradient-to-br from-sky-400 via-cyan-300 to-blue-400 animate-fadeIn">

        {/* MAIN */}
        <main className="flex-grow p-10">

          {/* HEADER */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">
              Welcome to SolBoard
            </h1>
            <p className="text-white/80 text-lg mt-2 max-w-2xl">
              Smart solar-powered digital billboard platform with AI, voice control,
              robot accessibility, and smart casting technology.
            </p>
          </div>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((f, i) => (
              <a
                key={i}
                href={f.link}
                className="group relative bg-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-xl
                           border border-white/30 hover:scale-105 transition-all duration-300
                           hover:shadow-2xl hover:border-white/60"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition
                              bg-gradient-to-br ${f.color}`}
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-full
                                bg-gradient-to-br ${f.color} text-white text-2xl shadow-lg`}
                  >
                    <i className={`fa-solid ${f.icon}`}></i>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {f.title}
                  </h3>

                  <p className="mt-2 text-white/80 text-sm">
                    {f.desc}
                  </p>

                  <div className="mt-4 text-white font-semibold opacity-80 group-hover:opacity-100">
                    Open →
                  </div>
                </div>
              </a>
            ))}

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
