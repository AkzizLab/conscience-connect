import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Accueil", nameAr: "الرئيسية", href: "/" },
  { name: "À Propos", nameAr: "من نحن", href: "/about" },
  { name: "Programmes", nameAr: "البرامج", href: "/programs" },
  { name: "Activités", nameAr: "الأنشطة", href: "/activities" },
  { name: "Inscriptions", nameAr: "التسجيل", href: "/admissions" },
  { name: "Galerie", nameAr: "المعرض", href: "/gallery" },
  { name: "Contact", nameAr: "اتصل بنا", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-md">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+212661392813" className="flex items-center gap-2 hover:text-school-gold transition-colors">
              <Phone className="h-4 w-4" />
              +212 661-392813
            </a>
            <span className="text-primary-foreground/60">|</span>
            <a href="tel:+212660123650" className="hover:text-school-gold transition-colors">
              +212 660-123650
            </a>
          </div>
          <div className="flex items-center gap-2 font-arabic">
            <span>مدرسة الوعي الخاصة</span>
            <span className="text-primary-foreground/60">|</span>
            <span className="font-sans">School La Conscience Private</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <GraduationCap className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary leading-tight">La Conscience</h1>
              <p className="text-xs text-muted-foreground">École Privée • Ouarzazate</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="hero" size="default">
              <Link to="/admissions">Inscrivez-vous</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg bg-secondary text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="font-arabic text-muted-foreground mr-2 float-right">{item.nameAr}</span>
                </Link>
              ))}
              <Button asChild variant="hero" size="lg" className="mt-4">
                <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>
                  Inscrivez-vous maintenant
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
