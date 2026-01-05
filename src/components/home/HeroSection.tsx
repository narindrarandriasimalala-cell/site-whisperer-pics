import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-[90vh] flex items-center py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              La plateforme qui facilite{" "}
              <span className="text-gradient">le suivi pédagogique</span>{" "}
              de vos étudiants en entreprise
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Avec halfonse, valorisez les périodes de stage et d'alternance de vos étudiants
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/decouvrir">
                <Button variant="hero" size="xl">
                  Découvrir halfonse
                </Button>
              </Link>
              <Link to="/manifesto">
                <Button variant="heroOutline" size="xl">
                  Notre mission
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <img
                src={heroDashboard}
                alt="Plateforme halfonse - gestion du suivi pédagogique"
                className="w-full rounded-2xl shadow-lg animate-float"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
