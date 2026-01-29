import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Upload() {
  const [videos, setVideos] = useState([]);

  // Load saved videos from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(saved);
  }, []);

  // Convert file to Base64
  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const upload = async (e) => {
    const files = Array.from(e.target.files);

    const newVideos = await Promise.all(
      files.map(async (f) => ({
        name: f.name,
        src: await fileToBase64(f), // persistent storage
      }))
    );

    const updated = [...videos, ...newVideos];
    setVideos(updated);
    localStorage.setItem("videos", JSON.stringify(updated));
  };

  // Delete video
  const deleteVideo = (index) => {
    const updated = videos.filter((_, i) => i !== index);
    setVideos(updated);
    localStorage.setItem("videos", JSON.stringify(updated));
  };

  return (
    <>
      <Sidebar />

      <div className="ml-64 min-h-screen flex flex-col bg-gradient-to-br from-sky-400 via-cyan-300 to-blue-400 animate-fadeIn">
        <main className="flex-grow p-10">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8">

            {/* Title */}
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Upload Videos
            </h2>

            {/* Upload Button */}
            <label
              className="inline-flex items-center gap-3 cursor-pointer
              bg-gradient-to-r from-sky-500 to-cyan-500
              text-white font-semibold px-6 py-3 rounded-xl
              shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95
              transition-all duration-300"
            >
              <i className="fa-solid fa-cloud-arrow-up text-lg"></i>
              <span>Upload Videos</span>

              <input
                type="file"
                multiple
                accept="video/*"
                onChange={upload}
                className="hidden"
              />
            </label>

            <p className="text-sm text-gray-600 mt-3">
              Videos will remain even after refresh ✅
            </p>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {videos.map((v, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition relative"
                >
                  <p className="truncate font-semibold text-gray-800">
                    {v.name}
                  </p>

                  <video
                    src={v.src}
                    controls
                    className="w-full mt-3 rounded-lg"
                  />

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteVideo(i)}
                    className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600 transition"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
