import { useState, useContext } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert("Please fill all fields ⚠️");
      return;
    }

    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });

      login(res.data.token);   // store token
      navigate("/dashboard");  // redirect

    } catch (err) {
      console.log(err);  // ✅ FIX for eslint error
      alert(err?.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="container">
      <h2>🚀 Login</h2>

      <form onSubmit={submitHandler} className="form">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "10px" }}>
        Don't have an account?{" "}
        <span
          style={{ color: "#6c63ff", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;