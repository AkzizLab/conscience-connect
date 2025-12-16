import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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

const values = [
  {
    icon: Award,
    title: "Excellence",
    titleAr: "التميز",
    description: "Nous visons l'excellence dans tous les aspects de l'éducation.",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    titleAr: "الرعاية",
    description: "Un environnement chaleureux et sécurisant pour chaque enfant.",
  },
  {
    icon: Lightbulb,
    title: "Créativité",
    titleAr: "الإبداع",
    description: "Encourager la pensée créative et l'innovation.",
  },
  {
    icon: Globe,
    title: "Ouverture",
    titleAr: "الانفتاح",
    description: "Éducation multilingue et ouverture sur le monde.",
  },
  {
    icon: Shield,
    title: "Intégrité",
    titleAr: "النزاهة",
    description: "Valeurs morales et éthiques au cœur de notre enseignement.",
  },
  {
    icon: Users,
    title: "Communauté",
    titleAr: "المجتمع",
    description: "Partenariat actif avec les familles et la communauté.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-school-gold rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              À Propos de Nous
              <span className="block text-2xl font-arabic mt-2 text-school-gold">من نحن</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Établissement La Conscience de l'enseignement scolaire privé - Une institution dédiée à l'excellence éducative à Ouarzazate.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Notre Mission</h2>
              <p className="text-lg font-arabic text-muted-foreground mb-4">مهمتنا</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Offrir un environnement d'apprentissage sûr, stimulant et axé sur l'excellence, 
                avec des enseignants qualifiés et un personnel dévoué au développement global de chaque enfant.
              </p>
              <p className="text-muted-foreground font-arabic leading-relaxed">
                توفير بيئة تعليمية آمنة ومحفزة تركز على الجودة والتميز، مع معلمين مؤهلين وفريق عمل متفانٍ في التطوير الشامل لكل طفل.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="w-16 h-16 rounded-2xl bg-school-green/10 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-school-green" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Notre Vision</h2>
              <p className="text-lg font-arabic text-muted-foreground mb-4">رؤيتنا</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Être l'établissement de référence à Ouarzazate, formant des citoyens responsables, 
                créatifs et ouverts sur le monde, prêts à relever les défis du 21ème siècle.
              </p>
              <p className="text-muted-foreground font-arabic leading-relaxed">
                أن نكون المؤسسة التعليمية المرجعية في ورزازات، نُخرِّج مواطنين مسؤولين ومبدعين ومنفتحين على العالم، مستعدين لمواجهة تحديات القرن الحادي والعشرين.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Valeurs / <span className="font-arabic">قيمنا</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre approche éducative et notre engagement envers chaque élève.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-1">{value.title}</h3>
                <p className="text-sm font-arabic text-muted-foreground mb-3">{value.titleAr}</p>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About School */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Notre Histoire
              </h2>
              <p className="text-lg font-arabic text-muted-foreground">تاريخنا</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Établissement La Conscience de l'enseignement scolaire privé est une institution éducative 
                de premier plan située au cœur de Ouarzazate, la porte du désert marocain. Fondée avec 
                la vision de fournir une éducation de qualité supérieure, notre école s'est engagée à 
                former les leaders de demain.
              </p>
              
              <p className="mb-6">
                Notre établissement offre un parcours éducatif complet, du préscolaire au lycée, dans 
                un environnement qui favorise l'épanouissement personnel et l'excellence académique. 
                Nous sommes fiers de notre approche trilingue (arabe, français, anglais) qui prépare 
                nos élèves à évoluer dans un monde globalisé.
              </p>
              
              <p className="font-arabic text-right leading-loose">
                مدرسة الوعي للتعليم الخصوصي هي مؤسسة تربوية رائدة تقع في قلب مدينة ورزازات، بوابة الصحراء المغربية. 
                تأسست برؤية تهدف إلى تقديم تعليم عالي الجودة، وقد التزمت مدرستنا بتكوين قادة الغد في بيئة تعزز 
                التفتح الشخصي والتميز الأكاديمي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Une Équipe Dévouée
                <span className="block text-xl font-arabic text-muted-foreground mt-2">فريق متفانٍ</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Notre équipe pédagogique est composée d'enseignants qualifiés et passionnés, 
                engagés dans la réussite de chaque élève. Nous investissons continuellement 
                dans leur formation pour garantir un enseignement de qualité.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Enseignants Certifiés</p>
                </div>
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Classes Réduites</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-2xl p-8">
              <blockquote className="text-xl italic text-foreground mb-4">
                "Notre mission est de former des citoyens accomplis, confiants et prêts à 
                contribuer positivement à la société."
              </blockquote>
              <p className="text-muted-foreground">— La Direction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Rejoignez la famille La Conscience
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Offrez à votre enfant l'éducation qu'il mérite dans un environnement d'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/admissions" className="flex items-center gap-2">
                Inscription 2025/2026
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
