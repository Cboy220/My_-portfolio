import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // We're already on home page, just scroll to section
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-foreground">
            Henry Lee
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              onClick={() => navigateToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.about')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigateToSection('experience')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.experience')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigateToSection('skills')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.skills')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigateToSection('education')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.education')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigateToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/projects')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.projects')}
            </Button>
            
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className="flex items-center justify-between"
                >
                  English
                  {language === 'en' && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('pt')}
                  className="flex items-center justify-between"
                >
                  Português
                  {language === 'pt' && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;