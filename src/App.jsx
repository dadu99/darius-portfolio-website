import About from './components/About';
import BackToTopButton from "./components/container/BackToTopButton"
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/container/SocialLinks';
import NavBar from './components/container/NavBar';
import { Helmet } from 'react-helmet';

function App() {
      return (
        <div>
          <Helmet>
            <title>Baciu Nicolae-Darius</title>
            <meta name="description" content="This is my personal portfolio page" />
            <meta name="keywords" content="darius, darius baciu, dadu, react, meta tags, seo" />
            <meta name="author" content="Baciu Nicolae-Darius" />
            <meta property="og:title" content="Baciu Nicolae-Darius" key="ogtitle"/> 
            <meta property="og:description" content="This is my personal portfolio page" />
            <meta property="og:image" content="https://example.com/image.jpg" />
            <meta property="og:url" content="https://example.com/my-page" />
            <meta name="twitter:title" content="Baciu Nicolae-Darius" />
            <meta name="twitter:description" content="Full Stack Developer" />
            <meta name="twitter:image" content="https://twitter.com/DariusDarius01/photo" />
            <meta name="twitter:card" content="summary_large_image" />
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
      );
    }

export default App