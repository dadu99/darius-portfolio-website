import About from '../components/About';
import BackToTopButton from "../components/container/BackToTopButton"
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import SocialLinks from '../components/container/SocialLinks';
import NavBar from '../components/container/NavBar';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
        <HelmetProvider>
        <div>
         <Helmet>

            <title>Darius Baciu - Web Developer</title>
            <meta name="description" 
                content="Welcome to Darius's personal portfolio. Explore a collection of portfolio's work. Discover Darius's passion for web development" 
                data-rh="true" />
            <meta name="author" content="Darius Baciu" />
            <meta name="keywords" content="Darius Baciu, darius baciu, dariusbaciu" />
            <meta property="og:title" content="Darius Baciu" key="ogtitle"/> 
            <meta property="og:description" content="Welcome to Darius's personal portfolio. Explore a collection of portfolio's work" />
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
    </>
  )
}
export default HomePage;