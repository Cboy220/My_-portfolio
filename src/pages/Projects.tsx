import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";


const Projects = () => {
  const { t } = useLanguage();
  
  // Dynamic project data with translations
  const projects = [
    {
      id: 1,
      title: t('project1.title'),
      description: t('project1.description'),
      image: "/img/1.jpg",
      technologies: ["React", "Node.js", "Firebase", "OpenAI Dall-E", "Google Cloud AI"]
    },
    {
      id: 2,
      title: t('project2.title'),
      description: t('project2.description'),
      image: "/img/2.jpg",
      technologies: ["Android", "iOS", "Google Maps", "OpenAI Dall-E", "Google Cloud AI"]
    },
    {
      id: 3,
      title: t('project3.title'),
      description: t('project3.description'),
      image: "/img/3.jpg",
      technologies: ["iOS", "iPhone", "Node.js", "ChatGPT", "OpenAI Dall-E"]
    },
    {
      id: 4,
      title: t('project4.title'),
      description: t('project4.description'),
      image: "/img/4.jpg",
      technologies: ["Python", "AI", "Machine Learning", "Next.js", "OpenAI Dall-E"]
    },
    {
      id: 5,
      title: t('project5.title'),
      description: t('project5.description'),
      image: "/img/5.jpg",
      technologies: ["API", "CRM", "AI", "OpenAI Dall-E"]
    },
    {
      id: 6,
      title: t('project6.title'),
      description: t('project6.description'),
      image: "/img/6.jpg",
      technologies: ["React", "Blockchain", "Smarty", "Solidity", "Web Development"]
    }
  ];
  
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-tech opacity-5 animate-tech-gradient bg-[length:400%_400%]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
      <div className="absolute top-48 right-20 w-3 h-3 bg-tech-purple rounded-full animate-pulse [animation-delay:1s]"></div>
      <div className="absolute bottom-40 left-16 w-1.5 h-1.5 bg-tech-cyan rounded-full animate-pulse [animation-delay:2s]"></div>
      <div className="absolute bottom-32 right-32 w-2.5 h-2.5 bg-primary rounded-full animate-pulse [animation-delay:1.5s]"></div>
      
      <Header />
      
      <main className="pt-20 pb-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent animate-slide-up">
              {t('projects.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up [animation-delay:0.2s]">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden bg-gradient-card border-border/20 shadow-glow hover:shadow-strong transition-all duration-500 hover:scale-[1.02] animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Project Image */}
                    <div className="lg:w-1/3 min-h-[300px] bg-gradient-accent flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-tech opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-500"></div>
                    </div>
                    
                    {/* Project Details */}
                    <div className="lg:w-2/3 p-8 lg:p-12 relative">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-8 leading-relaxed text-base lg:text-lg">
                        {project.description}
                      </p>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-tech-blue mb-4 uppercase tracking-wider">
                          {t('projects.technologies')}
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300 px-3 py-1.5 text-sm font-medium"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Decorative gradient overlay */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-tech opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;