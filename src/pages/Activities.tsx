import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Palette, 
  Music, 
  Dumbbell, 
  BookOpen,
  Users,
  Trophy,
  Heart,
  Star,
  ArrowRight
} from "lucide-react";

const activities = [
  {
    icon: Palette,
    title: "Arts Plastiques",
    titleAr: "الفنون التشكيلية",
    description: "Développer la créativité à travers le dessin, la peinture et les travaux manuels.",
    color: "bg-pink-500",
  },
  {
    icon: Music,
    title: "Musique & Chant",
    titleAr: "الموسيقى والغناء",
    description: "Éveil musical, chorale et initiation aux instruments.",
    color: "bg-purple-500",
  },
  {
    icon: Dumbbell,
    title: "Sports",
    titleAr: "الرياضة",
    description: "Football, basketball, athlétisme et activités sportives variées.",
    color: "bg-school-green",
  },
  {
    icon: BookOpen,
    title: "Club de Lecture",
    titleAr: "نادي القراءة",
    description: "Encourager l'amour de la lecture et l'expression écrite.",
    color: "bg-school-blue",
  },
  {
    icon: Users,
    title: "Théâtre",
    titleAr: "المسرح",
    description: "Expression corporelle, jeux de rôle et représentations théâtrales.",
    color: "bg-orange-500",
  },
  {
    icon: Trophy,
    title: "Compétitions",
    titleAr: "المسابقات",
    description: "Olympiades, concours de récitation et compétitions inter-écoles.",
    color: "bg-school-gold",
  },
];

const supportServices = [
  {
    icon: Heart,
    title: "Soutien Scolaire",
    titleAr: "الدعم المدرسي",
    description: "Accompagnement personnalisé pour les élèves en difficulté avec des sessions de remédiation ciblées.",
  },
  {
    icon: Star,
    title: "Excellence",
    titleAr: "التميز",
    description: "Programmes d'enrichissement pour les élèves à haut potentiel.",
  },
  {
    icon: Users,
    title: "Suivi Psychologique",
    titleAr: "المتابعة النفسية",
    description: "Accompagnement et écoute pour le bien-être de chaque élève.",
  },
];

const events = [
  "Célébrations des fêtes nationales et religieuses",
  "Journées portes ouvertes",
  "Spectacles de fin d'année",
  "Sorties pédagogiques et excursions",
  "Semaine des sciences et de la technologie",
  "Compétitions sportives inter-écoles",
];

const Activities = () => {
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
              Activités & Clubs
              <span className="block text-2xl font-arabic mt-2 text-school-gold">النوادي والأنشطة</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              أنشطة تربوية وترفيهية موازية طوال السنة - Des activités éducatives et récréatives tout au long de l'année.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Clubs / <span className="font-arabic">نوادينا</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des activités variées pour développer les talents et les passions de chaque élève.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`${activity.color} p-6 text-center`}>
                  <activity.icon className="h-12 w-12 text-primary-foreground mx-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{activity.title}</h3>
                  <p className="text-sm font-arabic text-muted-foreground mb-3">{activity.titleAr}</p>
                  <p className="text-muted-foreground">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Accompagnement & Soutien
              <span className="block text-xl font-arabic text-muted-foreground mt-2">المرافقة والدعم</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un suivi personnalisé pour accompagner chaque élève vers la réussite.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-md text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{service.title}</h3>
                <p className="text-sm font-arabic text-muted-foreground mb-3">{service.titleAr}</p>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Événements Annuels
                <span className="block text-xl font-arabic text-muted-foreground mt-2">الفعاليات السنوية</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tout au long de l'année, nous organisons des événements pour enrichir 
                l'expérience scolaire et créer des souvenirs inoubliables.
              </p>
              
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-school-gold mt-2 flex-shrink-0" />
                    <span className="text-foreground">{event}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-secondary rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Sorties Pédagogiques</h3>
              <p className="text-muted-foreground mb-6">
                Des excursions éducatives pour découvrir le riche patrimoine de la région 
                de Ouarzazate et au-delà.
              </p>
              <div className="space-y-3 font-arabic text-right">
                <p className="text-muted-foreground">
                  رحلات تربوية لاكتشاف التراث الغني لمنطقة ورزازات وما وراءها.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li>• زيارات للمواقع التاريخية</li>
                  <li>• رحلات إلى الواحات والكثبان الرملية</li>
                  <li>• زيارات المتاحف والمعارض</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Découvrez plus sur notre école
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Visitez notre galerie photos et contactez-nous pour plus d'informations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/gallery" className="flex items-center gap-2">
                Voir la galerie
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

export default Activities;
