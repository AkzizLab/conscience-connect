import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AnimatedSection, StaggeredList } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Star, 
  Award, 
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin
} from "lucide-react";

const Index = () => {
  const { t, isRTL } = useLanguage();

  const programs = [
    {
      icon: BookOpen,
      titleKey: 'programs.early',
      descKey: 'programs.early_desc',
    },
    {
      icon: GraduationCap,
      titleKey: 'programs.primary',
      descKey: 'programs.primary_desc',
    },
    {
      icon: Users,
      titleKey: 'programs.middle',
      descKey: 'programs.middle_desc',
    },
    {
      icon: Award,
      titleKey: 'programs.secondary',
      descKey: 'programs.secondary_desc',
    },
  ];

  const features = [
    {
      icon: Star,
      titleKey: 'feature.excellence',
      descKey: 'feature.excellence_desc',
    },
    {
      icon: Users,
      titleKey: 'feature.team',
      descKey: 'feature.team_desc',
    },
    {
      icon: BookOpen,
      titleKey: 'feature.trilingual',
      descKey: 'feature.trilingual_desc',
    },
    {
      icon: Clock,
      titleKey: 'feature.follow',
      descKey: 'feature.follow_desc',
    },
  ];

  const whyItems = [
    'why.trilingual',
    'why.small_classes',
    'why.activities',
    'why.teachers',
    'why.environment',
  ];

  const stats = [
    { value: "4", labelKey: 'stats.levels' },
    { value: "3", labelKey: 'stats.languages' },
    { value: "10+", labelKey: 'stats.activities' },
    { value: "100%", labelKey: 'stats.success' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden hero-gradient">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-pattern-dots">
          <div className="absolute top-20 left-10 w-72 h-72 bg-school-gold rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-school-green rounded-full blur-3xl animate-float delay-300" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center hero-enter ${isRTL ? 'font-arabic' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-up">
              <GraduationCap className="h-5 w-5 text-school-gold icon-float" />
              <span className="text-sm text-primary-foreground font-medium">
                {t('hero.badge')}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up delay-100">
              School La Conscience
              <span className="block text-school-gold">Private</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-fade-up delay-200">
              {t('hero.tagline')}
            </p>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up delay-300">
              {t('hero.subtitle')}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="xl" className="btn-glow btn-ripple animate-pulse-subtle">
                <Link to="/admissions" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('hero.cta_register')}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl" className="btn-ripple">
                <Link to="/contact">{t('hero.cta_contact')}</Link>
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 ${isRTL ? 'direction-rtl' : ''}`}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-school-gold mb-1">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{t(stat.labelKey)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background bg-pattern-grid">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('programs.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('programs.subtitle')}
            </p>
          </AnimatedSection>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isRTL ? 'direction-rtl' : ''}`}>
            {programs.map((program, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="group bg-card rounded-2xl p-6 shadow-md border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300 icon-hover">
                  <program.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t(program.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(program.descKey)}</p>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fade-up" delay={400} className="text-center mt-10">
            <Button asChild variant="default" size="lg" className="btn-ripple">
              <Link to="/programs" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {t('programs.discover')}
                <ArrowRight className={`h-4 w-4 icon-float ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary bg-pattern-diagonal">
        <div className="container mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            <AnimatedSection animation="slide-right">
              <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-6 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {t('why.title')}
              </h2>
              <p className={`text-lg text-muted-foreground mb-8 ${isRTL ? 'text-right' : ''}`}>
                {t('why.subtitle')}
              </p>
              
              <div className="space-y-4">
                {whyItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-3 scroll-fade-up is-visible ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-school-green flex-shrink-0 mt-0.5 icon-float" />
                    <span className="text-foreground">{t(item)}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild variant="accent" size="lg" className="mt-8 btn-glow btn-ripple">
                <Link to="/about">{t('why.learn_more')}</Link>
              </Button>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" className={`grid grid-cols-2 gap-4 ${isRTL ? 'lg:col-start-1' : ''}`}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-card p-6 rounded-2xl shadow-md card-hover ${isRTL ? 'text-right' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="h-8 w-8 text-primary mb-3 icon-hover" />
                  <h3 className="font-semibold text-foreground mb-2">{t(feature.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(feature.descKey)}</p>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern-dots">
          <div className="absolute top-10 right-20 w-64 h-64 bg-school-gold rounded-full blur-3xl animate-float" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="scale-in" className={`max-w-3xl mx-auto text-center ${isRTL ? 'font-arabic' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-2">
              {t('cta.subtitle')}
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8">
              {t('cta.limited')}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="xl" className="btn-glow btn-ripple animate-pulse-subtle">
                <Link to="/admissions">{t('cta.register_child')}</Link>
              </Button>
              <Button asChild variant="whatsapp" size="xl" className="btn-ripple">
                <a href="https://wa.me/212661392813" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className="h-5 w-5" />
                  {t('common.whatsapp')}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Location Quick Info */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className={`flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left ${isRTL ? 'md:flex-row-reverse md:text-right' : ''}`}>
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <MapPin className="h-6 w-6 text-primary icon-float" />
              <div>
                <p className="font-semibold text-foreground">Hay Fadragom, Ouarzazate</p>
                <p className="text-sm font-arabic text-muted-foreground">حي فضراكم، ورزازات</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Phone className="h-6 w-6 text-primary icon-float" />
              <div>
                <a href="tel:+212661392813" className="font-semibold text-foreground hover:text-primary transition-colors nav-link-hover">
                  +212 661-392813
                </a>
                <p className="text-sm text-muted-foreground">+212 660-123650</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
