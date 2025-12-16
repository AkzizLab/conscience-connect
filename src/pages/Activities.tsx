import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Palette, Music, Dumbbell, BookOpen, Users, Trophy, Heart, Star, ArrowRight
} from "lucide-react";

const Activities = () => {
  const { t, isRTL } = useLanguage();

  const activities = [
    { icon: Palette, title: "Arts Plastiques", titleAr: "الفنون التشكيلية", description: "Développer la créativité à travers le dessin, la peinture et les travaux manuels.", color: "bg-pink-500" },
    { icon: Music, title: "Musique & Chant", titleAr: "الموسيقى والغناء", description: "Éveil musical, chorale et initiation aux instruments.", color: "bg-purple-500" },
    { icon: Dumbbell, title: "Sports", titleAr: "الرياضة", description: "Football, basketball, athlétisme et activités sportives variées.", color: "bg-school-green" },
    { icon: BookOpen, title: "Club de Lecture", titleAr: "نادي القراءة", description: "Encourager l'amour de la lecture et l'expression écrite.", color: "bg-school-blue" },
    { icon: Users, title: "Théâtre", titleAr: "المسرح", description: "Expression corporelle, jeux de rôle et représentations théâtrales.", color: "bg-orange-500" },
    { icon: Trophy, title: "Compétitions", titleAr: "المسابقات", description: "Olympiades, concours de récitation et compétitions inter-écoles.", color: "bg-school-gold" },
  ];

  const supportServices = [
    { icon: Heart, title: "Soutien Scolaire", titleAr: "الدعم المدرسي", description: "Accompagnement personnalisé pour les élèves en difficulté." },
    { icon: Star, title: "Excellence", titleAr: "التميز", description: "Programmes d'enrichissement pour les élèves à haut potentiel." },
    { icon: Users, title: "Suivi Psychologique", titleAr: "المتابعة النفسية", description: "Accompagnement et écoute pour le bien-être de chaque élève." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern-dots">
          <div className="absolute top-20 right-10 w-72 h-72 bg-school-gold rounded-full blur-3xl animate-float" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center hero-enter ${isRTL ? 'font-arabic' : ''}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {isRTL ? 'النوادي والأنشطة' : 'Activités & Clubs'}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {isRTL ? 'أنشطة تربوية وترفيهية موازية طوال السنة' : 'Des activités éducatives et récréatives tout au long de l\'année.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background bg-pattern-grid">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'نوادينا' : 'Nos Clubs'}
            </h2>
          </AnimatedSection>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${isRTL ? 'direction-rtl' : ''}`}>
            {activities.map((activity, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100} className="group bg-card rounded-2xl overflow-hidden shadow-md card-hover">
                <div className={`${activity.color} p-6 text-center`}>
                  <activity.icon className="h-12 w-12 text-primary-foreground mx-auto icon-hover" />
                </div>
                <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className="text-xl font-bold text-foreground mb-1">{isRTL ? activity.titleAr : activity.title}</h3>
                  <p className="text-muted-foreground">{isRTL ? activity.titleAr : activity.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary bg-pattern-diagonal">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'المرافقة والدعم' : 'Accompagnement & Soutien'}
            </h2>
          </AnimatedSection>
          
          <div className={`grid md:grid-cols-3 gap-6 ${isRTL ? 'direction-rtl' : ''}`}>
            {supportServices.map((service, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100} className={`bg-card rounded-2xl p-8 shadow-md text-center card-hover ${isRTL ? 'font-arabic' : ''}`}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 icon-hover">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{isRTL ? service.titleAr : service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="scale-in" className={isRTL ? 'font-arabic' : ''}>
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              {isRTL ? 'اكتشف المزيد عن مدرستنا' : 'Découvrez plus sur notre école'}
            </h2>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="lg" className="btn-glow btn-ripple">
                <Link to="/gallery" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {isRTL ? 'معرض الصور' : 'Voir la galerie'}
                  <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg" className="btn-ripple">
                <Link to="/contact">{t('common.contact_us')}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
