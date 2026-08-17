import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import PortfolioSection from './components/PortfolioSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import UavSection from './components/UavSection.jsx';
import HireMeForm from './components/HireMeSection.jsx';
import SourceCodeSection from './components/SourceCodeSection.jsx';
import Footer from './components/Footer.jsx';

// Main Portfolio Page Layout
const MainPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <UavSection />
    <ServicesSection />
    <PortfolioSection />
    <SourceCodeSection/>
    <ContactSection />
    <Footer />
  </motion.div>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Routes>
        {/* Main Portfolio Route */}
        <Route path="/" element={<MainPage />} />

        {/* Dedicated Hire Me Page Route */}
        <Route path="/hire-me" element={<HireMeForm />} />
      </Routes>
    </div>
  );
}

export default App;