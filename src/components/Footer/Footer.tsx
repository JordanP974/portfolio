import './Footer.css';


function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <div className="logo">
          <h4>Jordan Paris</h4>
          <p>Développeur Web Full Stack</p>
        </div>
        <div className="nav-footer">
          <h4>Contact</h4>
          <a href="#apropos" >
              à propos
            </a>
            <a href="#competences" >
              compétences
            </a>
            <a href="#projets" >
              projets
            </a>
            <a href="#parcours" >
              parcours
            </a>
        </div>

        
        
        <div className="foot-end">
          <p>© 2026 Jordan Paris</p>
          <p>Développé avec React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
