# مكتب المميز للخدمات — الموقع الرسمي

موقع عربي (RTL) مبني بـ React + Vite + React Router + Framer Motion + Lucide، بخط IBM Plex Sans Arabic (مستضاف محلياً عبر Fontsource) وCSS مخصص.

## التشغيل
```bash
npm install
npm run dev      # للتطوير
npm run build    # بناء نسخة الإنتاج في dist/
npm run preview  # معاينة نسخة الإنتاج
```

## إضافة الصور
1. ضع الصور في `src/assets/images/` (يمكن استخدام مجلدات فرعية). الصيغ المدعومة: JPG, JPEG, PNG, WEBP, AVIF.
2. تُكتشف كل الصورة تلقائياً عبر `import.meta.glob` في `src/utils/images.js`، وتظهر كاملة في الصفحة الرئيسية (بعد الهيرو مباشرة) وفي صفحة المعرض، دون حد للعدد ودون أسماء مكتوبة في الكود.
3. الترتيب طبيعي حسب اسم الملف (`1, 2, 10` وليس `1, 10, 2`)، لذا سمِّ الملفات برقم للتحكم بالترتيب.
4. في وضع التطوير: إن لم تظهر صورة جديدة أعد تشغيل `npm run dev`.
5. للموقع المنشور: يجب تنفيذ `npm run build` ثم إعادة رفع محتوى `dist/`، لأن الصور تُضمَّن وقت البناء.

## الشعار
في `src/assets/logo/`: `logo-horizontal.svg/png`، `logo-horizontal-light.svg` (للخلفيات الداكنة)، `logo-symbol.svg/png`، `favicon.svg` وأحجام PNG. النص العربي محوَّل إلى مسارات فلا يعتمد على الخطوط.

## نموذج التواصل
لا يوجد خادم لاستقبال الرسائل. عند الإرسال يتحقق النموذج من الحقول ثم يفتح واتساب برسالة جاهزة، ولا تصل الرسالة إلا بعد ضغط «إرسال» داخل واتساب. وللربط بخدمة بريد/Backend عدّل `onSubmit` في `src/pages/Contact.jsx`.

## النشر
الموقع تطبيق صفحة واحدة بمسارات `BrowserRouter`؛ اضبط الخادم لإعادة توجيه كل المسارات إلى `index.html` (مثل `_redirects` في Netlify أو rewrites في Vercel).

## تعديل المحتوى
الخدمات وبيانات التواصل والنصوص في `src/data/site.js`.

## الهيكل
`src/{assets/images,assets/logo,components,pages,data,styles,utils}`, `src/App.jsx`, `src/main.jsx`, `index.html`.
