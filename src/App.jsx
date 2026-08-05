import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased selection:bg-neutral-900 selection:text-neutral-50">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
