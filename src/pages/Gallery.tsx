import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { X, ArrowRight } from "lucide-react";

const galleryCategories = [
  { id: "all", name: "Tout", nameAr: "الكل" },
  { id: "classroom", name: "Classes", nameAr: "الفصول" },
  { id: "activities", name: "Activités", nameAr: "الأنشطة" },
  { id: "events", name: "Événements", nameAr: "الفعاليات" },
  { id: "sports", name: "Sports", nameAr: "الرياضة" },
];

const galleryImages = [
  { id: 1, category: "classroom", title: "Salle de classe moderne", titleAr: "فصل دراسي حديث", placeholder: "bg-gradient-to-br from-school-blue to-school-blue-light" },
  { id: 2, category: "activities", title: "Atelier d'arts plastiques", titleAr: "ورشة الفنون التشكيلية", placeholder: "bg-gradient-to-br from-pink-400 to-pink-600" },
  { id: 3, category: "events", title: "Fête de fin d'année", titleAr: "حفل نهاية السنة", placeholder: "bg-gradient-to-br from-school-gold to-yellow-600" },
  { id: 4, category: "sports", title: "Cours d'éducation physique", titleAr: "حصة التربية البدنية", placeholder: "bg-gradient-to-br from-school-green to-school-green-light" },
  { id: 5, category: "classroom", title: "Bibliothèque scolaire", titleAr: "المكتبة المدرسية", placeholder: "bg-gradient-to-br from-purple-400 to-purple-600" },
  { id: 6, category: "activities", title: "Club de lecture", titleAr: "نادي القراءة", placeholder: "bg-gradient-to-br from-orange-400 to-orange-600" },
  { id: 7, category: "events", title: "Journée portes ouvertes", titleAr: "يوم الأبواب المفتوحة", placeholder: "bg-gradient-to-br from-teal-400 to-teal-600" },
  { id: 8, category: "sports", title: "Compétition sportive", titleAr: "مسابقة رياضية", placeholder: "bg-gradient-to-br from-red-400 to-red-600" },
];

const Gallery = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "all" ? galleryImages : galleryImages.filter(img => img.category === activeCategory);

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
              {isRTL ? 'المعرض' : 'Galerie Photos'}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {isRTL ? 'اكتشف الحياة اليومية في مدرستنا' : 'Découvrez la vie quotidienne à School La Conscience Private.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background bg-pattern-grid">
        <div className="container mx-auto px-4">
          <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 btn-ripple ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {isRTL ? category.nameAr : category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <AnimatedSection key={image.id} animation="scale-in" delay={index * 50}>
                <div
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md image-hover-zoom image-overlay"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className={`absolute inset-0 ${image.placeholder}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl opacity-50">📷</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute bottom-0 left-0 right-0 p-4 ${isRTL ? 'text-right' : ''}`}>
                      <h3 className="text-sm font-semibold text-primary-foreground">{isRTL ? image.titleAr : image.title}</h3>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-full transition-colors" onClick={() => setSelectedImage(null)}>
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className={`aspect-video ${selectedImage.placeholder} flex items-center justify-center`}>
              <span className="text-8xl opacity-50">📷</span>
            </div>
            <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
              <h3 className="text-xl font-bold text-foreground">{isRTL ? selectedImage.titleAr : selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up" className={isRTL ? 'font-arabic' : ''}>
            <h2 className="text-3xl font-bold text-foreground mb-4">{isRTL ? 'تريد رؤية المزيد؟' : 'Envie de voir plus?'}</h2>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button asChild variant="default" size="lg" className="btn-glow btn-ripple">
                <Link to="/contact" className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {isRTL ? 'حدد موعد زيارة' : 'Planifier une visite'}
                  <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-ripple">
                <Link to="/admissions">{t('nav.admissions')}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
