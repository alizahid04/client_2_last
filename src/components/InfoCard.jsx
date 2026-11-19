import { Reveal, stagger } from './Motion';
import Icon from './Icon';

export default function InfoCard({ icon, title, text, index = 0, number }) {
  return (
    <Reveal delay={stagger(index)} className={number ? 'step' : undefined} style={{ height: '100%' }}>
      <div className="card" style={{ position: 'relative' }}>
        {number && <span className="step__num" aria-hidden="true">{number}</span>}
        <div className="icon-badge"><Icon name={icon} /></div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Reveal>
  );
}
