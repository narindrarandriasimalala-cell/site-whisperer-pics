import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import workflowIllustration from "@/assets/workflow-illustration.png";

const ContinuitySection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-slide-right">
            <img
              src={workflowIllustration}
              alt="Étapes de suivi pédagogique halfonse"
              className="w-full rounded-2xl shadow-md"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-slide-left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              Permettre la continuité pédagogique en stage et alternance
            </h2>

            <div className="space-y-6 mb-8">
              <div className="p-6 rounded-xl bg-secondary/50 border-l-4 border-primary">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Gardez le lien, même de loin
                </h3>
                <p className="text-muted-foreground">
                  halfonse est le tiers de confiance entre vous, vos étudiants et les entreprises accueillantes. Il ne remplace pas l'humain et permet de renforcer les liens.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-secondary/50 border-l-4 border-primary">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Le baromètre de bien-être de vos étudiants
                </h3>
                <p className="text-muted-foreground">
                  Et si vous pouviez suivre le bien-être de vos étudiants en même temps que leur progression, génial non ? On l'a fait.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-secondary/50 border-l-4 border-primary">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Une expérience utilisateur pensée par ses utilisateurs
                </h3>
                <p className="text-muted-foreground">
                  Assez d'outils désertés, halfonse adopte une interface adaptée à chaque type d'utilisateur pour s'intégrer facilement à son usage.
                </p>
              </div>
            </div>

            <Link to="/decouvrir">
              <Button variant="hero" size="lg">
                Découvrir en démo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinuitySection;
