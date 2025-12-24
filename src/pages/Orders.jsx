import { useEffect, useState } from "react";
import API from "../api/axiosConfig";
import { useUser } from "../context/UserContext";

export default function Orders() {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;

    API.get("/userorders", {
      headers: { Authorization: `Bearer ${user.token}` }
    })
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, [user]);

  if (!user) return <p style={{ padding: 20 }}>Please login to view orders</p>;
  if (!orders.length) return <p style={{ padding: 20 }}>No orders yet</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>My Orders</h2>
      {orders.map(order => (
        <div
          key={order._id}
          style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}
        >
          <p>Status: {order.status}</p>
          <p>Total: ₹{order.total}</p>
          <p>Items: {order.products.length}</p>
          {order.products.map(p => (
            <p key={p._id}>
              {p.product.name} x {p.quantity} - ₹{p.product.price}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
