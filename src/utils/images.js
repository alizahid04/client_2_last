/**
 * Shared automatic image discovery.
 * Every supported image placed in src/assets/images/ (any sub-folder) is
 * picked up at build time. No filenames or counts are hardcoded anywhere.
 */
const modules = import.meta.glob(
  '../assets/images/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, query: '?url', import: 'default' }
);

const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

const sorted = Object.entries(modules)
  .map(([path, src]) => ({ path, src }))
  .sort((a, b) => collator.compare(a.path, b.path));

/** Full, consistently sorted collection (natural filename order). */
export const galleryImages = sorted.map((item, index) => ({
  id: item.path,
  src: item.src,
  alt: `صورة رقم ${index + 1} من أعمال مكتب المميز للخدمات`,
}));

export const getGalleryImages = () => galleryImages;
