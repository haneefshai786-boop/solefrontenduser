import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axiosConfig";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { subcategoryId } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    API.get(`/products?subCategory=${subcategoryId}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, [subcategoryId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p._id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10, borderRadius: 5 }}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart({ ...p, qty: 1 })}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
