import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      title: t('exp1.title'),
      company: t('exp1.company'),
      location: t('exp1.location'),
      period: t('exp1.period'),
      current: true,
      achievements: [
        t('exp1.achievement1'),
        t('exp1.achievement2'),
        t('exp1.achievement3')
      ],
      skills: ["React", "Web3.js", "Node.js", "MongoDB", "PostgreSQL", "Smart Contracts"]
    },
    {
      title: t('exp2.title'),
      company: t('exp2.company'),
      location: t('exp2.location'),
      period: t('exp2.period'),
      current: false,
      achievements: [
        t('exp2.achievement1'),
        t('exp2.achievement2'),
        t('exp2.achievement3'),
        t('exp2.achievement4'),
        t('exp2.achievement5')
      ],
      skills: ["Ethereum", "Solidity", "Binance Smart Chain", "ERC Standards", "System Architecture"]
    },
    {
      title: t('exp3.title'),
      company: t('exp3.company'),
      location: t('exp3.location'),
      period: t('exp3.period'),
      current: false,
      achievements: [
        t('exp3.achievement1'),
        t('exp3.achievement2'),
        t('exp3.achievement3'),
        t('exp3.achievement4')
      ],
      skills: ["Performance Optimization", "UI/UX", "Algorithm Design", "Customer Support"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span className="font-semibold text-primary">{exp.company}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Globe className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {exp.current && (
                    <Badge className="bg-success/10 text-success border-success/20 w-fit">
                      {t('experience.current')}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;