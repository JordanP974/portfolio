import { profile } from "../../data/profile";

function Footer() {
  return (
    <footer>
      <h4>Jordan Paris</h4>
      <p>Développeur Web Full Stack</p>
      <h4>Contact</h4>
      
        <a href={`mailto:${profile.email}`}>Email</a> 
        <a href={`tel: ${profile.phone}`}>Telephone</a>
        <a href={`${profile.github}`}
          target="_blank"
          rel="noopener noreferrer"> GitHub </a>
        
        {/* LinkedIn */}
      
      <p>© 2026 Jordan Paris</p>
      <p>Développé avec React & TypeScript</p>
    </footer>
  );
}

export default Footer;