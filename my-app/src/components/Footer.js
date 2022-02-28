import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <nav class="nav">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <Link
        to="/about"
        className={`nav__link ${
          location.pathname === "/about" && "nav__link--active"
        }`}
      >
        <i class="material-icons nav___icon">qr_code_scanner</i>
        <span class="nav__text">QR</span>
      </Link>

      <Link
        to="/"
        className={`nav__link ${
          location.pathname === "/" && "nav__link--active"
        }`}
      >
        <i class="material-icons nav___icon">list</i>
        <span class="nav__text">Inventory</span>
      </Link>

      <Link
        to="/about"
        className={`nav__link ${
          location.pathname === "/about" && "nav__link--active"
        }`}
      >
        <i class="material-icons nav___icon">dashboard</i>
        <span class="nav__text">Order</span>
      </Link>
    </nav>
  );
};

export default Footer;
