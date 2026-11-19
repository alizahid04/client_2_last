import { useState } from 'react';
import { MapPin, Navigation, Phone, Send } from 'lucide-react';
import Seo from '../components/Seo';
import { Reveal } from '../components/Motion';
import { CallButton, WhatsAppButton } from '../components/Buttons';
import SocialLinks from '../components/SocialLinks';
import { SITE } from '../data/site';
import { WhatsAppIcon } from '../components/BrandIcons';

const toLatin = (s) => s.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));

function validate({ name, phone, message }) {
  const e = {};
  if (name.trim().length < 2) e.name = 'يرجى إدخال الاسم (حرفان على الأقل).';
  const digits = toLatin(phone).replace(/[\s\-()]/g, '');
  if (!/^\+?\d{9,15}$/.test(digits)) e.phone = 'يرجى إدخال رقم جوال صحيح (9 إلى 15 رقماً).';
  if (message.trim().length < 5) e.message = 'يرجى كتابة رسالتك (5 أحرف على الأقل).';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [prepared, setPrepared] = useState(null);

  const set = (k) => (ev) => {
    setValues((v) => ({ ...v, [k]: ev.target.value }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) { setPrepared(null); return; }
    const text = `السلام عليكم، أنا ${values.name.trim()}\nرقم الجوال: ${toLatin(values.phone).trim()}\n\n${values.message.trim()}`;
    const url = `${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    setPrepared(url);
    window.open(url, '_blank', 'noopener');
  };

  const field = (k, label, props = {}, Tag = 'input') => (
    <div className={`field${errors[k] ? ' has-error' : ''}`}>
      <label htmlFor={`f-${k}`}>{label}</label>
      <Tag id={`f-${k}`} name={k} value={values[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined} {...props} />
      {errors[k] && <p className="err" id={`e-${k}`} role="alert">{errors[k]}</p>}
    </div>
  );

  return (
    <>
      <Seo title="تواصل معنا | مكتب المميز للخدمات" description="تواصل مع مكتب المميز للخدمات عبر الجوال +966 58 157 9203 أو واتساب. الموقع على خرائط جوجل ونموذج تواصل." />
      <section className="page-hero">
        <div className="container">
          <Reveal><span className="eyebrow">تواصل معنا</span><h1>يسعدنا تواصلك</h1>
            <p>اتصل بنا أو راسلنا عبر واتساب، أو زرنا عبر الموقع على الخريطة.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="contact-list">
              <div className="contact-row"><div className="icon-badge"><Phone /></div><div><small>الجوال</small><strong><a href={`tel:${SITE.phone}`} className="ltr">{SITE.phoneDisplay}</a></strong></div></div>
              <div className="contact-row"><div className="icon-badge"><WhatsAppIcon /></div><div><small>واتساب</small><strong><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">مراسلتنا عبر واتساب</a></strong></div></div>
              <div className="contact-row"><div className="icon-badge"><MapPin /></div><div><small>الموقع</small><strong><a href={SITE.maps} target="_blank" rel="noopener noreferrer">فتح الموقع على خرائط جوجل</a></strong></div></div>
            </div>
            <div className="btn-row" style={{ marginTop: '1.1rem' }}>
              <CallButton className="btn btn--primary">اتصل الآن</CallButton>
              <WhatsAppButton />
              <a className="btn btn--ghost" href={SITE.directions} target="_blank" rel="noopener noreferrer"><Navigation aria-hidden="true" /> الاتجاهات</a>
            </div>
            <div style={{ marginTop: '1.4rem' }}><SocialLinks /></div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="form" onSubmit={onSubmit} noValidate aria-label="نموذج التواصل">
              {field('name', 'الاسم', { type: 'text', autoComplete: 'name' })}
              {field('phone', 'رقم الجوال', { type: 'tel', autoComplete: 'tel', inputMode: 'tel', dir: 'ltr', style: { textAlign: 'right' }, placeholder: '05xxxxxxxx' })}
              {field('message', 'الرسالة', { rows: 5 }, 'textarea')}
              <button type="submit" className="btn btn--primary"><Send aria-hidden="true" /> تجهيز الرسالة عبر واتساب</button>
              <p style={{ fontSize: '.84rem', color: 'var(--ink-soft)' }}>هذا الموقع لا يحفظ الرسائل ولا يرسلها بنفسه. عند الضغط على الزر تُفتح محادثة واتساب برسالة جاهزة، ولا تصلنا الرسالة إلا بعد أن تضغط «إرسال» داخل واتساب.</p>
              {prepared && (
                <div className="form-status" role="status">
                  تم تجهيز رسالتك في واتساب ولم تُرسل بعد. إن لم تُفتح المحادثة تلقائياً، <a href={prepared} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: 600 }}>اضغط هنا لفتحها</a>.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section section--white" aria-label="الموقع على الخريطة">
        <div className="container">
          <Reveal>
            <iframe className="map-frame" title="موقع مكتب المميز للخدمات على خرائط جوجل" src={SITE.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <div className="btn-row" style={{ marginTop: '1rem' }}>
              <a className="btn btn--primary" href={SITE.directions} target="_blank" rel="noopener noreferrer"><Navigation aria-hidden="true" /> احصل على الاتجاهات</a>
              <a className="btn btn--ghost" href={SITE.maps} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" /> فتح في خرائط جوجل</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
