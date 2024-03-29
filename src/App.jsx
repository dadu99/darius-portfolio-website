import About from './components/About';
import BackToTopButton from './components/BackToTopButton';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';

function App() {
      return (
        <>
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />

          <BackToTopButton />
          <SocialLinks />
        </>
      );
    }

export default App
