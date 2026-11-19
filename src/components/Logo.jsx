import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo-horizontal.svg';
import logoLight from '../assets/logo/logo-horizontal-light.svg';
import symbol from '../assets/logo/logo-symbol.svg';

export const LOGO = { horizontal: logo, light: logoLight, symbol };

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="logo-link" aria-label="مكتب المميز للخدمات - الرئيسية" onClick={onClick}>
      <img src={logo} alt="شعار مكتب المميز للخدمات" width="190" height="48" />
    </Link>
  );
}
