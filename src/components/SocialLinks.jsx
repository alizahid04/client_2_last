import { SITE } from '../data/site';
import { WhatsAppIcon, TikTokIcon, ChannelIcon } from './BrandIcons';

export default function SocialLinks() {
  const ext = { target: '_blank', rel: 'noopener noreferrer' };
  return (
    <div className="social">
      <a href={SITE.whatsapp} {...ext}><WhatsAppIcon /> واتساب</a>
      <a href={SITE.whatsappChannel} {...ext}><ChannelIcon /> قناة الواتساب</a>
      <a href={SITE.tiktok} {...ext}><TikTokIcon /> تيك توك</a>
    </div>
  );
}
