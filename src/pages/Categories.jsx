import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../api/axiosConfig";

export default function Categories() {
  const { vendorId } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.get(`/categories/vendor/${vendorId}`)
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, [vendorId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Categories</h2>
      {categories.map(c => (
        <Link
          key={c._id}
          to={`/subcategories/${c._id}`}
          style={{ display: "block", margin: 10, padding: 10, border: "1px solid #ccc", borderRadius: 5 }}
        >
          {c.name}
        </Link>
      ))}
    </div>
  );
}
