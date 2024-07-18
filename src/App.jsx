import {
  Hero,
  Skills,
  Service,
  Projects,
  Testimonials,
  HireMe,
  Contact,
  Footer,
  Navbar,
} from './components';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      {/* <Service /> */}
      <Testimonials />
      <HireMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
