import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import API from "../api/axiosConfig";
import { useState } from "react";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();
  const [details, setDetails] = useState({ address: "", phone: "" });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = async () => {
    if (!details.address || !details.phone) {
      alert("Please fill all details");
      return;
    }
    try {
      await API.post("/userorders", {
        products: cart.map(item => ({
          product: item._id,
          name: item.name,
          price: item.price,
          quantity: item.qty
        })),
        total,
        address: details.address,
        phone: details.phone
      });
      clearCart();
      alert("Order placed successfully!");
      navigate("/orders");
    } catch (err) {
      alert("Checkout failed");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>
      <input
        placeholder="Address"
        value={details.address}
        onChange={e => setDetails({ ...details, address: e.target.value })}
        style={{ display: "block", marginBottom: 10, padding: 8, width: "100%" }}
      />
      <input
        placeholder="Phone"
        value={details.phone}
        onChange={e => setDetails({ ...details, phone: e.target.value })}
        style={{ display: "block", marginBottom: 10, padding: 8, width: "100%" }}
      />
      <h3>Total: ₹{total}</h3>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
