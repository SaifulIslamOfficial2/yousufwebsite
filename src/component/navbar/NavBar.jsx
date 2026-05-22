import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/image/logo_no_bg_v2.png";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useLang } from "../../i18n/LanguageContext";
import LangSwitcher from "../../i18n/LangSwitcher";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { t } = useLang();

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/investorlicense", label: t.nav.investorLicense },
    { to: "/visaServices", label: t.nav.visaServices },
    { to: "/airticketmain", label: t.nav.airTicket },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  const serviceLinks = [
    { to: "/investorlicense", label: t.nav.investorLicense },
    { to: "/visaServices", label: t.nav.visaServices },
    { to: "/airticketmain", label: t.nav.airTicket },
    { to: "/mainservice", label: t.nav.generalServices },
  ];

  const active = "text-[#1E6FB8] font-semibold";
  const normal = "text-gray-700 hover:text-[#1E6FB8] transition-colors duration-200";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">

        <Link to="/"><img className="h-14 w-auto" src={logo} alt="Yousuf Consultancy" /></Link>

        <ul className="hidden lg:flex items-center gap-6 font-medium">
          <li><NavLink to="/" className={({ isActive }) => isActive ? active : normal} end>{t.nav.home}</NavLink></li>
          <li className="relative">
            <button className={`flex items-center gap-1 ${normal}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              {t.nav.services} <FaChevronDown className="text-xs mt-0.5" />
            </button>
            <ul onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}
              className={`absolute top-full left-0 bg-white rounded-xl shadow-xl border border-gray-100 w-52 py-2 transition-all duration-200 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
              {serviceLinks.map((link) => (
                <li key={link.to}><NavLink to={link.to} className="block px-4 py-2.5 text-gray-700 hover:bg-[#f0f5ff] hover:text-[#1E6FB8] transition">{link.label}</NavLink></li>
              ))}
            </ul>
          </li>
          <li><NavLink to="/investorlicense" className={({ isActive }) => isActive ? active : normal}>{t.nav.investorLicense}</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? active : normal}>{t.nav.about}</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? active : normal}>{t.nav.contact}</NavLink></li>
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <LangSwitcher />
          <Link to="/contact" className="px-5 py-2.5 rounded-lg text-white font-semibold bg-gradient-to-r from-[#0B3B75] to-[#1E6FB8] hover:opacity-90 transition shadow-md">
            {t.nav.contactBtn}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitcher />
          <button className="text-[#0B3B75] text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `block px-4 py-3 rounded-lg font-medium transition ${isActive ? "bg-[#f0f5ff] text-[#1E6FB8]" : "text-gray-700 hover:bg-gray-50"}`}
                end={link.to === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-2">
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-center px-4 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#0B3B75] to-[#1E6FB8]">
              {t.nav.contactBtn}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
