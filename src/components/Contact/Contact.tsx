import { profile } from '../../data/profile';
import './Contact.css';
import Information from './Information/Information';

function Contact(){
 return (
  <section className="contact" id="contact">
      <div className="wrap">
        <h2 className="reveal">Une équipe à compléter pour ce stage&nbsp;?</h2>
        <p className="reveal">
          Je serais ravie d'échanger sur vos projets et de vous montrer ce que je peux apporter. La réponse est rapide.
        </p>
        <a href="mailto:camille.rousseau@email.com" className="contact-mail reveal">{profile.email}</a>
        <div className="contact-links reveal">
          <Information/>
        </div>
      </div>
    </section>
 )
}

export default Contact;