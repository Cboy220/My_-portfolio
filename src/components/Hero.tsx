import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Send, FileDown, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-tech opacity-5 animate-tech-gradient bg-[length:400%_400%]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content Section */}
          <div className="animate-fade-in">
            {/* Main heading */}
            <h1 className="text-6xl md:text-5xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent animate-slide-up">
              {t('hero.title')}
            </h1>
            
            {/* Description */}
            <div className="text-lg md:text-xl text-foreground/85 mb-12 leading-relaxed animate-slide-up [animation-delay:0.2s] space-y-4">
               <p className="text-foreground/85 font-medium">
                 {t('hero.intro')}
               </p>
              
               <p className="text-foreground/85">
                 {t('hero.specialization')}
               </p>
              
               <p className="text-foreground/85">
                 {t('hero.expertise')}
               </p>
              
               <p className="text-foreground/85">
                 {t('hero.achievements')}
               </p>
              
               <p className="text-foreground/85">
                 {t('hero.passion')}
               </p>
            </div>
          
          </div>

          {/* Photo Section */}
          <div className="flex justify-center animate-fade-in [animation-delay:0.3s]">
            <div className="relative">
              {/* Circular photo placeholder */}
              <div className="w-96 h-96 rounded-full bg-gradient-tech p-1 shadow-glow">
                <div className="w-full h-full rounded-full bg-muted/30 border-2 border-border/20 flex items-center justify-center">
                  <img 
                    src="/img/dev.png" 
                    alt="Henry Lee" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Decorative rings */}
              <div className="absolute -inset-6 rounded-full border border-primary/20 animate-pulse"></div>
              <div className="absolute -inset-12 rounded-full border border-tech-blue/10 animate-pulse [animation-delay:1s]"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Stars */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-tech-blue rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-tech-purple rounded-full animate-pulse [animation-delay:1s]"></div>
      <div className="absolute bottom-32 left-16 w-1 h-1 bg-tech-cyan rounded-full animate-pulse [animation-delay:2s]"></div>
      <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-primary rounded-full animate-pulse [animation-delay:1.5s]"></div>
      
      {/* Floating Stars Animation */}
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-float-slow [animation-delay:0s]"></div>
      <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-tech-blue/50 rounded-full animate-float-medium [animation-delay:2s]"></div>
      <div className="absolute top-60 left-1/3 w-2.5 h-2.5 bg-tech-purple/40 rounded-full animate-float-fast [animation-delay:4s]"></div>
      <div className="absolute top-80 right-1/4 w-1.5 h-1.5 bg-tech-cyan/60 rounded-full animate-float-slow [animation-delay:1s]"></div>
      <div className="absolute top-96 left-1/5 w-2 h-2 bg-white/40 rounded-full animate-float-medium [animation-delay:3s]"></div>
      
      <div className="absolute bottom-40 right-1/5 w-2.5 h-2.5 bg-tech-blue/50 rounded-full animate-float-fast [animation-delay:0.5s]"></div>
      <div className="absolute bottom-60 left-1/4 w-1.5 h-1.5 bg-tech-purple/60 rounded-full animate-float-slow [animation-delay:2.5s]"></div>
      <div className="absolute bottom-80 right-1/3 w-2 h-2 bg-tech-cyan/40 rounded-full animate-float-medium [animation-delay:4.5s]"></div>
      <div className="absolute bottom-96 left-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-float-fast [animation-delay:1.5s]"></div>
      
      {/* Additional scattered stars */}
      <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-tech-blue/30 rounded-full animate-float-slow [animation-delay:3.5s]"></div>
      <div className="absolute top-1/3 right-1/6 w-1.5 h-1.5 bg-white/30 rounded-full animate-float-medium [animation-delay:0.8s]"></div>
      <div className="absolute top-1/2 left-1/8 w-2.5 h-2.5 bg-tech-purple/30 rounded-full animate-float-fast [animation-delay:2.2s]"></div>
      <div className="absolute top-2/3 right-1/8 w-1.5 h-1.5 bg-tech-cyan/30 rounded-full animate-float-slow [animation-delay:4.2s]"></div>
      <div className="absolute top-3/4 left-1/7 w-2 h-2 bg-white/30 rounded-full animate-float-medium [animation-delay:1.8s]"></div>
    </section>
  );
};

export default Hero;