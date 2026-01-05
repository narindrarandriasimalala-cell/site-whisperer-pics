import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Users, Calendar, BarChart3, Bell, FileText, MessageSquare } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const CommentCaMarcheEcole = () => {
  const features = [
    {
      icon: Users,
      title: "Gestion centralisée des étudiants",
      description: "Suivez tous vos étudiants en stage et alternance depuis un seul tableau de bord.",
    },
    {
      icon: Bell,
      title: "Alertes intelligentes",
      description: "Recevez des notifications en temps réel pour les événements nécessitant votre attention.",
    },
    {
      icon: Calendar,
      title: "Planification des visites",
      description: "Organisez et planifiez vos visites en entreprise de manière optimale.",
    },
    {
      icon: BarChart3,
      title: "Rapports et statistiques",
      description: "Analysez les performances et la progression de vos étudiants avec des rapports détaillés.",
    },
    {
      icon: FileText,
      title: "Documents dématérialisés",
      description: "Gérez tous les documents de suivi en ligne : conventions, évaluations, bilans.",
    },
    {
      icon: MessageSquare,
      title: "Communication simplifiée",
      description: "Échangez facilement avec les tuteurs en entreprise et les étudiants.",
    },
  ];

  const benefits = [
    "Gagnez jusqu'à 50% de temps sur le suivi administratif",
    "Identifiez rapidement les étudiants en difficulté",
    "Améliorez la qualité de l'accompagnement pédagogique",
    "Renforcez les liens avec les entreprises partenaires",
    "Respectez les exigences réglementaires automatiquement",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                🏫 Pour les établissements
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Simplifiez le suivi de vos{" "}
                <span className="text-gradient">stages et alternances</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                halfonse vous aide à gagner du temps, à améliorer la communication avec les entreprises et à offrir un meilleur accompagnement à vos étudiants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/decouvrir">
                  <Button variant="hero" size="xl">
                    Demander une démo
                  </Button>
                </Link>
                <Link to="/manifesto">
                  <Button variant="heroOutline" size="xl">
                    Notre approche
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroDashboard}
                alt="Dashboard halfonse pour établissements"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Tout ce dont votre établissement a besoin
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une plateforme complète pour gérer le suivi pédagogique de bout en bout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                Les avantages pour votre établissement
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-md animate-fade-up">
              <h3 className="font-heading text-2xl font-bold mb-6">Prêt à commencer ?</h3>
              <p className="text-muted-foreground mb-6">
                Découvrez comment halfonse peut transformer le suivi pédagogique de votre établissement lors d'une démonstration personnalisée.
              </p>
              <Link to="/decouvrir">
                <Button variant="hero" size="lg" className="w-full">
                  Réserver une démo gratuite
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommentCaMarcheEcole;
