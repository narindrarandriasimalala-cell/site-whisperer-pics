import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 gradient-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-background rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-background rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Prêt à transformer le suivi pédagogique de vos étudiants ?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Rejoignez les établissements qui font confiance à halfonse pour valoriser les périodes de stage et d'alternance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/decouvrir">
              <Button
                size="xl"
                className="bg-background text-primary hover:bg-background/90 font-semibold shadow-lg"
              >
                Réserver une démo gratuite
              </Button>
            </Link>
            <Link to="/manifesto">
              <Button
                size="xl"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              >
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
