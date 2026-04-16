import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Cast() {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");
  const [device, setDevice] = useState("");
  const [message, setMessage] = useState("");

  /* ---------- Sync with Upload Page ---------- */
  useEffect(() => {
    // Reading the same "videos" key used in Upload.jsx
    const saved = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(saved);
  }, []);

  /* ---------- Cast Flow ---------- */
  const openCast = () => {
    setShowModal(true);
    setStep(1);
    setPassword("");
    setDevice("");
    setMessage("");
  };

  const verifyPassword = () => {
    if (password === "1234") setStep(2);
    else alert("Wrong password");
  };

  const startCasting = () => {
    setMessage(`Casting started on ${device}`);
    setStep(3);
  };

  return (
    <>
      <Sidebar />

      <div className="ml-64 min-h-screen flex flex-col bg-gradient-to-br from-sky-400 via-cyan-300 to-blue-400 animate-fadeIn">
        <main className="flex-grow p-10">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-6">Cast Videos</h1>

          {/* Empty State */}
          {videos.length === 0 && (
            <div className="text-center py-20 bg-white/5 rounded-2xl border border-dashed border-gray-600">
              <p className="text-gray-400">No uploaded videos found.</p>
              <p className="text-sm text-gray-500">Go to the Upload page to add some!</p>
            </div>
          )}

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((v, index) => (
              <div
                key={index}
                className="bg-white/10 p-4 rounded-xl shadow-lg border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <p className="truncate font-semibold text-sky-400 mb-2">{v.name}</p>
                  <video
                    controls
                    className="w-full rounded-lg shadow-inner bg-black"
                    src={v.src} // This now matches the Base64 src from Upload.jsx
                  />
                </div>

                <button
                  onClick={openCast}
                  className="mt-4 bg-sky-500 w-full py-2.5 rounded-lg font-bold hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/20"
                >
                  <i className="fa-solid fa-play mr-2 text-sm"></i> CAST
                </button>
              </div>
            ))}
          </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* ---------- MODAL ---------- */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-black p-6 rounded-2xl w-full max-w-sm shadow-2xl animate-in zoom-in duration-200">
            {step === 1 && (
              <>
                <h2 className="font-bold text-xl mb-4 text-gray-800">Security Check</h2>
                <p className="text-sm text-gray-500 mb-4">Enter your casting password to continue.</p>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-gray-200 p-3 w-full rounded-xl mb-4 focus:border-sky-500 outline-none transition-all"
                />
                <div className="flex gap-2">
                    <button onClick={() => setShowModal(false)} className="w-1/2 py-2 text-gray-500 font-semibold">Cancel</button>
                    <button
                    onClick={verifyPassword}
                    className="bg-sky-500 text-white w-1/2 py-3 rounded-xl font-bold hover:bg-sky-600 shadow-md shadow-sky-200"
                    >
                    Continue
                    </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="font-bold text-xl mb-4 text-gray-800">Select Device</h2>
                <div className="space-y-2 mb-6">
                  {["LG TV", "Samsung TV", "HP Monitor"].map((d) => (
                    <div
                      key={d}
                      onClick={() => setDevice(d)}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all flex justify-between items-center ${
                        device === d 
                        ? "border-sky-500 bg-sky-50 text-sky-600" 
                        : "border-gray-100 hover:border-sky-200"
                      }`}
                    >
                      <span className="font-medium">{d}</span>
                      {device === d && <i className="fa-solid fa-circle-check"></i>}
                    </div>
                  ))}
                </div>
                <button
                  onClick={startCasting}
                  disabled={!device}
                  className="bg-sky-500 text-white w-full py-3 rounded-xl font-bold disabled:opacity-50 hover:bg-sky-600 transition-all"
                >
                  Start Casting
                </button>
              </>
            )}

            {step === 3 && (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    <i className="fa-solid fa-broadcast-tower"></i>
                </div>
                <h2 className="text-green-600 font-bold text-xl mb-2">{message}</h2>
                <p className="text-gray-500 text-sm mb-6">Your video is now being streamed to the selected device.</p>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-800 text-white w-full py-3 rounded-xl font-bold hover:bg-black transition-all"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
