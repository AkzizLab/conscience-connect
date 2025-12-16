import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";

const galleryCategories = [
  { id: "all", name: "Tout", nameAr: "الكل" },
  { id: "classroom", name: "Classes", nameAr: "الفصول" },
  { id: "activities", name: "Activités", nameAr: "الأنشطة" },
  { id: "events", name: "Événements", nameAr: "الفعاليات" },
  { id: "sports", name: "Sports", nameAr: "الرياضة" },
];

const galleryImages = [
  {
    id: 1,
    category: "classroom",
    title: "Salle de classe moderne",
    titleAr: "فصل دراسي حديث",
    placeholder: "bg-gradient-to-br from-school-blue to-school-blue-light",
  },
  {
    id: 2,
    category: "activities",
    title: "Atelier d'arts plastiques",
    titleAr: "ورشة الفنون التشكيلية",
    placeholder: "bg-gradient-to-br from-pink-400 to-pink-600",
  },
  {
    id: 3,
    category: "events",
    title: "Fête de fin d'année",
    titleAr: "حفل نهاية السنة",
    placeholder: "bg-gradient-to-br from-school-gold to-yellow-600",
  },
  {
    id: 4,
    category: "sports",
    title: "Cours d'éducation physique",
    titleAr: "حصة التربية البدنية",
    placeholder: "bg-gradient-to-br from-school-green to-school-green-light",
  },
  {
    id: 5,
    category: "classroom",
    title: "Bibliothèque scolaire",
    titleAr: "المكتبة المدرسية",
    placeholder: "bg-gradient-to-br from-purple-400 to-purple-600",
  },
  {
    id: 6,
    category: "activities",
    title: "Club de lecture",
    titleAr: "نادي القراءة",
    placeholder: "bg-gradient-to-br from-orange-400 to-orange-600",
  },
  {
    id: 7,
    category: "events",
    title: "Journée portes ouvertes",
    titleAr: "يوم الأبواب المفتوحة",
    placeholder: "bg-gradient-to-br from-teal-400 to-teal-600",
  },
  {
    id: 8,
    category: "sports",
    title: "Compétition sportive",
    titleAr: "مسابقة رياضية",
    placeholder: "bg-gradient-to-br from-red-400 to-red-600",
  },
  {
    id: 9,
    category: "classroom",
    title: "Laboratoire informatique",
    titleAr: "مختبر الإعلاميات",
    placeholder: "bg-gradient-to-br from-indigo-400 to-indigo-600",
  },
  {
    id: 10,
    category: "activities",
    title: "Spectacle de théâtre",
    titleAr: "عرض مسرحي",
    placeholder: "bg-gradient-to-br from-rose-400 to-rose-600",
  },
  {
    id: 11,
    category: "events",
    title: "Célébration nationale",
    titleAr: "احتفال وطني",
    placeholder: "bg-gradient-to-br from-emerald-400 to-emerald-600",
  },
  {
    id: 12,
    category: "sports",
    title: "Tournoi de football",
    titleAr: "دوري كرة القدم",
    placeholder: "bg-gradient-to-br from-cyan-400 to-cyan-600",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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
              Galerie Photos
              <span className="block text-2xl font-arabic mt-2 text-school-gold">المعرض</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Découvrez la vie quotidienne à School La Conscience Private à travers nos photos.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category.name}
                <span className="font-arabic text-xs ml-2 opacity-70">{category.nameAr}</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedImage(image)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`absolute inset-0 ${image.placeholder}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl opacity-50">📷</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-sm font-semibold text-primary-foreground">{image.title}</h3>
                    <p className="text-xs font-arabic text-primary-foreground/80">{image.titleAr}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucune photo dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div 
            className="max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`aspect-video ${selectedImage.placeholder} flex items-center justify-center`}>
              <span className="text-8xl opacity-50">📷</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground">{selectedImage.title}</h3>
              <p className="font-arabic text-muted-foreground">{selectedImage.titleAr}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Envie de voir plus?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visitez notre école et découvrez nos installations en personne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg">
              <Link to="/contact" className="flex items-center gap-2">
                Planifier une visite
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/admissions">Inscriptions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
