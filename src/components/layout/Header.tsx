import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, GraduationCap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const navigation = [
  { key: 'nav.home', href: "/" },
  { key: 'nav.about', href: "/about" },
  { key: 'nav.programs', href: "/programs" },
  { key: 'nav.activities', href: "/activities" },
  { key: 'nav.admissions', href: "/admissions" },
  { key: 'nav.gallery', href: "/gallery" },
  { key: 'nav.contact', href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-md">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className={`container mx-auto px-4 flex justify-between items-center text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="tel:+212661392813" className="flex items-center gap-2 hover:text-school-gold transition-colors nav-link-hover">
              <Phone className="h-4 w-4" />
              +212 661-392813
            </a>
            <span className="text-primary-foreground/60">|</span>
            <a href="tel:+212660123650" className="hover:text-school-gold transition-colors nav-link-hover">
              +212 660-123650
            </a>
          </div>
          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className={isRTL ? 'font-sans' : 'font-arabic'}>{t('header.school_name')}</span>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 icon-hover"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-medium">{language === 'fr' ? 'العربية' : 'FR'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-3 group ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 icon-hover">
              <GraduationCap className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className={`hidden sm:block ${isRTL ? 'text-right' : ''}`}>
              <h1 className="text-lg font-bold text-primary leading-tight">La Conscience</h1>
              <p className="text-xs text-muted-foreground">{t('header.school_subtitle')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navigation.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 nav-link-hover ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* CTA Button + Language (Desktop) */}
          <div className={`hidden md:flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Button asChild variant="hero" size="default" className="btn-glow btn-ripple">
              <Link to="/admissions">{t('header.register')}</Link>
            </Button>
          </div>

          {/* Mobile: Language + Menu */}
          <div className={`lg:hidden flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-secondary text-foreground icon-hover"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="p-2 rounded-lg bg-secondary text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {t(item.key)}
                </Link>
              ))}
              <Button asChild variant="hero" size="lg" className="mt-4 btn-glow btn-ripple">
                <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>
                  {t('header.register_now')}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
