import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../api/axiosConfig";

export default function Vendors() {
  const { folderId } = useParams();
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    API.get(`/vendors/folder/${folderId}`)
      .then(res => setVendors(res.data))
      .catch(err => console.error(err));
  }, [folderId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Vendors</h2>
      {vendors.map(v => (
        <Link
          key={v._id}
          to={`/categories/${v._id}`}
          style={{ display: "block", margin: 10, padding: 10, border: "1px solid #ccc", borderRadius: 5 }}
        >
          {v.name}
        </Link>
      ))}
    </div>
  );
}
