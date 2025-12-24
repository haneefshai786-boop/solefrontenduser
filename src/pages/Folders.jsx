import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axiosConfig";

export default function Folders() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    API.get("/folders")
      .then(res => setFolders(res.data))
      .catch(err => console.error("Failed to fetch folders:", err));
  }, []);

  return (
    <div style={{ padding: 20, width: "100%" }}>
      {/* Grid container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 20,
          width: "100%",
        }}
      >
        {folders.map(folder => (
          <div key={folder._id} style={{ display: "block", width: "100%" }}>
            <Link
              to={`/vendors/${folder._id}`}
              style={{
                display: "block",              // crucial: make Link block
                width: "100%",
                height: 140,
                background: "#fff8e1",
                borderRadius: 15,
                textDecoration: "none",
                color: "#333",
                fontWeight: 600,
                textAlign: "center",
                lineHeight: "140px",           // centers text vertically
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              {folder.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
