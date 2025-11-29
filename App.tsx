import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Metrics from './components/Metrics';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Products from './components/Products';
import Careers from './components/Careers';
import CTA from './components/CTA';
import Footer from './components/Footer';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home Page Component (The full Landing Page)
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <Metrics />
      <Services />
      <CTA />
    </>
  );
};

// Main App Component with Layout and Routes
const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground font-mono">
      <ScrollToTop />
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/portfolio" 
              element={
                <div className="pt-32 min-h-screen">
                  <Portfolio />
                </div>
              } 
            />
            <Route 
              path="/products" 
              element={
                <div className="pt-32 min-h-screen">
                  <Products />
                </div>
              } 
            />
            <Route 
              path="/careers" 
              element={
                <div className="pt-32 min-h-screen">
                  <Careers />
                </div>
              } 
            />
            {/* Catch-all route to redirect to Home if no match is found */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;