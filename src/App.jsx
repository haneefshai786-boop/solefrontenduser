import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Vendors from "./pages/Vendors";
import Categories from "./pages/Categories";
import Subcategories from "./pages/Subcategories";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div
      style={{
        paddingBottom: 80,
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f0f4f8, #d9e2ec)",
        color: "#1f2937",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "16px",
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        My Shop
      </header>

      <main style={{ padding: "16px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendors/:folderId" element={<Vendors />} />
          <Route path="/categories/:vendorId" element={<Categories />} />
          <Route path="/subcategories/:categoryId" element={<Subcategories />} />
          <Route path="/products/:subcategoryId" element={<Products />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <BottomNav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#2563eb",
          color: "white",
          display: "flex",
          justifyContent: "space-around",
          padding: "12px 0",
          fontWeight: "bold",
        }}
      />
    </div>
  );
}
