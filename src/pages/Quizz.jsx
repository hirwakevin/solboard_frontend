import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";


export default function Voice() {
  const [text, setText] = useState("");

  const speak = () => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  return (
    <>
      <Sidebar />
      <div className="ml-64 min-h-screen flex flex-col bg-gradient-to-br from-sky-400 via-cyan-300 to-blue-400 animate-fadeIn">
        <main className="flex-grow p-10">

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Voice Reader</h2>

            <textarea
              className="w-full p-4 rounded-xl"
              placeholder="Type text to speak..."
              onChange={(e) => setText(e.target.value)}
            />

            <button
              onClick={speak}
              className="mt-4 bg-sky-400 text-black px-6 py-2 rounded-full hover:scale-105 transition"
            >
              Speak
            </button>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
}
