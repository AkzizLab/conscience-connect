import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: isRTL ? "تم إرسال الرسالة!" : "Message envoyé!", description: isRTL ? "سنرد عليكم في أقرب وقت." : "Nous vous répondrons rapidement." });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern-dots">
          <div className="absolute top-20 left-10 w-72 h-72 bg-school-gold rounded-full blur-3xl animate-float" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center hero-enter ${isRTL ? 'font-arabic' : ''}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {isRTL ? 'اتصل بنا' : 'Contactez-nous'}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {isRTL ? 'نحن في خدمتكم لأي استفسار' : 'Nous sommes à votre écoute pour toute question.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background bg-pattern-grid">
        <div className="container mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-12 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            <AnimatedSection animation="slide-right">
              <h2 className={`text-3xl font-bold text-foreground mb-8 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {isRTL ? 'معلومات الاتصال' : 'Informations de Contact'}
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: isRTL ? 'العنوان' : 'Adresse', content: 'Hay Fadragom, Ouarzazate', subContent: 'زنقة تنقرت حي فضراكم، ورزازات' },
                  { icon: Phone, title: isRTL ? 'الهاتف' : 'Téléphone', content: '+212 661-392813', subContent: '+212 660-123650', isLink: true },
                  { icon: Clock, title: isRTL ? 'أوقات العمل' : 'Horaires', content: t('footer.hours_weekday'), subContent: t('footer.hours_weekend') },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 p-6 bg-card rounded-2xl shadow-md card-hover ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 icon-hover">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.isLink ? (
                        <>
                          <a href={`tel:${item.content.replace(/\s|-/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors block nav-link-hover">{item.content}</a>
                          <a href={`tel:${item.subContent?.replace(/\s|-/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors block nav-link-hover">{item.subContent}</a>
                        </>
                      ) : (
                        <>
                          <p className="text-muted-foreground">{item.content}</p>
                          <p className="text-muted-foreground font-arabic">{item.subContent}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}

                <div className={`flex items-start gap-4 p-6 bg-school-green/10 rounded-2xl border-2 border-school-green/20 card-hover ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="w-12 h-12 rounded-xl bg-school-green flex items-center justify-center flex-shrink-0 icon-hover">
                    <MessageCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground mb-3">{isRTL ? 'تواصل معنا مباشرة عبر واتساب' : 'Contactez-nous directement'}</p>
                    <Button asChild variant="whatsapp" size="default" className="btn-ripple">
                      <a href="https://wa.me/212661392813" target="_blank" rel="noopener noreferrer">
                        {isRTL ? 'افتح واتساب' : 'Ouvrir WhatsApp'}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" className={isRTL ? 'lg:col-start-1' : ''}>
              <div className="bg-card rounded-3xl p-8 shadow-lg card-hover">
                <h2 className={`text-2xl font-bold text-foreground mb-2 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'أرسل لنا رسالة' : 'Envoyez-nous un message'}
                </h2>
                <p className={`text-muted-foreground mb-6 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'سنرد عليكم في أقرب وقت' : 'Nous vous répondrons rapidement.'}
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : ''}`}>{isRTL ? 'الاسم الكامل *' : 'Nom complet *'}</label>
                      <Input name="name" required value={formData.name} onChange={handleChange} placeholder={isRTL ? 'اسمكم' : 'Votre nom'} className="h-12" />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : ''}`}>{isRTL ? 'الهاتف *' : 'Téléphone *'}</label>
                      <Input name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+212 6XX-XXXXXX" className="h-12" />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : ''}`}>Email</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" className="h-12" />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : ''}`}>{isRTL ? 'الموضوع *' : 'Sujet *'}</label>
                    <Input name="subject" required value={formData.subject} onChange={handleChange} placeholder={isRTL ? 'طلب تسجيل' : 'Demande d\'inscription'} className="h-12" />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium text-foreground mb-2 ${isRTL ? 'text-right' : ''}`}>{isRTL ? 'الرسالة *' : 'Message *'}</label>
                    <Textarea name="message" required value={formData.message} onChange={handleChange} placeholder={isRTL ? 'رسالتكم...' : 'Votre message...'} rows={5} className={`resize-none ${isRTL ? 'text-right' : ''}`} />
                  </div>
                  <Button type="submit" variant="default" size="lg" className="w-full btn-glow btn-ripple" disabled={isSubmitting}>
                    {isSubmitting ? (isRTL ? 'جاري الإرسال...' : 'Envoi...') : (
                      <><Send className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />{isRTL ? 'إرسال الرسالة' : 'Envoyer'}</>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">{isRTL ? 'موقعنا' : 'Notre Emplacement'}</h2>
          </AnimatedSection>
          <div className="rounded-3xl overflow-hidden shadow-lg h-96 bg-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54584.91741582457!2d-6.9357!3d30.9184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda3c8e80b5a71cb%3A0x9a7a3de16baec32!2sOuarzazate!5e0!3m2!1sen!2sma!4v1702900000000!5m2!1sen!2sma"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
