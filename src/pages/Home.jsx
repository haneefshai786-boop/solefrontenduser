import React, { useEffect, useState } from "react";
import API from "../api/axiosConfig";
import { Link } from "react-router-dom";

export default function Home() {
  const [folders, setFolders] = useState([]);
  useEffect(() => {
    API.get("/folders").then(res => setFolders(res.data));
  }, []);
  return (
    <div style={{padding:"1rem"}}>
      <h2>Folders</h2>
      {folders.map(f => (
        <div key={f._id}><Link to={`/vendors/${f._id}`}>{f.name}</Link></div>
      ))}
    </div>
  );
}
