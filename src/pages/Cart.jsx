import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, addQty, reduceQty, clearCart } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const checkoutHandler = () => {
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  if (!cart.length) return <p style={{ padding: 20 }}>Cart is empty</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item._id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10, borderRadius: 5 }}>
          <h3>{item.name}</h3>
          <p>₹{item.price} x {item.qty}</p>
          <button onClick={() => reduceQty(item._id)}>-</button>
          <button onClick={() => addQty(item._id)}>+</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={checkoutHandler}>Proceed to Checkout</button>
      <button onClick={clearCart} style={{ marginLeft: 10 }}>Clear Cart</button>
    </div>
  );
}
