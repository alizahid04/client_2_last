import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronLeft } from 'lucide-react';
import Logo from './Logo';
import { CallButton, WhatsAppButton } from './Buttons';
import { NAV_LINKS } from '../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="التنقل الرئيسي">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}>
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && <motion.span layoutId="nav-indicator" className="nav__indicator" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="nav__cta">
          <CallButton className="btn btn--ghost btn--sm">اتصال</CallButton>
          <WhatsAppButton className="btn btn--whatsapp btn--sm" />
        </div>
        <button
          className="nav__toggle" type="button" aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu" className="mobile-menu"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <nav className="container mobile-menu__inner" aria-label="قائمة الجوال">
              {NAV_LINKS.map((l, i) => (
                <motion.div key={l.to} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                  <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `m-link${isActive ? ' is-active' : ''}`}>
                    {l.label} <ChevronLeft size={18} aria-hidden="true" />
                  </NavLink>
                </motion.div>
              ))}
              <div className="btn-row">
                <CallButton className="btn btn--ghost">اتصال</CallButton>
                <WhatsAppButton />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
