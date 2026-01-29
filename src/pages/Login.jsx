import React, { useState } from "react";
import { loginUser } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { ok, data } = await loginUser(email, password);

    if (ok) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "/home";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-400">
      <div className="bg-white p-8 rounded w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          placeholder="Email"
          className="border w-full p-2 mb-3"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="border w-full p-2 mb-3"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-sky-400 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
