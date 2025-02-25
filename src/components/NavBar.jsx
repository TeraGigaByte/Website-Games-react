import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Список игр</Link>
        </li>
        <li>
          <Link to="/favorites">Избранные игры</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
