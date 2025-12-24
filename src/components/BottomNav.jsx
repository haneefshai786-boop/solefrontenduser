// src/components/BottomNav.jsx
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaClipboardList, FaUser, FaShoppingCart } from "react-icons/fa";

export default function BottomNav() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/orders", label: "Orders", icon: <FaClipboardList /> },
    { to: "/profile", label: "Profile", icon: <FaUser /> },
    { to: "/cart", label: "Cart", icon: <FaShoppingCart /> },
  ];

  return (
    <nav style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "#fff",
      boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
      display: "flex",
      justifyContent: "space-around",
      padding: "10px 0",
      zIndex: 1000,
    }}>
      {links.map(link => (
        <Link
          key={link.to}
          to={link.to}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,
            color: location.pathname === link.to ? "#ff3c00" : "#555",
            textDecoration: "none",
            fontWeight: location.pathname === link.to ? "600" : "400",
            transition: "color 0.2s",
          }}
        >
          <span style={{ fontSize: 20, marginBottom: 2 }}>{link.icon}</span>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
