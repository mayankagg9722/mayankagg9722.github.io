import React from 'react';
import NavbarPro from './components/NavbarPro';
import HeroPro from './components/HeroPro';
import AboutPro from './components/AboutPro';
import SkillsPro from './components/SkillsPro';
import ProjectsPro from './components/ProjectsPro';
import ExperiencePro from './components/ExperiencePro';
import AwardsPro from './components/AwardsPro';
import ContactPro from './components/ContactPro';
import FooterPro from './components/FooterPro';
import FloatingTopmate from './components/FloatingTopmate';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <NavbarPro />
      <main role="main" aria-label="Main content">
        <HeroPro />
        <AboutPro />
        <ExperiencePro />
        <ProjectsPro />
        <SkillsPro />
        <AwardsPro />
        <ContactPro />
      </main>
      <FooterPro />
      <FloatingTopmate />
    </div>
  );
}

export default App;
