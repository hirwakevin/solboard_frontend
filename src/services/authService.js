export async function loginUser(email, password) {
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    return { ok: res.ok, data };
  } catch (error) {
    return { ok: false, data: { message: "Network error" } };
  }
}
