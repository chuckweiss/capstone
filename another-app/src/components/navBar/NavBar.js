import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <nav className="navbar">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <NavBarItem to="/qrScanner" text="QR" name="qr_code_scanner" />
      <NavBarItem to="/inventory" text="Inventory" name="list" />
      <NavBarItem to="/order" text="Order" name="dashboard" />
    </nav>
  );
};

export default NavBar;
