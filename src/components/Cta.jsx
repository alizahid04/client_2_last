import { Reveal } from './Motion';
import { CallButton, WhatsAppButton } from './Buttons';

export default function Cta({ title = 'هل تحتاج إلى إحدى خدماتنا؟', text = 'تواصل معنا الآن وسنوضح لك المتطلبات والخطوات بحسب حالتك.' }) {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <Reveal className="cta">
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
          <div className="btn-row">
            <WhatsAppButton className="btn btn--gold">تواصل عبر واتساب</WhatsAppButton>
            <CallButton className="btn btn--outline-light">اتصل بنا</CallButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
