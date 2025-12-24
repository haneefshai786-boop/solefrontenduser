import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axiosConfig";

export default function Folders() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    API.get("/folders")
      .then(res => setFolders(res.data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: 16,
        }}
      >
        {folders.map(folder => (
          <Link
            key={folder._id}
            to={`/vendors/${folder._id}`}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: 16,
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 8 }}>🏪</div>
              <h3 style={{ margin: 0, color: "#333" }}>{folder.name}</h3>
              <p style={{ margin: 4, fontSize: 12, color: "#888" }}>Explore</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
