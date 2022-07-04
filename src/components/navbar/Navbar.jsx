import FancyButton from "../buttons/FancyButton";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Eventbooking</span>
        <div className="navItems">
          <FancyButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
