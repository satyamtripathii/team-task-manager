import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/auth/register", { name, email, password });
      navigate("/");
    } catch {
      alert("Register failed ❌");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <form onSubmit={submitHandler} className="form">
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;