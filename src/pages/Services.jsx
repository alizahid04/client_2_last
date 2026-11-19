import { Info } from 'lucide-react';
import Seo from '../components/Seo';
import { Reveal } from '../components/Motion';
import InfoCard from '../components/InfoCard';
import Icon from '../components/Icon';
import Cta from '../components/Cta';
import { SERVICE_CATEGORIES, DISCLAIMER } from '../data/site';

export default function Services() {
  return (
    <>
      <Seo title="خدماتنا | مكتب المميز للخدمات" description="خدمات المرور والمركبات، الزكاة والضريبة والفواتير، العمل والوثائق: متابعة المخالفات، رخص القيادة، نقل الملكية، الفحص الدوري، شهادة الزكاة، رخص العمل وغيرها." />
      <section className="page-hero">
        <div className="container">
          <Reveal><span className="eyebrow">خدماتنا</span><h1>الخدمات التي نقدّمها</h1>
            <p>خدمات مصنّفة في ثلاثة مجالات. تُنفَّذ كل خدمة وفق الشروط المعمول بها.</p></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {SERVICE_CATEGORIES.map((c) => (
            <div className="category" key={c.id} aria-labelledby={`cat-${c.id}`}>
              <Reveal className="category__head">
                <div className="icon-badge"><Icon name={c.icon} /></div>
                <div><h2 id={`cat-${c.id}`}>{c.title}</h2><p>{c.intro}</p></div>
              </Reveal>
              <div className="grid grid--2">
                {c.services.map((s, i) => <InfoCard key={s.title} index={i} {...s} />)}
              </div>
            </div>
          ))}
          <Reveal><div className="note"><Info aria-hidden="true" /><span>{DISCLAIMER}</span></div></Reveal>
        </div>
      </section>
      <Cta title="للاستفسار عن خدمة محددة" text="أخبرنا بالخدمة المطلوبة وسنوضح لك الشروط والمتطلبات." />
    </>
  );
}
