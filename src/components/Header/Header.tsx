import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { profile } from '../../data/profile';
import './Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className='header'>

      <nav className='nav'>
      <div className="nav-inner">
        <NavLink to={'/#'} className={'brand'} > {profile.first_name} <span>.</span> {profile.last_name}</NavLink>
        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          menu
        </button>
          <div className={`nav-links${isOpen ? ' open' : ''}`}>
            <NavLink to={'/#'} onClick={closeMenu}> Acceuil</NavLink>
            <NavLink to={'/#'} onClick={closeMenu}> Projets</NavLink>
            <NavLink to={'/#'} onClick={closeMenu}> Contact</NavLink>
            <NavLink to={'/#'} onClick={closeMenu}> compétences</NavLink>
            <NavLink to={'/#'} onClick={closeMenu}> parcours</NavLink>
            <span className="status"><span className="dot"></span>Disponible — stage</span>
          </div>
      </div>
      </nav>
    </header>
  );
}

export default Header;
