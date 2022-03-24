import { Link, useLocation } from "react-router-dom";

const NavBarItem = ({ to, text, name }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className="flex flex-col 
      justify-center items-center 
      w-full hover:font-bold"
    >
      <i className="material-icons">{name}</i>
      <span className="">{text}</span>
    </Link>
  );
};

export default NavBarItem;
