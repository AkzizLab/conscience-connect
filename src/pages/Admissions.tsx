import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Phone, Clock, AlertCircle, ArrowRight, Globe } from "lucide-react";

const Admissions = () => {
  const { t, isRTL } = useLanguage();

  const steps = [
    { number: "01", title: "Demande d'information", titleAr: "طلب المعلومات", description: "Contactez-nous par téléphone ou WhatsApp." },
    { number: "02", title: "Dépôt du dossier", titleAr: "إيداع الملف", description: "Remplissez et déposez le dossier complet." },
    { number: "03", title: "Entretien", titleAr: "المقابلة", description: "Rencontre avec la direction et évaluation." },
    { number: "04", title: "Confirmation", titleAr: "التأكيد", description: "Confirmation de l'inscription et paiement." },
  ];

  const documents = [
    "Copie de l'acte de naissance", "Photos d'identité récentes", "Certificat de scolarité",
    "Bulletins scolaires", "Copie du livret de famille", "Certificat médical",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern-dots">
          <div className="absolute top-20 left-10 w-72 h-72 bg-school-gold rounded-full blur-3xl animate-float" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center hero-enter ${isRTL ? 'font-arabic' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-school-gold/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <AlertCircle className="h-5 w-5 text-school-gold" />
              <span className="text-sm text-primary-foreground font-medium">
                {isRTL ? 'أماكن محدودة - سجّل مبكراً!' : 'Places limitées - Inscrivez-vous tôt!'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {isRTL ? 'التسجيلات 2025/2026' : 'Inscriptions 2025/2026'}
            </h1>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="xl" className="btn-glow btn-ripple animate-pulse-subtle">
                <a href="tel:+212661392813" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className="h-5 w-5" />
                  {isRTL ? 'اتصل بنا' : 'Appelez-nous'}
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="xl" className="btn-ripple">
                <a href="https://wa.me/212661392813" target="_blank" rel="noopener noreferrer">{t('common.whatsapp')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background bg-pattern-grid">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'مراحل التسجيل' : 'Processus d\'Inscription'}
            </h2>
          </AnimatedSection>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isRTL ? 'direction-rtl' : ''}`}>
            {steps.map((step, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100} className="relative">
                <div className={`bg-card rounded-2xl p-6 shadow-md card-hover h-full ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-5xl font-bold text-primary/10 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{isRTL ? step.titleAr : step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className={`h-6 w-6 text-primary ${isRTL ? 'rotate-180' : ''}`} />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary bg-pattern-diagonal">
        <div className="container mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-12 items-start ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            <AnimatedSection animation="slide-right">
              <h2 className={`text-3xl font-bold text-foreground mb-6 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {isRTL ? 'الوثائق المطلوبة' : 'Documents Requis'}
              </h2>
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div key={index} className={`flex items-start gap-3 bg-card rounded-lg p-4 card-hover ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 icon-float" />
                    <span className="text-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" className={isRTL ? 'lg:col-start-1' : ''}>
              <div className="bg-card rounded-3xl p-8 shadow-lg card-hover">
                <h3 className={`text-2xl font-bold text-foreground mb-6 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Globe className="h-7 w-7 text-primary icon-hover" />
                  {isRTL ? 'التعليم ثلاثي اللغات' : 'Enseignement Trilingue'}
                </h3>
                <div className="space-y-4">
                  {[
                    { lang: "العربية", label: "Langue maternelle" },
                    { lang: "Français", label: "Langue d'enseignement" },
                    { lang: "English", label: "Global language" },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 bg-secondary rounded-lg card-hover ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary text-sm">{item.lang.slice(0,2)}</span>
                      </div>
                      <div className={isRTL ? 'text-right' : ''}>
                        <p className="font-semibold text-foreground">{item.lang}</p>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale-in" className={`max-w-3xl mx-auto text-center ${isRTL ? 'font-arabic' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
              {isRTL ? 'هل أنت مستعد لتسجيل طفلك؟' : 'Prêt à inscrire votre enfant?'}
            </h2>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="xl" className="btn-glow btn-ripple">
                <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('common.contact_us')}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button asChild variant="whatsapp" size="xl" className="btn-ripple">
                <a href="https://wa.me/212661392813" target="_blank" rel="noopener noreferrer">WhatsApp Direct</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
