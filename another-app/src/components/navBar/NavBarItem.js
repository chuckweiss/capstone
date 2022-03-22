import { Link, useLocation } from "react-router-dom";

const NavBarItem = ({ to, text, name }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className="flex flex-col 
      justify-center items-center 
      hover:bg-green-200 
      active:bg-green-800"
    >
      <i className="material-icons">{name}</i>
      <span className="">{text}</span>
    </Link>
  );
};

export default NavBarItem;
