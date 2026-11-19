import Seo from '../components/Seo';
import { Reveal } from '../components/Motion';
import Gallery from '../components/Gallery';
import Cta from '../components/Cta';

export default function GalleryPage() {
  return (
    <>
      <Seo title="معرض الصور | مكتب المميز للخدمات" description="معرض صور مكتب المميز للخدمات. تصفّح جميع الصور وكبّرها بسهولة." />
      <section className="page-hero">
        <div className="container">
          <Reveal><span className="eyebrow">معرض الصور</span><h1>صور المكتب</h1>
            <p>اضغط على أي صورة لعرضها بحجم أكبر، وتنقّل بين الصور بالأسهم أو بالسحب.</p></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container"><Gallery showCount /></div>
      </section>
      <Cta />
    </>
  );
}
