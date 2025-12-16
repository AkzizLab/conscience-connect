import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Baby, 
  BookOpen, 
  GraduationCap, 
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
  Calculator,
  Palette,
  Dumbbell
} from "lucide-react";

const programs = [
  {
    icon: Baby,
    level: "التعليم الأولي",
    levelFr: "Petite Enfance / Early Learning",
    age: "3-5 ans",
    color: "bg-pink-500",
    description: "Un éveil en douceur pour les tout-petits, développant leurs capacités cognitives, motrices et sociales dans un environnement ludique et sécurisant.",
    descriptionAr: "برنامج تفتح للصغار، يطور قدراتهم المعرفية والحركية والاجتماعية في بيئة آمنة وممتعة.",
    features: [
      "Éveil aux langues (Arabe, Français)",
      "Activités motrices et artistiques",
      "Initiation à la lecture et l'écriture",
      "Jeux éducatifs et socialisation",
    ],
  },
  {
    icon: BookOpen,
    level: "التعليم الابتدائي",
    levelFr: "Primaire / Primary School",
    age: "6-11 ans",
    color: "bg-school-blue",
    description: "Des fondations solides en langues, mathématiques et sciences, avec un accent sur le développement de la pensée critique et la curiosité intellectuelle.",
    descriptionAr: "أسس متينة في اللغات والرياضيات والعلوم، مع التركيز على تطوير التفكير النقدي والفضول المعرفي.",
    features: [
      "Enseignement trilingue renforcé",
      "Mathématiques et sciences",
      "Éducation islamique et civique",
      "Arts et éducation physique",
    ],
  },
  {
    icon: GraduationCap,
    level: "الثانوي الإعدادي",
    levelFr: "Collège / Middle School",
    age: "12-14 ans",
    color: "bg-school-green",
    description: "Développement des compétences avancées et préparation au cycle secondaire, avec un accompagnement personnalisé pour chaque élève.",
    descriptionAr: "تطوير المهارات المتقدمة والإعداد للمرحلة الثانوية، مع مرافقة شخصية لكل تلميذ.",
    features: [
      "Approfondissement des matières",
      "Projets et travaux de recherche",
      "Orientation scolaire",
      "Activités parascolaires diversifiées",
    ],
  },
  {
    icon: Award,
    level: "الثانوي التأهيلي",
    levelFr: "Lycée / Secondary School",
    age: "15-17 ans",
    color: "bg-school-gold",
    description: "Préparation intensive au baccalauréat et aux études supérieures, avec un suivi rigoureux et des méthodes pédagogiques innovantes.",
    descriptionAr: "إعداد مكثف للباكالوريا والدراسات العليا، مع متابعة دقيقة وطرق بيداغوجية مبتكرة.",
    features: [
      "Préparation au baccalauréat",
      "Cours de soutien et remédiation",
      "Orientation universitaire",
      "Préparation aux concours",
    ],
  },
];

const subjects = [
  { icon: Globe, name: "Langues", nameAr: "اللغات", desc: "Arabe, Français, Anglais" },
  { icon: Calculator, name: "Sciences", nameAr: "العلوم", desc: "Math, Physique, SVT" },
  { icon: Palette, name: "Arts", nameAr: "الفنون", desc: "Dessin, Musique" },
  { icon: Dumbbell, name: "Sport", nameAr: "الرياضة", desc: "Éducation physique" },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-school-gold rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Programmes Académiques
              <span className="block text-2xl font-arabic mt-2 text-school-gold">البرامج التعليمية</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Un parcours éducatif complet de la petite enfance au lycée pour l'année scolaire 2024/2025.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`bg-card rounded-3xl overflow-hidden shadow-lg border border-border ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } lg:flex`}
              >
                {/* Icon Section */}
                <div className={`${program.color} p-8 lg:p-12 lg:w-1/3 flex items-center justify-center`}>
                  <div className="text-center">
                    <program.icon className="h-20 w-20 text-primary-foreground mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-primary-foreground">{program.levelFr}</h2>
                    <p className="text-xl font-arabic text-primary-foreground/90 mt-2">{program.level}</p>
                    <span className="inline-block mt-4 px-4 py-1 bg-primary-foreground/20 rounded-full text-sm text-primary-foreground">
                      {program.age}
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 lg:p-12 lg:w-2/3">
                  <p className="text-lg text-muted-foreground mb-4">{program.description}</p>
                  <p className="text-muted-foreground font-arabic mb-6 leading-relaxed">{program.descriptionAr}</p>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-4">Ce que nous offrons:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {program.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-school-green flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Overview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Matières / <span className="font-arabic">موادنا الدراسية</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un curriculum équilibré couvrant toutes les disciplines essentielles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <subject.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{subject.name}</h3>
                <p className="text-sm font-arabic text-muted-foreground mb-2">{subject.nameAr}</p>
                <p className="text-sm text-muted-foreground">{subject.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trilingual Education */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Enseignement Trilingue
              <span className="block text-xl font-arabic text-muted-foreground mt-2">التعليم ثلاثي اللغات</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Notre approche multilingue prépare les élèves à évoluer dans un monde globalisé 
              tout en préservant leur identité culturelle.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">العربية</h3>
                <p className="text-muted-foreground">Arabe - Langue maternelle et culturelle</p>
              </div>
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Français</h3>
                <p className="text-muted-foreground">Langue d'enseignement principale</p>
              </div>
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">English</h3>
                <p className="text-muted-foreground">Global communication language</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Prêt à rejoindre nos programmes?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Inscriptions ouvertes pour l'année 2025/2026. Places limitées!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/admissions" className="flex items-center gap-2">
                S'inscrire maintenant
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/contact">Poser une question</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
