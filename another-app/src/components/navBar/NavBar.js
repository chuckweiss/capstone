import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <nav
      className="fixed bottom-0 w-screen m-0 
    flex flex-row text-green-400 justify-evenly 
    bg-white pt-2 shadow-inner"
    >
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <NavBarItem to="/profiles" text="Profiles" name="account_circle" />
      <NavBarItem to="/inventory" text="Inventory" name="list" />
      <NavBarItem to="/order" text="Order" name="dashboard" />
    </nav>
  );
};

export default NavBar;
