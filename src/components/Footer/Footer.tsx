import { profile } from "../../data/profile";
import Information from "../Contact/Information/Information";

function Footer() {
  return (
    <footer>
      <h4>Jordan Paris</h4>
      <p>Développeur Web Full Stack</p>
      <h4>Contact</h4>
      
        <Information/>
        
        {/* LinkedIn */}
      
      <p>© 2026 Jordan Paris</p>
      <p>Développé avec React & TypeScript</p>
    </footer>
  );
}

export default Footer;