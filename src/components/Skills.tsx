import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  Blocks, 
  Globe, 
  GitBranch, 
  Users,
  Smartphone,
  ShoppingCart
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: <Code className="h-6 w-6" />,
      color: "tech-blue",
      skills: ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Angular", "VueJS", "NextJS", "Svelte"]
    },
    {
      title: t('skills.backend'), 
      icon: <Server className="h-6 w-6" />,
      color: "tech-purple",
      skills: ["Node.js", "Express.js", "PHP", "Laravel", "Python", "Django", "Ruby", "Ruby on Rails", "Java"]
    },
    {
      title: t('skills.database'),
      icon: <Database className="h-6 w-6" />,
      color: "tech-cyan",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Database Design", "Query Optimization"]
    },
    {
      title: t('skills.blockchain'),
      icon: <Blocks className="h-6 w-6" />,
      color: "success",
      skills: ["Solidity", "Smart Contracts", "Web3.js", "Ethereum", "Binance Smart Chain", "ERC Standards"]
    },
    {
      title: t('skills.fullstack'),
      icon: <Globe className="h-6 w-6" />,
      color: "warning",
      skills: ["MERN Stack", "MEAN Stack", "Next.js", "Full Stack Architecture"]
    },
    {
      title: t('skills.styling'),
      icon: <Palette className="h-6 w-6" />,
      color: "accent",
      skills: ["Tailwind CSS", "Styled Components", "Material-UI", "CSS Modules", "Responsive Design"]
    },
    {
      title: t('skills.ecommerce'),
      icon: <ShoppingCart className="h-6 w-6" />,
      color: "primary",
      skills: ["WordPress", "WooCommerce", "Shopify", "E-commerce Solutions"]
    },
    {
      title: t('skills.tools'),
      icon: <GitBranch className="h-6 w-6" />,
      color: "tech-blue",
      skills: ["Git", "GitHub", "Bitbucket", "Agile Development", "Test Driven Development", "Scrum", "AI", "CRM"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-${category.color}/10 text-${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Experience Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center animate-fade-in">
            {t('skills.achievements')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-up">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">750K</div>
                <div className="text-sm text-muted-foreground mb-2">{t('skills.project_value')}</div>
                <p className="text-xs text-muted-foreground">{t('skills.project_value_desc')}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-up [animation-delay:0.1s]">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-tech-purple mb-2">30%</div>
                <div className="text-sm text-muted-foreground mb-2">{t('skills.query_efficiency')}</div>
                <p className="text-xs text-muted-foreground">{t('skills.query_efficiency_desc')}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-up [animation-delay:0.2s]">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-tech-cyan mb-2">240%</div>
                <div className="text-sm text-muted-foreground mb-2">{t('skills.cost_reduction')}</div>
                <p className="text-xs text-muted-foreground">{t('skills.cost_reduction_desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;