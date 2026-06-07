import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
           <a href="#home" className="text-xl font-serif font-bold text-gray-900 tracking-tight hover:text-indigo-600 transition-colors cursor-pointer">Eren Ari</a>
           <div className="hidden md:flex gap-6 lg:gap-8 text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
             <a href="#skills" className="hover:text-gray-900 transition-colors cursor-pointer">Proficiency</a>
             <a href="#projects" className="hover:text-gray-900 transition-colors cursor-pointer">Projects</a>
             <a href="#writing" className="hover:text-gray-900 transition-colors cursor-pointer">Publications</a>
             <a href="#certificates" className="hover:text-gray-900 transition-colors cursor-pointer">Certificates</a>
             <a href="#contact" className="hover:text-gray-900 transition-colors cursor-pointer">Contact</a>
           </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Writing />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;