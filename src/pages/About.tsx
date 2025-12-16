import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  BookOpen,
  Shield,
  Lightbulb,
  Globe,
  ArrowRight
} from "lucide-react";

const About = () => {
  const { t, isRTL } = useLanguage();

  const values = [
    { icon: Award, titleKey: 'value.excellence', descKey: 'value.excellence_desc' },
    { icon: Heart, titleKey: 'value.care', descKey: 'value.care_desc' },
    { icon: Lightbulb, titleKey: 'value.creativity', descKey: 'value.creativity_desc' },
    { icon: Globe, titleKey: 'value.openness', descKey: 'value.openness_desc' },
    { icon: Shield, titleKey: 'value.integrity', descKey: 'value.integrity_desc' },
    { icon: Users, titleKey: 'value.community', descKey: 'value.community_desc' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern-dots">
          <div className="absolute top-20 right-10 w-72 h-72 bg-school-gold rounded-full blur-3xl animate-float" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center hero-enter ${isRTL ? 'font-arabic' : ''}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t('about.hero_text')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background bg-pattern-grid">
        <div className="container mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-12 ${isRTL ? 'direction-rtl' : ''}`}>
            {/* Mission */}
            <AnimatedSection animation="slide-right">
              <div className={`bg-card rounded-2xl p-8 shadow-lg border border-border card-hover ${isRTL ? 'text-right' : ''}`}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 icon-hover">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.mission')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.mission_text')}
                </p>
              </div>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection animation="slide-left">
              <div className={`bg-card rounded-2xl p-8 shadow-lg border border-border card-hover ${isRTL ? 'text-right' : ''}`}>
                <div className="w-16 h-16 rounded-2xl bg-school-green/10 flex items-center justify-center mb-6 icon-hover">
                  <Eye className="h-8 w-8 text-school-green" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.vision')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.vision_text')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary bg-pattern-diagonal">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('about.values')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.values_subtitle')}
            </p>
          </AnimatedSection>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${isRTL ? 'direction-rtl' : ''}`}>
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                className={`bg-card rounded-2xl p-6 shadow-md card-hover ${isRTL ? 'text-right' : ''}`}
              >
                <value.icon className="h-10 w-10 text-primary mb-4 icon-hover" />
                <h3 className="text-xl font-bold text-foreground mb-2">{t(value.titleKey)}</h3>
                <p className="text-muted-foreground">{t(value.descKey)}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About School */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                {t('about.history')}
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <div className={`prose prose-lg max-w-none text-muted-foreground ${isRTL ? 'text-right font-arabic' : ''}`}>
                {isRTL ? (
                  <p className="leading-loose">
                    مدرسة الوعي للتعليم الخصوصي هي مؤسسة تربوية رائدة تقع في قلب مدينة ورزازات، بوابة الصحراء المغربية. 
                    تأسست برؤية تهدف إلى تقديم تعليم عالي الجودة، وقد التزمت مدرستنا بتكوين قادة الغد في بيئة تعزز 
                    التفتح الشخصي والتميز الأكاديمي. مؤسستنا تقدم مسارًا تعليميًا متكاملاً، من مرحلة ما قبل المدرسة 
                    إلى الثانوية، في بيئة تشجع على التطور الشخصي والتميز الأكاديمي.
                  </p>
                ) : (
                  <>
                    <p className="mb-6">
                      Établissement La Conscience de l'enseignement scolaire privé est une institution éducative 
                      de premier plan située au cœur de Ouarzazate, la porte du désert marocain. Fondée avec 
                      la vision de fournir une éducation de qualité supérieure, notre école s'est engagée à 
                      former les leaders de demain.
                    </p>
                    <p>
                      Notre établissement offre un parcours éducatif complet, du préscolaire au lycée, dans 
                      un environnement qui favorise l'épanouissement personnel et l'excellence académique. 
                      Nous sommes fiers de notre approche trilingue (arabe, français, anglais) qui prépare 
                      nos élèves à évoluer dans un monde globalisé.
                    </p>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            <AnimatedSection animation="slide-right">
              <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-6 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {t('about.team')}
              </h2>
              <p className={`text-lg text-muted-foreground mb-6 ${isRTL ? 'text-right' : ''}`}>
                {t('about.team_text')}
              </p>
              <div className={`grid grid-cols-2 gap-4 ${isRTL ? 'direction-rtl' : ''}`}>
                <div className="bg-secondary rounded-xl p-4 text-center card-hover">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-2 icon-hover" />
                  <p className="font-semibold text-foreground">{t('about.certified')}</p>
                </div>
                <div className="bg-secondary rounded-xl p-4 text-center card-hover">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2 icon-hover" />
                  <p className="font-semibold text-foreground">{t('about.small_classes')}</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" className={isRTL ? 'lg:col-start-1' : ''}>
              <div className="bg-primary/5 rounded-2xl p-8 card-hover">
                <blockquote className={`text-xl italic text-foreground mb-4 ${isRTL ? 'text-right font-arabic' : ''}`}>
                  {isRTL 
                    ? "مهمتنا هي تكوين مواطنين ناجحين، واثقين ومستعدين للمساهمة إيجابيًا في المجتمع."
                    : "\"Notre mission est de former des citoyens accomplis, confiants et prêts à contribuer positivement à la société.\""
                  }
                </blockquote>
                <p className={`text-muted-foreground ${isRTL ? 'text-right' : ''}`}>— {isRTL ? 'الإدارة' : 'La Direction'}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="scale-in" className={isRTL ? 'font-arabic' : ''}>
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              {t('about.join_family')}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {t('about.join_text')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="hero" size="lg" className="btn-glow btn-ripple">
                <Link to="/admissions" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('common.register_2025')}
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

export default About;
