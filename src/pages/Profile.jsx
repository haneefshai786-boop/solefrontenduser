import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  if (!user) return (
    <div style={{ padding: 20 }}>
      <h2>Profile</h2>
      <p>Please login or register</p>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
    </div>
  );
}
