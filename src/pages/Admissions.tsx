import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Calendar, 
  Users, 
  CheckCircle,
  Phone,
  Clock,
  AlertCircle,
  ArrowRight,
  Globe
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Demande d'information",
    titleAr: "طلب المعلومات",
    description: "Contactez-nous par téléphone ou WhatsApp pour obtenir le dossier d'inscription.",
  },
  {
    number: "02",
    title: "Dépôt du dossier",
    titleAr: "إيداع الملف",
    description: "Remplissez et déposez le dossier complet avec les documents requis.",
  },
  {
    number: "03",
    title: "Entretien",
    titleAr: "المقابلة",
    description: "Rencontre avec la direction et évaluation du niveau de l'élève.",
  },
  {
    number: "04",
    title: "Confirmation",
    titleAr: "التأكيد",
    description: "Confirmation de l'inscription et paiement des frais.",
  },
];

const documents = [
  "Copie de l'acte de naissance",
  "Photos d'identité récentes",
  "Certificat de scolarité (si applicable)",
  "Bulletins scolaires des années précédentes",
  "Copie du livret de famille",
  "Certificat médical",
];

const Admissions = () => {
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
            {/* Alert Badge */}
            <div className="inline-flex items-center gap-2 bg-school-gold/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <AlertCircle className="h-5 w-5 text-school-gold" />
              <span className="text-sm text-primary-foreground font-medium">
                Places limitées - Inscrivez-vous tôt!
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Inscriptions 2025/2026
              <span className="block text-2xl font-arabic mt-2 text-school-gold">التسجيلات للموسم الدراسي</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Rejoignez la famille La Conscience et offrez à votre enfant une éducation d'excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <a href="tel:+212661392813" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Appelez-nous
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href="https://wa.me/212661392813" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Processus d'Inscription
              <span className="block text-xl font-arabic text-muted-foreground mt-2">مراحل التسجيل</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quatre étapes simples pour inscrire votre enfant.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="text-5xl font-bold text-primary/10 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm font-arabic text-muted-foreground mb-3">{step.titleAr}</p>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Documents Requis
                <span className="block text-xl font-arabic text-muted-foreground mt-2">الوثائق المطلوبة</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Préparez les documents suivants pour compléter le dossier d'inscription.
              </p>
              
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card rounded-lg p-4">
                    <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="h-7 w-7 text-primary" />
                Enseignement Trilingue
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Notre curriculum multilingue prépare les élèves à exceller dans un monde globalisé.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">ع</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">العربية</p>
                    <p className="text-sm text-muted-foreground">Langue maternelle</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">Fr</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Français</p>
                    <p className="text-sm text-muted-foreground">Langue d'enseignement</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">En</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">English</p>
                    <p className="text-sm text-muted-foreground">Global language</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels Info */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Niveaux Disponibles
              <span className="block text-xl font-arabic text-muted-foreground mt-2">المستويات المتاحة</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { level: "Petite Enfance", levelAr: "التعليم الأولي", age: "3-5 ans", icon: "👶" },
              { level: "Primaire", levelAr: "التعليم الابتدائي", age: "6-11 ans", icon: "📚" },
              { level: "Collège", levelAr: "الثانوي الإعدادي", age: "12-14 ans", icon: "🎓" },
              { level: "Lycée", levelAr: "الثانوي التأهيلي", age: "15-17 ans", icon: "🏆" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-secondary rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-1">{item.level}</h3>
                <p className="text-sm font-arabic text-muted-foreground mb-2">{item.levelAr}</p>
                <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">
                  {item.age}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à inscrire votre enfant?
            </h2>
            <p className="text-xl font-arabic text-primary-foreground/90 mb-2">
              هل أنت مستعد لتسجيل طفلك؟
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Contactez-nous dès maintenant pour plus d'informations ou pour prendre rendez-vous.
            </p>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-8 w-8 text-school-gold" />
                  <div className="text-left">
                    <p className="text-sm text-primary-foreground/70">Téléphone</p>
                    <a href="tel:+212661392813" className="text-xl font-bold text-primary-foreground hover:text-school-gold transition-colors">
                      +212 661-392813
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-8 w-8 text-school-gold" />
                  <div className="text-left">
                    <p className="text-sm text-primary-foreground/70">Horaires</p>
                    <p className="text-xl font-bold text-primary-foreground">Lun-Ven: 8h-17h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" className="flex items-center gap-2">
                  Contactez-nous
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href="https://wa.me/212661392813" target="_blank" rel="noopener noreferrer">
                  WhatsApp Direct
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
