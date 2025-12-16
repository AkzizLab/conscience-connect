import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'ar';

interface Translations {
  [key: string]: {
    fr: string;
    ar: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { fr: 'Accueil', ar: 'الرئيسية' },
  'nav.about': { fr: 'À Propos', ar: 'من نحن' },
  'nav.programs': { fr: 'Programmes', ar: 'البرامج' },
  'nav.activities': { fr: 'Activités', ar: 'الأنشطة' },
  'nav.admissions': { fr: 'Inscriptions', ar: 'التسجيل' },
  'nav.gallery': { fr: 'Galerie', ar: 'المعرض' },
  'nav.contact': { fr: 'Contact', ar: 'اتصل بنا' },

  // Header
  'header.school_name': { fr: 'School La Conscience Private', ar: 'مدرسة الوعي الخاصة' },
  'header.school_subtitle': { fr: 'École Privée • Ouarzazate', ar: 'مدرسة خاصة • ورزازات' },
  'header.register': { fr: 'Inscrivez-vous', ar: 'سجّل الآن' },
  'header.register_now': { fr: 'Inscrivez-vous maintenant', ar: 'سجّل الآن' },

  // Hero Section
  'hero.badge': { fr: 'Inscriptions 2025/2026 Ouvertes', ar: 'التسجيلات مفتوحة 2025/2026' },
  'hero.tagline': { fr: 'Là où grandissent les leaders de demain', ar: 'حيث ينمو قادة المستقبل' },
  'hero.subtitle': { fr: 'Excellence in education with holistic programs in Ouarzazate.', ar: 'التميز في التعليم مع برامج شاملة في ورزازات.' },
  'hero.cta_register': { fr: 'Inscrivez-vous', ar: 'سجّل الآن' },
  'hero.cta_contact': { fr: 'Contactez-nous', ar: 'تواصل معنا' },

  // Stats
  'stats.levels': { fr: 'Niveaux', ar: 'مستويات' },
  'stats.languages': { fr: 'Langues', ar: 'لغات' },
  'stats.activities': { fr: 'Activités', ar: 'أنشطة' },
  'stats.success': { fr: 'Réussite', ar: 'نجاح' },

  // Programs Section
  'programs.title': { fr: 'Nos Programmes', ar: 'برامجنا التعليمية' },
  'programs.subtitle': { fr: 'Un parcours éducatif complet de la petite enfance au lycée, adapté à chaque étape de développement.', ar: 'مسار تعليمي متكامل من الطفولة المبكرة إلى الثانوية، يتكيف مع كل مرحلة من مراحل النمو.' },
  'programs.discover': { fr: 'Découvrir tous les programmes', ar: 'اكتشف جميع البرامج' },
  'programs.early': { fr: 'Petite Enfance', ar: 'التعليم الأولي' },
  'programs.early_desc': { fr: 'Éveil et préparation pour les tout-petits dans un environnement stimulant.', ar: 'تفتح وإعداد للصغار في بيئة محفزة.' },
  'programs.primary': { fr: 'Primaire', ar: 'التعليم الابتدائي' },
  'programs.primary_desc': { fr: 'Fondations solides en langues, sciences et mathématiques.', ar: 'أسس متينة في اللغات والعلوم والرياضيات.' },
  'programs.middle': { fr: 'Collège', ar: 'الثانوي الإعدادي' },
  'programs.middle_desc': { fr: 'Développement des compétences critiques et créatives.', ar: 'تطوير المهارات النقدية والإبداعية.' },
  'programs.secondary': { fr: 'Lycée', ar: 'الثانوي التأهيلي' },
  'programs.secondary_desc': { fr: 'Préparation aux études supérieures et à la vie professionnelle.', ar: 'التحضير للدراسات العليا والحياة المهنية.' },

  // Why Choose Us
  'why.title': { fr: 'Pourquoi La Conscience?', ar: 'لماذا مدرسة الوعي؟' },
  'why.subtitle': { fr: 'Notre établissement offre un environnement d\'apprentissage exceptionnel où chaque élève peut s\'épanouir et atteindre son plein potentiel.', ar: 'مؤسستنا توفر بيئة تعليمية استثنائية حيث يمكن لكل تلميذ أن يزدهر ويحقق كامل إمكاناته.' },
  'why.trilingual': { fr: 'Enseignement trilingue: Arabe, Français, Anglais', ar: 'تعليم ثلاثي اللغات: العربية، الفرنسية، الإنجليزية' },
  'why.small_classes': { fr: 'Classes à effectifs réduits pour un suivi personnalisé', ar: 'أقسام بأعداد محدودة للمتابعة الشخصية' },
  'why.activities': { fr: 'Activités parascolaires variées tout au long de l\'année', ar: 'أنشطة موازية متنوعة طوال السنة' },
  'why.teachers': { fr: 'Équipe pédagogique qualifiée et dévouée', ar: 'فريق تربوي مؤهل ومتفانٍ' },
  'why.environment': { fr: 'Environnement sécurisé et stimulant', ar: 'بيئة آمنة ومحفزة' },
  'why.learn_more': { fr: 'En savoir plus', ar: 'اقرأ المزيد' },

  // Features
  'feature.excellence': { fr: 'Excellence Académique', ar: 'التميز الأكاديمي' },
  'feature.excellence_desc': { fr: 'Programmes rigoureux avec des résultats exceptionnels.', ar: 'برامج صارمة بنتائج استثنائية.' },
  'feature.team': { fr: 'Équipe Qualifiée', ar: 'فريق مؤهل' },
  'feature.team_desc': { fr: 'Enseignants expérimentés et dévoués à la réussite de chaque élève.', ar: 'معلمون ذوو خبرة ومتفانون في نجاح كل تلميذ.' },
  'feature.trilingual': { fr: 'Éducation Trilingue', ar: 'تعليم ثلاثي اللغات' },
  'feature.trilingual_desc': { fr: 'Arabic, French, and English for global competence.', ar: 'العربية والفرنسية والإنجليزية للكفاءة العالمية.' },
  'feature.follow': { fr: 'Suivi Personnalisé', ar: 'متابعة شخصية' },
  'feature.follow_desc': { fr: 'Attention individuelle pour un développement optimal.', ar: 'اهتمام فردي للتطوير الأمثل.' },

  // CTA Section
  'cta.title': { fr: 'Inscriptions 2025/2026', ar: 'التسجيلات 2025/2026' },
  'cta.subtitle': { fr: 'التسجيلات مفتوحة للموسم الدراسي 2025/2026', ar: 'التسجيلات مفتوحة للموسم الدراسي 2025/2026' },
  'cta.limited': { fr: 'Places limitées - Réservez dès maintenant pour garantir l\'avenir de votre enfant.', ar: 'أماكن محدودة - احجز الآن لضمان مستقبل طفلك.' },
  'cta.register_child': { fr: 'Inscrivez votre enfant', ar: 'سجّل طفلك' },

  // Footer
  'footer.about_text': { fr: 'Établissement La Conscience de l\'enseignement scolaire privé - Excellence in education with holistic programs.', ar: 'مدرسة الوعي الخاصة للتعليم - الجودة والتميز في التربية والتعليم' },
  'footer.quick_links': { fr: 'Liens Rapides', ar: 'روابط سريعة' },
  'footer.contact': { fr: 'Contact', ar: 'اتصل بنا' },
  'footer.follow': { fr: 'Suivez-nous', ar: 'تابعونا' },
  'footer.hours': { fr: 'Horaires', ar: 'أوقات العمل' },
  'footer.hours_weekday': { fr: 'Lun - Ven: 8h00 - 17h00', ar: 'الاثنين - الجمعة: 8:00 - 17:00' },
  'footer.hours_weekend': { fr: 'Sam: 8h00 - 12h00', ar: 'السبت: 8:00 - 12:00' },
  'footer.rights': { fr: 'Tous droits réservés.', ar: 'جميع الحقوق محفوظة.' },

  // About Page
  'about.title': { fr: 'À Propos de Nous', ar: 'من نحن' },
  'about.hero_text': { fr: 'Établissement La Conscience de l\'enseignement scolaire privé - Une institution dédiée à l\'excellence éducative à Ouarzazate.', ar: 'مدرسة الوعي للتعليم الخصوصي - مؤسسة مكرسة للتميز التعليمي في ورزازات.' },
  'about.mission': { fr: 'Notre Mission', ar: 'مهمتنا' },
  'about.mission_text': { fr: 'Offrir un environnement d\'apprentissage sûr, stimulant et axé sur l\'excellence, avec des enseignants qualifiés et un personnel dévoué au développement global de chaque enfant.', ar: 'توفير بيئة تعليمية آمنة ومحفزة تركز على الجودة والتميز، مع معلمين مؤهلين وفريق عمل متفانٍ في التطوير الشامل لكل طفل.' },
  'about.vision': { fr: 'Notre Vision', ar: 'رؤيتنا' },
  'about.vision_text': { fr: 'Être l\'établissement de référence à Ouarzazate, formant des citoyens responsables, créatifs et ouverts sur le monde, prêts à relever les défis du 21ème siècle.', ar: 'أن نكون المؤسسة التعليمية المرجعية في ورزازات، نُخرِّج مواطنين مسؤولين ومبدعين ومنفتحين على العالم، مستعدين لمواجهة تحديات القرن الحادي والعشرين.' },
  'about.values': { fr: 'Nos Valeurs', ar: 'قيمنا' },
  'about.values_subtitle': { fr: 'Les principes qui guident notre approche éducative et notre engagement envers chaque élève.', ar: 'المبادئ التي توجه منهجنا التعليمي والتزامنا تجاه كل تلميذ.' },
  'about.history': { fr: 'Notre Histoire', ar: 'تاريخنا' },
  'about.team': { fr: 'Une Équipe Dévouée', ar: 'فريق متفانٍ' },
  'about.team_text': { fr: 'Notre équipe pédagogique est composée d\'enseignants qualifiés et passionnés, engagés dans la réussite de chaque élève.', ar: 'فريقنا التربوي يتكون من معلمين مؤهلين وشغوفين، ملتزمين بنجاح كل تلميذ.' },
  'about.certified': { fr: 'Enseignants Certifiés', ar: 'معلمون معتمدون' },
  'about.small_classes': { fr: 'Classes Réduites', ar: 'أقسام صغيرة' },
  'about.join_family': { fr: 'Rejoignez la famille La Conscience', ar: 'انضموا لعائلة الوعي' },
  'about.join_text': { fr: 'Offrez à votre enfant l\'éducation qu\'il mérite dans un environnement d\'excellence.', ar: 'امنح طفلك التعليم الذي يستحقه في بيئة متميزة.' },

  // Values
  'value.excellence': { fr: 'Excellence', ar: 'التميز' },
  'value.excellence_desc': { fr: 'Nous visons l\'excellence dans tous les aspects de l\'éducation.', ar: 'نسعى للتميز في جميع جوانب التعليم.' },
  'value.care': { fr: 'Bienveillance', ar: 'الرعاية' },
  'value.care_desc': { fr: 'Un environnement chaleureux et sécurisant pour chaque enfant.', ar: 'بيئة دافئة وآمنة لكل طفل.' },
  'value.creativity': { fr: 'Créativité', ar: 'الإبداع' },
  'value.creativity_desc': { fr: 'Encourager la pensée créative et l\'innovation.', ar: 'تشجيع التفكير الإبداعي والابتكار.' },
  'value.openness': { fr: 'Ouverture', ar: 'الانفتاح' },
  'value.openness_desc': { fr: 'Éducation multilingue et ouverture sur le monde.', ar: 'تعليم متعدد اللغات وانفتاح على العالم.' },
  'value.integrity': { fr: 'Intégrité', ar: 'النزاهة' },
  'value.integrity_desc': { fr: 'Valeurs morales et éthiques au cœur de notre enseignement.', ar: 'القيم الأخلاقية في صميم تعليمنا.' },
  'value.community': { fr: 'Communauté', ar: 'المجتمع' },
  'value.community_desc': { fr: 'Partenariat actif avec les familles et la communauté.', ar: 'شراكة فعالة مع الأسر والمجتمع.' },

  // Common
  'common.register_2025': { fr: 'Inscription 2025/2026', ar: 'التسجيل 2025/2026' },
  'common.contact_us': { fr: 'Nous contacter', ar: 'تواصل معنا' },
  'common.learn_more': { fr: 'En savoir plus', ar: 'اقرأ المزيد' },
  'common.whatsapp': { fr: 'WhatsApp', ar: 'واتساب' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.fr || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
