import './App.css';
// import ScrollTrigger  from 'react-scroll-trigger';
import { Element } from 'react-scroll';
import About from './components/about';
import Home from './components/home';
import Navbar from './components/navbar';
import Services from './components/services';
import Contact from './components/contact';
import Footers from './components/footer';
import ScrollToTopArrow from './components/scrolltoparrow';


function App() {

 
  return (
    <div>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footers />
      <ScrollToTopArrow />
    </div>

  );
}

export default App;
