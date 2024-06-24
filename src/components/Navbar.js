import "../css/Navbar.css";
import logo from "../logo.svg";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div>
          <img src={logo} alt="logo" width="50px" height="50px" />
        </div>
        <div>
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Setting</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
