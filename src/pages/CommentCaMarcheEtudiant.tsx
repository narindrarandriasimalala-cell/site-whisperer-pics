import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import suiviCard from "@/assets/suivi-card.png";
import aideCard from "@/assets/aide-card.png";
import workflowIllustration from "@/assets/workflow-illustration.png";

const CommentCaMarcheEtudiant = () => {
  const pillars = [
    {
      emoji: "🤓",
      title: "S'auto-évaluer",
      description: "Avec halfonse, les étudiants s'auto-évaluent à des moments clefs de la période en entreprise",
    },
    {
      emoji: "🚀",
      title: "Prendre confiance",
      description: "Constater une progression c'est être conscient du chemin parcouru entre le point A et le point B",
    },
    {
      emoji: "⭐️",
      title: "Valoriser",
      description: "Grâce à l'auto-évaluation et le gain de confiance, l'étudiant aura les clefs pour mieux valoriser son expérience",
    },
  ];

  const experienceFeatures = [
    {
      image: suiviCard,
      title: "Prendre du recul 👁",
      description: "Le stress et l'envie de bien faire peuvent brouiller la vue au cours de la période en entreprise, halfonse aide les étudiants en les guidant dans l'auto-évaluation de leurs compétences",
      reverse: false,
    },
    {
      image: aideCard,
      title: "Quelqu'un sur qui compter 🤝",
      description: "Agissant comme un tiers de confiance, l'étudiant peut demander de l'aide ou des conseils à son équipe pédagogique facilement",
      reverse: true,
    },
  ];

  const reminders = [
    { emoji: "🫂", text: "Qu'ils ne sont pas seuls" },
    { emoji: "🕵🏻‍♀️", text: "Qu'ils ont des droits" },
    { emoji: "💪🏻", text: "Qu'ils peuvent faire confiance à leur jugement" },
    { emoji: "⭐️", text: "Que leurs compétences sont bien réelles" },
    { emoji: "👍🏼", text: "Que se tromper, c'est ok" },
    { emoji: "🙌🏻", text: "Qu'ils méritent le respect" },
    { emoji: "💼", text: "Qu'ils ont droit au feedback sur leur travail" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              halfonse aux côtés des étudiants 🎓
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              La période en entreprise,{" "}
              <span className="text-gradient">concrétisation de la formation</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-5xl mb-6 block">{pillar.emoji}</span>
                <h3 className="font-heading text-2xl font-bold mb-4 text-gradient">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Features */}
      <section className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
            Le suivi de l'expérience professionnelle avec halfonse
          </h2>

          <div className="space-y-20">
            {experienceFeatures.map((feature, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={feature.reverse ? "lg:order-2" : ""}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div className={feature.reverse ? "lg:order-1" : ""}>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/decouvrir">
              <Button variant="hero" size="xl">
                Je veux halfonse dans mon établissement !
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reminders Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-6">
            halfonse vous accompagne tout au long du stage et de l'alternance
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="animate-fade-up">
              <img
                src={workflowIllustration}
                alt="Illustration halfonse"
                className="w-full rounded-2xl"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-8">
                halfonse est là au quotidien, pour rappeler aux étudiants
              </h3>
              <ul className="space-y-4">
                {reminders.map((reminder, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-lg animate-fade-up"
                    style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                  >
                    <span className="text-2xl">{reminder.emoji}</span>
                    <span>{reminder.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Envie de mieux accompagner vos étudiants ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez comment halfonse peut transformer l'expérience de vos étudiants en entreprise.
          </p>
          <Link to="/decouvrir">
            <Button variant="hero" size="xl">
              Découvrir halfonse
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CommentCaMarcheEtudiant;
