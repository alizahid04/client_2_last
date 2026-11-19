export const SITE = {
  name: 'مكتب المميز للخدمات',
  tagline: 'خدمات إدارية وخدمات عامة بخطوات واضحة وتواصل مباشر',
  phone: '+966581579203',
  phoneDisplay: '+966 58 157 9203',
  whatsapp: 'https://wa.me/966581579203',
  whatsappChannel: 'https://whatsapp.com/channel/0029Vb66PeJ1yT26SQoRma1Z',
  tiktok: 'https://vm.tiktok.com/ZN9PecntHXCaH-dSsEP/',
  maps: 'https://www.google.com/maps?q=17.5671727,44.225282299999996&z=17',
  mapsEmbed: 'https://www.google.com/maps?q=17.5671727,44.225282299999996&z=17&output=embed',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=17.5671727,44.225282299999996',
};

export const NAV_LINKS = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'من نحن' },
  { to: '/services', label: 'خدماتنا' },
  { to: '/gallery', label: 'معرض الصور' },
  { to: '/contact', label: 'تواصل معنا' },
];

export const DISCLAIMER =
  'مكتب المميز للخدمات ليس جهة حكومية ولا يمثّل أي جهة رسمية. تُقدَّم الخدمات وفق الأنظمة والشروط المعمول بها، وقد تختلف المتطلبات من حالة إلى أخرى، ولا يُضمن أي نتيجة أو أهلية قبل التحقق من الحالة.';

export const SERVICE_CATEGORIES = [
  {
    id: 'traffic',
    title: 'المرور والمركبات',
    intro: 'خدمات تتعلق بالمخالفات والرخص والمركبات.',
    icon: 'Car',
    services: [
      { title: 'متابعة المخالفات المرورية وتصفيرها', text: 'متابعة المخالفات المرورية وتصفيرها وفق الشروط المعتمدة.', icon: 'ReceiptText' },
      { title: 'نقل ملكية المركبات', text: 'المساعدة في إجراءات نقل ملكية المركبات.', icon: 'ArrowLeftRight' },
      { title: 'إصدار وتجديد رخص القيادة', text: 'إصدار وتجديد رخص القيادة للرجال والنساء.', icon: 'IdCard' },
      { title: 'الفحص الدوري للمركبات', text: 'الفحص الدوري للمركبات دون الحاجة إلى الحضور.', icon: 'ClipboardCheck' },
    ],
  },
  {
    id: 'tax',
    title: 'الزكاة والضريبة والفواتير',
    intro: 'خدمات الزكاة وضريبة القيمة المضافة وإصدار الفواتير.',
    icon: 'Landmark',
    services: [
      { title: 'الاستعلام عن أرصدة الزكاة', text: 'الاستعلام عن أرصدة الزكاة وطباعة شهادة هيئة الزكاة والضريبة والجمارك.', icon: 'FileBadge' },
      { title: 'تصفير ضريبة القيمة المضافة', text: 'المساعدة في تصفير ضريبة القيمة المضافة.', icon: 'Percent' },
      { title: 'فواتير المشتريات', text: 'إصدار فواتير المشتريات لمختلف الأنشطة.', icon: 'ShoppingCart' },
      { title: 'الفواتير بمراحل مختلفة', text: 'إصدار الفواتير بمراحل مختلفة وفق المبلغ والتاريخ والوقت المحدد.', icon: 'CalendarClock' },
    ],
  },
  {
    id: 'work',
    title: 'العمل والوثائق',
    intro: 'خدمات رخص العمل والوثائق والمعلومات الشخصية.',
    icon: 'BriefcaseBusiness',
    services: [
      { title: 'تخفيض المقابل المالي وإصدار رخص العمل', text: 'المساعدة في تخفيض المقابل المالي وإصدار رخص العمل.', icon: 'BadgeCheck' },
      { title: 'فك النسبة', text: 'خدمة فك النسبة لجميع الجنسيات.', icon: 'Unlink' },
      { title: 'نقل معلومات جواز السفر', text: 'المساعدة في نقل معلومات جواز السفر.', icon: 'BookUser' },
    ],
  },
];

export const FEATURED_SERVICES = [
  'متابعة المخالفات المرورية وتصفيرها',
  'إصدار وتجديد رخص القيادة',
  'نقل ملكية المركبات',
  'الفحص الدوري دون حضور',
  'شهادة هيئة الزكاة والضريبة والجمارك',
  'إصدار الفواتير',
].map((t) => t);

export const WHY_US = [
  { icon: 'LayoutGrid', title: 'خدمات متعددة في مكان واحد', text: 'مجموعة من الخدمات الإدارية والعامة يمكن طلبها عبر قناة تواصل واحدة.' },
  { icon: 'MessageCircleMore', title: 'تواصل مباشر', text: 'اتصال أو واتساب مباشر لشرح حالتك ومعرفة المطلوب لإنجازها.' },
  { icon: 'ListChecks', title: 'وضوح في الشروط', text: 'نوضّح لك الشروط والمتطلبات كما هي، دون وعود غير مؤكدة.' },
  { icon: 'ShieldCheck', title: 'التزام بالأنظمة', text: 'نعمل وفق الأنظمة والشروط المعمول بها لكل خدمة.' },
];

export const PROCESS = [
  { icon: 'PhoneCall', title: 'تواصل معنا', text: 'اتصل أو راسلنا عبر واتساب وحدّد الخدمة التي تحتاجها.' },
  { icon: 'FileSearch', title: 'دراسة الحالة', text: 'نراجع حالتك ونوضح لك المتطلبات والشروط.' },
  { icon: 'ClipboardList', title: 'تنفيذ الإجراءات', text: 'نتابع الإجراءات المطلوبة وفق الشروط المعمول بها.' },
  { icon: 'CircleCheckBig', title: 'إبلاغك بالنتيجة', text: 'نوافيك بما تم وبالخطوات التالية إن وجدت.' },
];

export const VALUES = [
  { icon: 'Eye', title: 'الوضوح', text: 'نشرح الخدمة ومتطلباتها بلغة مباشرة.' },
  { icon: 'Handshake', title: 'الأمانة', text: 'نتعامل مع بياناتك ومستنداتك بمسؤولية.' },
  { icon: 'Scale', title: 'الالتزام بالأنظمة', text: 'نعمل ضمن الأنظمة والشروط المعمول بها.' },
  { icon: 'HeartHandshake', title: 'خدمة العميل', text: 'نضع احتياج العميل في صدارة الاهتمام.' },
];
