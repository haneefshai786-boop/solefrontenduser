import { useState } from "react";
import API from "../api/axiosConfig";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", { name, email, password });
      login(res.data);
      navigate("/");
    } catch (err) {
      alert("Registration failed");
      console.error(err);
    }
  };

  return (
    <form onSubmit={submitHandler} style={{ padding: 20 }}>
      <h2>Register</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} style={{ display: "block", marginBottom: 10, padding: 8, width: "100%" }} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ display: "block", marginBottom: 10, padding: 8, width: "100%" }} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ display: "block", marginBottom: 10, padding: 8, width: "100%" }} />
      <button type="submit">Register</button>
    </form>
  );
}
