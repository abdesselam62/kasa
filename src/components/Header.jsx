import { NavLink } from "react-router-dom";
import logo from "../assets/logo_header.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header_logo" />
      <nav>
        <NavLink to="/" className="nav_items">
          Accueil
        </NavLink>
        <NavLink to="/about" className="nav_items">
          A propos
        </NavLink>
      </nav>
    </header>
  );
}


