import { Link, useLocation } from "react-router-dom";

const NavBarItem = ({ to, text, name }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={`navbar__item ${
        location.pathname === to && "navbar__item--active"
      }`}
    >
      <i className="material-icons navbar__icon">{name}</i>
      <span className="navbar__text">{text}</span>
    </Link>
  );
};

export default NavBarItem;
