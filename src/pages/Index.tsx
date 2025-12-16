import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

const programs = [
  {
    icon: BookOpen,
    title: "التعليم الأولي",
    titleFr: "Petite Enfance",
    description: "Éveil et préparation pour les tout-petits dans un environnement stimulant.",
  },
  {
    icon: GraduationCap,
    title: "التعليم الابتدائي",
    titleFr: "Primaire",
    description: "Fondations solides en langues, sciences et mathématiques.",
  },
  {
    icon: Users,
    title: "الثانوي الإعدادي",
    titleFr: "Collège",
    description: "Développement des compétences critiques et créatives.",
  },
  {
    icon: Award,
    title: "الثانوي التأهيلي",
    titleFr: "Lycée",
    description: "Préparation aux études supérieures et à la vie professionnelle.",
  },
];

const features = [
  {
    icon: Star,
    title: "Excellence Académique",
    titleAr: "التميز الأكاديمي",
    description: "Programmes rigoureux avec des résultats exceptionnels.",
  },
  {
    icon: Users,
    title: "Équipe Qualifiée",
    titleAr: "فريق مؤهل",
    description: "Enseignants expérimentés et dévoués à la réussite de chaque élève.",
  },
  {
    icon: BookOpen,
    title: "Trilingual Education",
    titleAr: "تعليم ثلاثي اللغات",
    description: "Arabic, French, and English for global competence.",
  },
  {
    icon: Clock,
    title: "Suivi Personnalisé",
    titleAr: "متابعة شخصية",
    description: "Attention individuelle pour un développement optimal.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden hero-gradient">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-school-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-school-green rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-up">
              <GraduationCap className="h-5 w-5 text-school-gold" />
              <span className="text-sm text-primary-foreground font-medium">
                Inscriptions 2025/2026 Ouvertes
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up delay-100">
              School La Conscience
              <span className="block text-school-gold">Private</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-fade-up delay-200 font-arabic">
              حيث ينمو قادة المستقبل
            </p>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up delay-300">
              Là où grandissent les leaders de demain. Excellence in education with holistic programs in Ouarzazate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
              <Button asChild variant="hero" size="xl">
                <Link to="/admissions" className="flex items-center gap-2">
                  Inscrivez-vous
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">Contactez-nous</Link>
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up delay-500">
              {[
                { value: "4", label: "Niveaux", labelAr: "مستويات" },
                { value: "3", label: "Langues", labelAr: "لغات" },
                { value: "10+", label: "Activités", labelAr: "أنشطة" },
                { value: "100%", label: "Réussite", labelAr: "نجاح" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-school-gold mb-1">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Programmes / <span className="font-arabic">برامجنا التعليمية</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un parcours éducatif complet de la petite enfance au lycée, adapté à chaque étape de développement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <program.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{program.titleFr}</h3>
                <p className="text-sm font-arabic text-muted-foreground mb-3">{program.title}</p>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="default" size="lg">
              <Link to="/programs" className="flex items-center gap-2">
                Découvrir tous les programmes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pourquoi La Conscience?
                <span className="block text-xl font-arabic text-muted-foreground mt-2">لماذا مدرسة الوعي؟</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Notre établissement offre un environnement d'apprentissage exceptionnel où chaque élève peut s'épanouir et atteindre son plein potentiel.
              </p>
              
              <div className="space-y-4">
                {[
                  "Enseignement trilingue: Arabe, Français, Anglais",
                  "Classes à effectifs réduits pour un suivi personnalisé",
                  "Activités parascolaires variées tout au long de l'année",
                  "Équipe pédagogique qualifiée et dévouée",
                  "Environnement sécurisé et stimulant",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-school-green flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild variant="accent" size="lg" className="mt-8">
                <Link to="/about">En savoir plus</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-xs font-arabic text-muted-foreground mb-2">{feature.titleAr}</p>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-school-gold rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Inscriptions 2025/2026
            </h2>
            <p className="text-xl font-arabic text-primary-foreground/90 mb-2">
              التسجيلات مفتوحة للموسم الدراسي 2025/2026
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Places limitées - Réservez dès maintenant pour garantir l'avenir de votre enfant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/admissions">Inscrivez votre enfant</Link>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href="https://wa.me/212661392813" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Quick Info */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Hay Fadragom, Ouarzazate</p>
                <p className="text-sm font-arabic text-muted-foreground">حي فضراكم، ورزازات</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <a href="tel:+212661392813" className="font-semibold text-foreground hover:text-primary transition-colors">
                  +212 661-392813
                </a>
                <p className="text-sm text-muted-foreground">+212 660-123650</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
