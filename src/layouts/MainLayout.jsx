import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
  <div className="ml-56 min-h-screen flex flex-col bg-gradient-to-br from-sky-400 to-cyan-300">

      {/* LEFT NAV */}
      <Sidebar />

  {/* PAGE CONTENT */}
  <main className="flex-grow p-10">
    {/* your existing content */}
  </main>

  {/* FOOTER */}
  <Footer />

</div>
  );
}

