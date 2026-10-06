import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Taller React</h1>

      <ul>
        <li>
          <a href="inicio">Inicio</a>
        </li>
        <li>
          <a href="#items">Items</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
