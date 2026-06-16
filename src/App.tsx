import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Timelines from './components/Timelines/Timelines';

function App() {
   // Reveal au scroll
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      document.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transitionDelay = Math.min(i, 6) * 40 + 'ms';
        io.observe(el);
      });
  return (
    <>
    <Header />
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Timelines/>
    <Contact/>
    <Footer/>
    </>
)
}

export default App;
