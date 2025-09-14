import { useLanguage } from "@/contexts/LanguageContext";

const TechStacks = () => {
  const { t } = useLanguage();
  const techStacks = [
    "JavaScript", "TypeScript", "HTML", "CSS", "React", "Node.js", 
    "MongoDB", "Express.js", "Angular", "Vue.js", "Next.js", "Python", 
    "Django", "PHP", "Laravel", "Java", "Ruby", "Ruby on Rails", 
    "Solidity", "Web3.js", "Ethereum", "Smart Contracts", "Blockchain",
    "MySQL", "PostgreSQL", "Git", "Docker", "AWS", "Tailwind CSS"
  ];

  return (
    <section className="py-16 overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-tech bg-clip-text text-transparent">
            {t('techstacks.title')}
          </h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right">
            <div className="flex gap-8 pr-8">
              {techStacks.map((tech, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 px-6 py-3 bg-card border border-border/10 rounded-full 
                           text-card-foreground font-medium shadow-soft hover:shadow-glow 
                           transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  {tech}
                </div>
              ))}
            </div>
            <div className="flex gap-8">
              {techStacks.map((tech, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 px-6 py-3 bg-card border border-border/10 rounded-full 
                           text-card-foreground font-medium shadow-soft hover:shadow-glow 
                           transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStacks;