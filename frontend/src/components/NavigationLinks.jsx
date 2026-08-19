// src/components/NavigationLinks.jsx
import { Link } from "react-router-dom";

export default function NavigationLinks() {
  return (
    <nav className="nav-links">
      <Link to="/menu">Menu</Link>
      <Link to="/reservations">Reservations</Link>
      <Link to="/about">About Us</Link>
      <Link to="/gallery">Gallery</Link>
    </nav>
  );
}
