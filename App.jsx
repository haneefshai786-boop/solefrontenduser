import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Vendors from "./pages/Vendors";
import Categories from "./pages/Categories";
import Subcategories from "./pages/Subcategories";
import Products from "./pages/Products";

import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

import BottomNav from "./components/BottomNav";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <div style={{ paddingBottom: "60px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vendors/:folderId" element={<Vendors />} />
              <Route path="/categories/:vendorId" element={<Categories />} />
              <Route path="/subcategories/:categoryId" element={<Subcategories />} />
              <Route path="/products/:subcategoryId" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <BottomNav />
          </div>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}
