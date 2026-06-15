import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <NavLink to={'/#'}> Acceuil</NavLink>
        <NavLink to={'/#'}> Project</NavLink>
        <NavLink to={'/#'}> Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
