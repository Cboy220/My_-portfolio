import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, Briefcase, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();
  
  const education = [
    {
      degree: t('education.degree1'),
      institution: t('education.institution1'),
      location: t('education.location1'),
      period: t('education.period1'),
      type: t('education.type1'),
      achievements: [t('education.achievement1')]
    },
    {
      degree: t('education.degree2'),
      institution: t('education.institution2'),
      location: t('education.location2'),
      period: t('education.period2'),
      type: t('education.type2'),
      achievements: [t('education.achievement2')]
    }
  ];

  const strengths = [
    {
      title: t('education.gold_medalist'),
      description: t('education.gold_medalist_desc'),
      icon: <Trophy className="h-6 w-6" />,
      color: "warning"
    },
    {
      title: t('education.csr'),
      description: t('education.csr_desc'),
      icon: <BookOpen className="h-6 w-6" />,
      color: "success"
    }
  ];

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {t('education.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
            {t('education.subtitle')}
          </p>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center animate-fade-in">
            {t('education.academic')}
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <CardTitle className="text-xl font-bold text-foreground">
                          {edu.degree}
                        </CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 w-fit">
                          {edu.type}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-3">
                        <span className="font-semibold text-primary">{edu.institution}</span>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Globe className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strengths & Recognition */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center animate-fade-in">
            {t('education.recognition')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up group"
                style={{ animationDelay: `${0.3 + 0.1 * index}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${strength.color}/10 text-${strength.color} group-hover:scale-110 transition-transform duration-300`}>
                      {strength.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {strength.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;