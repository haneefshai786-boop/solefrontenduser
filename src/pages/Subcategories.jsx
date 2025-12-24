import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../api/axiosConfig";

export default function Subcategories() {
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    API.get(`/subcategories/${categoryId}`)
      .then(res => setSubcategories(res.data))
      .catch(err => console.error(err));
  }, [categoryId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Subcategories</h2>
      {subcategories.map(s => (
        <Link
          key={s._id}
          to={`/products/${s._id}`}
          style={{ display: "block", margin: 10, padding: 10, border: "1px solid #ccc", borderRadius: 5 }}
        >
          {s.name}
        </Link>
      ))}
    </div>
  );
}
