import About from './components/About';
import BackToTopButton from "./components/container/BackToTopButton"
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/container/SocialLinks';
import NavBar from './components/container/NavBar';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
      return (
        <HelmetProvider>
        <div>
          <Helmet>

            <title>Baciu Nicolae-Darius</title>
            <meta name="description" 
                  content="Welcome to Darius's personal portfolio. Explore a collection of portfolio's work.
                  Discover Darius's passion for web development" 
                  data-rh="true" />

            <meta name="author" content="Baciu Nicolae-Darius" />
            <meta property="og:title" content="Baciu Nicolae-Darius" key="ogtitle"/> 
            <meta property="og:description" content="This is my personal portfolio page" />
            <meta property="og:image" content="./assets/heroImage.jpg" />
            <meta property="og:url" content="https://www.dariusbaciu.com/" />
            <meta name="twitter:title" content="Baciu Nicolae-Darius" />
            <meta name="twitter:description" content="Web Developer 👨🏻‍💻 | Passionate about tennis 🎾 Formula 1 🏁 Travel 🌍" />
            <meta name="twitter:image" content="https://twitter.com/DariusDarius01/photo" />
      
          </Helmet>
      
          <div>
              <NavBar />
              <Home />
              <About />
              <Portfolio />
              <Experience />
              <Contact />
              <Footer />

              <BackToTopButton />
              <SocialLinks />
            </div>
      </div>

        </HelmetProvider>
      );
    }

export default App