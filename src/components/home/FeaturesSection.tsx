import { MessageCircle, Clock, Handshake } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    emoji: "💭",
    title: "Simplifiez la communication",
    description: "entre les parties prenantes de la période en entreprise : étudiant, tuteur et référent",
  },
  {
    icon: Clock,
    emoji: "⏰",
    title: "Gagnez du temps",
    description: "sur les tâches chronophages du suivi grâce à l'algorithme d'alerte de halfonse",
  },
  {
    icon: Handshake,
    emoji: "🤝",
    title: "Mettez en synergie",
    description: "les relations entreprise et la pédagogie pour décupler la valeur de votre formation",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Le pouvoir d'un suivi pédagogique{" "}
            <span className="text-gradient">simplifié</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl gradient-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6">{feature.emoji}</div>
              <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
