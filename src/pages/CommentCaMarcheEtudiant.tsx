import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, BookOpen, Target, MessageCircle, Award, TrendingUp, Heart } from "lucide-react";
import connectionIllustration from "@/assets/connection-illustration.png";

const CommentCaMarcheEtudiant = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Suivi de progression",
      description: "Visualisez votre évolution et vos acquis tout au long de votre période en entreprise.",
    },
    {
      icon: Target,
      title: "Objectifs clairs",
      description: "Définissez et suivez vos objectifs avec votre tuteur et votre référent.",
    },
    {
      icon: MessageCircle,
      title: "Communication facilitée",
      description: "Échangez facilement avec votre tuteur en entreprise et votre référent pédagogique.",
    },
    {
      icon: Award,
      title: "Valorisation des compétences",
      description: "Identifiez et mettez en avant les compétences acquises pendant votre expérience.",
    },
    {
      icon: TrendingUp,
      title: "Employabilité renforcée",
      description: "Construisez un portfolio professionnel qui boostera votre recherche d'emploi.",
    },
    {
      icon: Heart,
      title: "Bien-être au travail",
      description: "Exprimez-vous sur votre ressenti grâce au baromètre de bien-être intégré.",
    },
  ];

  const benefits = [
    "Accédez à un accompagnement personnalisé tout au long de votre période",
    "Gardez une trace de toutes vos réalisations et projets",
    "Bénéficiez d'un soutien constant de votre établissement",
    "Construisez une relation durable avec votre entreprise d'accueil",
    "Préparez votre avenir professionnel dès maintenant",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                🧑‍🎓 Pour les étudiants
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Tirez le meilleur de votre{" "}
                <span className="text-gradient">expérience en entreprise</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                halfonse vous accompagne pour valoriser votre stage ou alternance et construire votre avenir professionnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/decouvrir">
                  <Button variant="hero" size="xl">
                    Découvrir halfonse
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-up flex justify-center" style={{ animationDelay: "0.2s" }}>
              <img
                src={connectionIllustration}
                alt="Étudiant connecté avec son établissement et son entreprise"
                className="w-full max-w-md"
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
              Votre réussite, notre priorité
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des outils pensés pour vous accompagner à chaque étape de votre parcours.
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
                Ce que halfonse vous apporte
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
              <h3 className="font-heading text-2xl font-bold mb-6">Votre établissement utilise halfonse ?</h3>
              <p className="text-muted-foreground mb-6">
                Connectez-vous pour accéder à votre espace de suivi personnalisé et profiter de tous les avantages de la plateforme.
              </p>
              <div className="flex flex-col gap-3">
                <Link to="/connexion">
                  <Button variant="hero" size="lg" className="w-full">
                    Se connecter
                  </Button>
                </Link>
                <p className="text-center text-sm text-muted-foreground">
                  Pas encore de compte ?{" "}
                  <Link to="/decouvrir" className="text-primary hover:underline">
                    Recommandez halfonse à votre établissement
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

export default CommentCaMarcheEtudiant;
