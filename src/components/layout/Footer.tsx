import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-school-gold flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">La Conscience</h3>
                <p className="text-sm text-primary-foreground/70">École Privée</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Établissement La Conscience de l'enseignement scolaire privé - Excellence in education with holistic programs.
            </p>
            <p className="text-sm font-arabic text-primary-foreground/80">
              مدرسة الوعي الخاصة للتعليم - الجودة والتميز في التربية والتعليم
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-school-gold">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-school-gold transition-colors">
                  À Propos / من نحن
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-primary-foreground/80 hover:text-school-gold transition-colors">
                  Programmes / البرامج
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-sm text-primary-foreground/80 hover:text-school-gold transition-colors">
                  Activités / الأنشطة
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-sm text-primary-foreground/80 hover:text-school-gold transition-colors">
                  Inscriptions / التسجيلات
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-primary-foreground/80 hover:text-school-gold transition-colors">
                  Galerie / المعرض
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-school-gold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-school-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Hay Fadragom, Ouarzazate<br />
                  <span className="font-arabic">زنقة تنقرت حي فضراكم، ورزازات</span>
                </span>
              </li>
              <li>
                <a href="tel:+212661392813" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-school-gold transition-colors">
                  <Phone className="h-5 w-5 text-school-gold" />
                  +212 661-392813
                </a>
              </li>
              <li>
                <a href="tel:+212660123650" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-school-gold transition-colors">
                  <Phone className="h-5 w-5 text-school-gold" />
                  +212 660-123650
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-school-gold">Suivez-nous</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-school-gold hover:text-foreground transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-school-gold">Horaires</h4>
            <p className="text-sm text-primary-foreground/80">
              Lun - Ven: 8h00 - 17h00<br />
              Sam: 8h00 - 12h00
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 School La Conscience Private. Tous droits réservés.</p>
            <p className="font-arabic">جميع الحقوق محفوظة - مدرسة الوعي الخاصة</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
