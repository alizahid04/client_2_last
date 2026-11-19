import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { getGalleryImages } from '../utils/images';
import { LOGO } from './Logo';
import { Reveal, stagger } from './Motion';

function Thumb({ img, index, onOpen }) {
  const [failed, setFailed] = useState(false);
  return (
    <Reveal delay={stagger(index, 0.05, 8)}>
      <button type="button" className="gallery-item" onClick={() => onOpen(index)} aria-label={`عرض الصورة ${index + 1} بحجم كبير`}>
        {failed ? (
          <span className="gallery-fallback"><img src={LOGO.symbol} alt="" /></span>
        ) : (
          <img src={img.src} alt={img.alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
        )}
        <span className="gallery-item__veil"><ZoomIn aria-hidden="true" /></span>
      </button>
    </Reveal>
  );
}

function Lightbox({ images, index, onClose, onNav }) {
  const closeRef = useRef(null);
  const lastFocus = useRef(null);
  const touchX = useRef(null);
  const img = images[index];

  useEffect(() => {
    lastFocus.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      lastFocus.current?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      // RTL: the right arrow goes to the previous image, the left arrow to the next
      else if (e.key === 'ArrowLeft') onNav(1);
      else if (e.key === 'ArrowRight') onNav(-1);
      else if (e.key === 'Tab') {
        const f = document.querySelectorAll('.lightbox button');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onNav]);

  // preload neighbours
  useEffect(() => {
    [index - 1, index + 1].forEach((i) => {
      if (images[i]) { const p = new Image(); p.src = images[i].src; }
    });
  }, [index, images]);

  return (
    <motion.div
      className="lightbox" role="dialog" aria-modal="true" aria-label="معرض الصور"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
      onClick={onClose}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) onNav(dx < 0 ? 1 : -1);
      }}
    >
      <button ref={closeRef} type="button" className="lb-btn lb-close" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="إغلاق"><X /></button>
      {images.length > 1 && (
        <>
          <button type="button" className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); onNav(-1); }} aria-label="الصورة السابقة"><ChevronRight /></button>
          <button type="button" className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); onNav(1); }} aria-label="الصورة التالية"><ChevronLeft /></button>
        </>
      )}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={img.id} className="lightbox__stage"
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }} onClick={(e) => e.stopPropagation()}
        >
          <img src={img.src} alt={img.alt} />
        </motion.div>
      </AnimatePresence>
      <div className="lb-count" aria-live="polite">{index + 1} / {images.length}</div>
    </motion.div>
  );
}

export default function Gallery({ showCount = false }) {
  const images = getGalleryImages();
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);
  const nav = useCallback(
    (d) => setActive((i) => (i == null ? i : (i + d + images.length) % images.length)),
    [images.length]
  );

  if (!images.length) {
    return (
      <div className="empty-state">
        <img src={LOGO.symbol} alt="" />
        <p>سيتم عرض صور المكتب هنا قريباً.</p>
      </div>
    );
  }

  return (
    <>
      {showCount && <p className="gallery-count">عدد الصور: {images.length}</p>}
      <div className="gallery-grid">
        {images.map((img, i) => <Thumb key={img.id} img={img} index={i} onOpen={setActive} />)}
      </div>
      <AnimatePresence>
        {active != null && <Lightbox images={images} index={active} onClose={close} onNav={nav} />}
      </AnimatePresence>
    </>
  );
}
