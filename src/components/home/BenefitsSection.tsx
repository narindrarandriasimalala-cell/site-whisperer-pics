import { Check } from "lucide-react";
import connectionIllustration from "@/assets/connection-illustration.png";

const benefitGroups = [
  {
    title: "Pour votre établissement",
    benefits: [
      "Gagnez du temps en simplifiant et centralisant votre suivi",
      "Identifiez en un clin d'œil les événements qui nécessitent votre intervention",
      "Faites évoluer votre formation en accord avec les besoins du marché",
    ],
  },
  {
    title: "Pour vos étudiants",
    benefits: [
      "Avoir quelqu'un sur qui compter pendant toute la durée de la formation",
      "Identifier leurs compétences et leur valeur ajoutée",
      "Nouer une relation forte et pérenne avec l'entreprise d'accueil",
    ],
  },
  {
    title: "Pour vos entreprises d'accueil",
    benefits: [
      "Centraliser et renforcer les relations et les échanges",
      "Soutenir l'accompagnement et la formation dispensée par les entreprises",
      "Suivre opérationnellement la période pour booster l'employabilité",
    ],
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-32 gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            La première plateforme de gestion du{" "}
            <span className="text-gradient">suivi pédagogique</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Benefits List */}
          <div className="space-y-8">
            {benefitGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm animate-fade-up"
                style={{ animationDelay: `${groupIndex * 0.1}s` }}
              >
                <h3 className="font-heading text-xl font-semibold mb-4 text-primary">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Illustration */}
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <img
              src={connectionIllustration}
              alt="Connexion entre étudiants, tuteurs et référents"
              className="w-full max-w-md rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
