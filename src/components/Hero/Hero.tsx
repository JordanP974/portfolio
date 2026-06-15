import { NavLink } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <article className="hero wrap" id="top">
      <h1 className="reveal">
        Développeur web full-stack<em> en quête de nouvelles aventures numériques.</em>
      </h1>

      <p className="hero-sub reveal">
        Étudiant en développement web, je cherche un <strong>stage de 7 semaines à partir du 22 juin 2026</strong>. Ce
        que j'aime : transformer une maquette en un produit qui fonctionne vraiment, jusque dans les détails qu'on ne
        voit pas.
      </p>

      <div className="cta-row reveal">
        <NavLink to={'/#'} className={'btn btn-primary'}>Voir mes projets</NavLink>
        <NavLink to={'/#'} className={'btn btn-ghost'}>Me Contacter</NavLink>
        <NavLink to={'/#'} className={'btn btn-ghost'}>Télécharger le CV </NavLink>
      </div>
      <div className="hero-meta reveal">
        <span>
          <b>Basée à</b> Epinal, FR
        </span>

        <span>
          <b>Formation</b> Niveau 6, Concepteur Développeur Web et Application
        </span>
      </div>
    </article>
  );
}

export default Hero;
