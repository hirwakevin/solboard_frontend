import { useEffect, useRef, useState } from "react";

export default function LiveCaption() {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (e) => {
      let transcript = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        transcript += e.results[i][0].transcript;
      }
      setText(transcript);
    };

    recognitionRef.current = recognition;
  }, []);

  const toggleCaption = () => {
    if (!recognitionRef.current) return;

    if (active) {
      recognitionRef.current.stop();
      setText("");
    } else {
      recognitionRef.current.start();
    }

    setActive(!active);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleCaption}
        className="fixed bottom-24 right-6 bg-black text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        <i className="fa-solid fa-closed-captioning mr-2"></i>
        {active ? "Stop Captions" : "Live Captions"}
      </button>

      {/* Caption Box */}
      {active && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2
          bg-black/80 text-white px-6 py-3 rounded-xl
          max-w-3xl w-[90%] text-center text-lg shadow-xl z-50">
          {text || "Listening..."}
        </div>
      )}
    </>
  );
}
