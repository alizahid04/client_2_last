import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { WhatsAppButton } from './components/Buttons';
import { WhatsAppIcon } from './components/BrandIcons';
import { SITE } from './data/site';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Page({ children }) {
  return (
    <motion.main
      id="main"
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">انتقل إلى المحتوى</a>
      <ScrollTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/services" element={<Page><Services /></Page>} />
          <Route path="/gallery" element={<Page><GalleryPage /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="*" element={<Page><Home /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <a className="fab" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب"><WhatsAppIcon /></a>
    </MotionConfig>
  );
}
