import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStacks from "@/components/TechStacks";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TechStacks />
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
