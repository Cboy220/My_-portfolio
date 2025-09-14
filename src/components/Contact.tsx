import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Send, Globe, Smartphone, Github, Linkedin, ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: t('contact.email'),
      value: "cboy88755@gmail.com",
      href: "mailto:cboy88755@gmail.com",
      color: "primary"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      label: t('contact.location'),
      value: "Ontario, Canada",
      href: null,
      color: "tech-purple"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Cboy220",
      description: t('contact.github')
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Send className="h-6 w-6" />
                  </div>
{t('contact.info')}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className={`p-3 rounded-lg bg-${contact.color}/10 text-${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-foreground font-semibold hover:text-primary transition-colors duration-300 flex items-center gap-1"
                        >
                          {contact.value}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      ) : (
                        <div className="text-foreground font-semibold">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
                
              </CardContent>
            </Card>

            {/* Quick Connect */}
            <Card className="bg-gradient-card border-border/50 shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-up [animation-delay:0.1s]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Github className="h-6 w-6" />
                  </div>
{t('contact.connect')}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  {t('contact.description')}
                </p>
                
                <div className="space-y-4 flex flex-col items-center">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="group">
                      <Button
                        variant="outline"
                        className="w-auto px-6 py-3 justify-start gap-3 border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group-hover:scale-[1.02]"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          {social.icon}
                          <div className="text-left">
                            <div className="font-semibold">{social.name}</div>
                            <div className="text-xs text-muted-foreground">{social.description}</div>
                          </div>
                          <ArrowUpRight className="h-4 w-4 ml-auto" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;