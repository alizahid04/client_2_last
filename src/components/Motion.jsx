import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

function useIsMobile() {
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 700px)').matches);
  useEffect(() => {
    const q = window.matchMedia('(max-width: 700px)');
    const h = () => setM(q.matches);
    q.addEventListener('change', h);
    return () => q.removeEventListener('change', h);
  }, []);
  return m;
}

/** Scroll-triggered reveal. Lighter on mobile, disabled with reduced motion. */
export function Reveal({ children, delay = 0, as = 'div', className, ...rest }) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const Tag = motion[as] || motion.div;
  if (reduce) return <Tag className={className} {...rest}>{children}</Tag>;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: mobile ? 12 : 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: mobile ? 0.35 : 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Stagger delay helper: wraps around so large lists never wait long. */
export const stagger = (i, step = 0.06, wrap = 6) => (i % wrap) * step;

export const tap = { whileTap: { scale: 0.97 } };
