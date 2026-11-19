import { Target, Telescope, Info } from 'lucide-react';
import Seo from '../components/Seo';
import { Reveal } from '../components/Motion';
import SectionHead from '../components/SectionHead';
import InfoCard from '../components/InfoCard';
import Cta from '../components/Cta';
import { LOGO } from '../components/Logo';
import { VALUES, DISCLAIMER } from '../data/site';

export default function About() {
  return (
    <>
      <Seo title="من نحن | مكتب المميز للخدمات" description="تعرّف على مكتب المميز للخدمات: رسالتنا ورؤيتنا وقيمنا وأسلوب عملنا في تقديم الخدمات الإدارية والعامة." />
      <section className="page-hero">
        <div className="container">
          <Reveal><span className="eyebrow">من نحن</span><h1>مكتب المميز للخدمات</h1>
            <p>مكتب خدمات إدارية وعامة يساعد العملاء في إنجاز معاملاتهم بوضوح وتواصل مباشر.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split split--wide">
          <Reveal className="prose">
            <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', marginBottom: '.8rem' }}>نبذة عن المكتب</h2>
            <p>يقدّم مكتب المميز للخدمات مجموعة من الخدمات المتعلقة بالمرور والمركبات، والزكاة والضريبة والفواتير، والعمل والوثائق، بأسلوب يعتمد على توضيح الشروط والمتطلبات قبل البدء.</p>
            <p>نؤمن أن العميل يستحق شرحاً واضحاً وتواصلاً مباشراً، ولذلك نجعل الاتصال والواتساب قناتين رئيسيتين للتواصل في كل مرحلة.</p>
          </Reveal>
          <Reveal delay={0.1} style={{ display: 'grid', placeItems: 'center' }}>
            <div className="hero__seal" style={{ width: 'min(260px, 70%)' }}><img src={LOGO.symbol} alt="رمز مكتب المميز للخدمات" /></div>
          </Reveal>
        </div>
      </section>

      <section className="section section--mint">
        <div className="container grid grid--2">
          <InfoCard icon="Eye" title="رؤيتنا" text="أن نكون الخيار الواضح والموثوق لعملائنا في إنجاز الخدمات الإدارية والعامة." />
          <InfoCard index={1} icon="BadgeCheck" title="رسالتنا" text="تقديم خدمات إدارية وعامة بخطوات واضحة، وتواصل مباشر، والتزام بالأنظمة والشروط المعمول بها." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="قيمنا" title="القيم التي نعمل بها" />
          <div className="grid grid--4">{VALUES.map((v, i) => <InfoCard key={v.title} index={i} {...v} />)}</div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split">
          <Reveal>
            <SectionHead eyebrow="أسلوبنا" title="نهجنا المهني" />
            <ul className="prose" style={{ display: 'grid', gap: '.7rem' }}>
              {['نستمع إلى حالة العميل ونحدد الخدمة المناسبة.', 'نوضح الشروط والمتطلبات بصراحة ودون وعود غير مؤكدة.', 'نتابع الإجراء وفق الأنظمة المعمول بها.', 'نُبقي العميل على اطلاع بما تم.'].map((t) => (
                <li key={t} style={{ display: 'flex', gap: '.6rem', color: 'var(--ink-soft)' }}><Target size={20} aria-hidden="true" style={{ color: 'var(--gold-deep)', flex: 'none', marginTop: 5 }} /> {t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}><div className="note"><Info aria-hidden="true" /><span>{DISCLAIMER}</span></div></Reveal>
        </div>
      </section>
      <Cta />
    </>
  );
}
