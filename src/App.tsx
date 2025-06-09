import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Career from './components/Career';
import Travels from './components/Travels';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Daiana | Portfólio";
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section > div').forEach(section => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(section);
    });
    
    return () => {
      document.querySelectorAll('section > div').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Education />
      <Career />
      <Travels />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;