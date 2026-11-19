import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { SITE } from '../data/site';
import { WhatsAppIcon } from './BrandIcons';

export function CallButton({ className = 'btn btn--ghost', children = 'اتصل الآن' }) {
  return (
    <motion.a whileTap={{ scale: 0.97 }} whileHover={{ y: -2 }} className={className} href={`tel:${SITE.phone}`}>
      <Phone aria-hidden="true" /> {children}
    </motion.a>
  );
}

export function WhatsAppButton({ className = 'btn btn--whatsapp', children = 'واتساب' }) {
  return (
    <motion.a
      whileTap={{ scale: 0.97 }} whileHover={{ y: -2 }}
      className={className} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
    >
      <WhatsAppIcon /> {children}
    </motion.a>
  );
}
