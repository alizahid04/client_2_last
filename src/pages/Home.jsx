import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, BadgeCheck, FileCheck2, Car, ReceiptText } from 'lucide-react';
import Seo from '../components/Seo';
import { Reveal } from '../components/Motion';
import { CallButton, WhatsAppButton } from '../components/Buttons';
import SectionHead from '../components/SectionHead';
import InfoCard from '../components/InfoCard';
import Gallery from '../components/Gallery';
import SocialLinks from '../components/SocialLinks';
import Cta from '../components/Cta';
import { LOGO } from '../components/Logo';
import { FEATURED_SERVICES, WHY_US, PROCESS, SERVICE_CATEGORIES, DISCLAIMER } from '../data/site';
import { Info } from 'lucide-react';

export default function Home() {
  const reduce = useReducedMotion();
  const float = (d) => reduce ? {} : { animate: { y: [0, -6, 0] }, transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: d } };

  return (
    <>
      <Seo
        title="مكتب المميز للخدمات | خدمات إدارية وخدمات عامة"
        description="مكتب المميز للخدمات: متابعة المخالفات المرورية، رخص القيادة، نقل ملكية المركبات، الفحص الدوري، شهادة الزكاة والضريبة والفواتير. تواصل معنا عبر الجوال أو واتساب."
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div>
            <Reveal><span className="hero__badge"><BadgeCheck aria-hidden="true" /> خدمات إدارية وخدمات عامة</span></Reveal>
            <Reveal delay={0.08}><h1 id="hero-title">مكتب المميز للخدمات<br /><span>إنجاز معاملاتك بوضوح وعناية</span></h1></Reveal>
            <Reveal delay={0.16}><p className="lead">نقدّم مجموعة من الخدمات المرورية والإدارية والضريبية والوثائق، مع تواصل مباشر وشرح واضح للمتطلبات والشروط.</p></Reveal>
            <Reveal delay={0.24}>
              <div className="btn-row">
                <WhatsAppButton className="btn btn--whatsapp">تواصل عبر واتساب</WhatsAppButton>
                <CallButton className="btn btn--ghost">اتصل الآن</CallButton>
              </div>
            </Reveal>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <motion.div className="hero__seal" initial={reduce ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <img src={LOGO.symbol} alt="" />
            </motion.div>
            <motion.div className="hero__chip hero__chip--1" {...float(0)}><Car /> المرور والمركبات</motion.div>
            <motion.div className="hero__chip hero__chip--2" {...float(1)}><FileCheck2 /> الزكاة والضريبة</motion.div>
            <motion.div className="hero__chip hero__chip--3" {...float(2)}><ReceiptText /> الفواتير والوثائق</motion.div>
          </div>
        </div>
      </section>

      {/* Complete gallery immediately after the hero */}
      <section className="section section--white" aria-labelledby="home-gallery-title">
        <div className="container">
          <SectionHead eyebrow="معرض الصور" title={<span id="home-gallery-title">صور من المكتب</span>} text="جميع الصور المعروضة هي صور المكتب." />
          <Gallery />
        </div>
      </section>

      <section className="section" aria-labelledby="intro-title">
        <div className="container split split--wide">
          <Reveal className="prose">
            <span className="eyebrow">من نحن</span>
            <h2 id="intro-title" style={{ fontSize: 'clamp(1.5rem,3.2vw,2.15rem)', margin: '.4rem 0 .8rem' }}>مكتب خدمات يضع وضوح الإجراءات أولاً</h2>
            <p>مكتب المميز للخدمات مكتب خدمات إدارية وعامة، يساعد العملاء في متابعة معاملاتهم وإنجاز إجراءاتهم المتعلقة بالمرور والمركبات والزكاة والضريبة والفواتير والوثائق.</p>
            <p>نحرص على توضيح الشروط والمتطلبات لكل خدمة قبل البدء، والتواصل المباشر مع العميل في كل خطوة.</p>
            <div style={{ marginTop: '1.3rem' }}><Link to="/about" className="btn btn--ghost">تعرّف علينا <ArrowLeft aria-hidden="true" /></Link></div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card">
              <h3 style={{ marginBottom: '.8rem' }}>من أبرز خدماتنا</h3>
              <div className="service-chip-list">
                {FEATURED_SERVICES.map((s) => <span key={s} className="pill"><BadgeCheck aria-hidden="true" /> {s}</span>)}
              </div>
              <div style={{ marginTop: '1.2rem' }}><Link to="/services" className="btn btn--primary btn--sm">عرض جميع الخدمات <ArrowLeft aria-hidden="true" /></Link></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--mint" aria-labelledby="cats-title">
        <div className="container">
          <SectionHead eyebrow="خدماتنا" title={<span id="cats-title">مجالات الخدمة</span>} text="ثلاثة مجالات رئيسية تضم الخدمات المتاحة لدينا." />
          <div className="grid grid--3">
            {SERVICE_CATEGORIES.map((c, i) => (
              <InfoCard key={c.id} index={i} icon={c.icon} title={c.title} text={`${c.intro} (${c.services.length} خدمات)`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <SectionHead eyebrow="لماذا نحن" title={<span id="why-title">لماذا تختار مكتب المميز؟</span>} />
          <div className="grid grid--4">{WHY_US.map((w, i) => <InfoCard key={w.title} index={i} {...w} />)}</div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="process-title">
        <div className="container">
          <SectionHead eyebrow="آلية العمل" title={<span id="process-title">كيف نعمل معك</span>} text="خطوات بسيطة من التواصل حتى إبلاغك بالنتيجة." />
          <div className="grid grid--4 steps">{PROCESS.map((p, i) => <InfoCard key={p.title} index={i} number={i + 1} {...p} />)}</div>
        </div>
      </section>

      <section className="section" aria-labelledby="social-title">
        <div className="container">
          <SectionHead eyebrow="تابعنا" title={<span id="social-title">تواصل معنا عبر منصاتنا</span>} />
          <Reveal><SocialLinks /></Reveal>
          <Reveal delay={0.1}><div className="note" style={{ marginTop: '1.6rem' }}><Info aria-hidden="true" /><span>{DISCLAIMER}</span></div></Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
