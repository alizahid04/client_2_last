import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { LOGO } from './Logo';
import SocialLinks from './SocialLinks';
import { NAV_LINKS, SITE, DISCLAIMER } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <img className="footer-logo" src={LOGO.light} alt="شعار مكتب المميز للخدمات" />
          <p>{SITE.tagline}.</p>
        </div>
        <div>
          <h4>روابط سريعة</h4>
          <ul>{NAV_LINKS.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4>تواصل معنا</h4>
          <ul style={{ marginBottom: '1rem' }}>
            <li><a href={`tel:${SITE.phone}`} style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}><Phone size={16} aria-hidden="true" /> <span className="ltr">{SITE.phoneDisplay}</span></a></li>
            <li><a href={SITE.maps} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}><MapPin size={16} aria-hidden="true" /> الموقع على خرائط جوجل</a></li>
          </ul>
          <SocialLinks />
        </div>
      </div>
      <div className="footer__legal">
        <div className="container">
          <p>{DISCLAIMER}</p>
          <p>© {new Date().getFullYear()} {SITE.name}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
