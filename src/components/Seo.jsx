import { useEffect } from 'react';

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
    const og = document.querySelector('meta[property="og:title"]');
    if (og) og.content = title;
  }, [title, description]);
  return null;
}
