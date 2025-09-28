import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';

import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    // Initialize the AOS (Animate On Scroll) library
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
    // Set the document title
    document.title = 'Horizon IELTS';
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop>
          <div className="font-sans">
            <Navbar />
            <Routes>
              {/* Main route for the single-page layout */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <About />
                    <Classes />
                    <Instructors />
                    <Testimonials />
                    <FAQ />
                    <Contact />
                  </>
                }
              />
            </Routes>
            <Footer />
          </div>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
