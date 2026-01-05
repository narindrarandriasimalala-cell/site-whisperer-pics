import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Users, Briefcase, Star, Handshake, Clock, Shield } from "lucide-react";
import workflowIllustration from "@/assets/workflow-illustration.png";

const CommentCaMarcheEntreprise = () => {
  const features = [
    {
      icon: Users,
      title: "Suivi simplifié des stagiaires",
      description: "Gérez facilement le suivi de vos stagiaires et alternants avec un outil intuitif.",
    },
    {
      icon: Briefcase,
      title: "Relation école-entreprise",
      description: "Renforcez vos liens avec les établissements partenaires grâce à une communication fluide.",
    },
    {
      icon: Star,
      title: "Évaluation structurée",
      description: "Évaluez les compétences de vos stagiaires avec des grilles d'évaluation personnalisables.",
    },
    {
      icon: Handshake,
      title: "Vivier de talents",
      description: "Construisez un vivier de futurs collaborateurs grâce à un suivi de qualité.",
    },
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Réduisez le temps consacré aux tâches administratives du tutorat.",
    },
    {
      icon: Shield,
      title: "Conformité assurée",
      description: "Respectez les obligations légales du tutorat en toute sérénité.",
    },
  ];

  const benefits = [
    "Accueillez et formez vos stagiaires plus efficacement",
    "Créez des relations durables avec les écoles et universités",
    "Identifiez les meilleurs profils pour vos recrutements futurs",
    "Valorisez l'engagement de vos tuteurs en entreprise",
    "Contribuez à la formation de la nouvelle génération de talents",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                🏢 Pour les entreprises
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Optimisez l'accueil de vos{" "}
                <span className="text-gradient">stagiaires et alternants</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                halfonse facilite le tutorat et renforce vos partenariats avec les établissements de formation.
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
                src={workflowIllustration}
                alt="Workflow de suivi pour entreprises"
                className="w-full rounded-2xl"
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
              Un outil pensé pour les tuteurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simplifiez le quotidien de vos collaborateurs qui encadrent des stagiaires et alternants.
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
                Les bénéfices pour votre entreprise
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
              <h3 className="font-heading text-2xl font-bold mb-6">Votre établissement partenaire utilise halfonse ?</h3>
              <p className="text-muted-foreground mb-6">
                Connectez-vous pour accéder à l'espace tuteur et suivre la progression de vos stagiaires.
              </p>
              <div className="flex flex-col gap-3">
                <Link to="/connexion">
                  <Button variant="hero" size="lg" className="w-full">
                    Accès tuteur
                  </Button>
                </Link>
                <p className="text-center text-sm text-muted-foreground">
                  Pas encore partenaire ?{" "}
                  <Link to="/decouvrir" className="text-primary hover:underline">
                    Recommandez halfonse
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommentCaMarcheEntreprise;
