import {
  Car, ReceiptText, ArrowLeftRight, IdCard, ClipboardCheck, Landmark, FileBadge, Percent,
  ShoppingCart, CalendarClock, BriefcaseBusiness, BadgeCheck, Unlink, BookUser, LayoutGrid,
  MessageCircleMore, ListChecks, ShieldCheck, PhoneCall, FileSearch, ClipboardList,
  CircleCheckBig, Eye, Handshake, Scale, HeartHandshake,
} from 'lucide-react';

const MAP = {
  Car, ReceiptText, ArrowLeftRight, IdCard, ClipboardCheck, Landmark, FileBadge, Percent,
  ShoppingCart, CalendarClock, BriefcaseBusiness, BadgeCheck, Unlink, BookUser, LayoutGrid,
  MessageCircleMore, ListChecks, ShieldCheck, PhoneCall, FileSearch, ClipboardList,
  CircleCheckBig, Eye, Handshake, Scale, HeartHandshake,
};

export default function Icon({ name, ...props }) {
  const C = MAP[name] || BadgeCheck;
  return <C aria-hidden="true" {...props} />;
}
