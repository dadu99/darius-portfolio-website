import About from './components/About';
import BackToTopButton from './components/BackToTopButton';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';

function App() {
      return (
        <>
        <NavBar />
        <div>
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
          <BackToTopButton />

        </div>
        <SocialLinks />
        </>
      );
    }

export default App
