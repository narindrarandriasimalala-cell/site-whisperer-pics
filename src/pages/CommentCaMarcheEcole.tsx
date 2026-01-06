import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import visionEffectifs from "@/assets/vision-effectifs.png";
import alertesDetection from "@/assets/alertes-detection.png";
import questionnairesSuivi from "@/assets/questionnaires-suivi.png";
import workflowIllustration from "@/assets/workflow-illustration.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CommentCaMarcheEcole = () => {
  const features = [
    {
      image: visionEffectifs,
      title: "Vision globale des effectifs",
      description: "dédiée au pilotage des périodes en entreprise en associant pédagogie et relations entreprises",
    },
    {
      image: alertesDetection,
      title: "Détection d'alertes",
      description: "à partir du suivi des étudiants et des tuteurs, halfonse mesure le bien-être de vos étudiants",
    },
    {
      image: questionnairesSuivi,
      title: "Questionnaires de suivi",
      description: "à destination des étudiants et des tuteurs pour assurer le déroulé et la progression",
    },
  ];

  const highlights = [
    "🙌🏻 Suivi de l'alternance sur les critères règlementaires",
    "👓 Niveaux de rôles et accès : groupes, écoles, campus, OF",
  ];

  const benefits = [
    "Centralise vos enjeux de suivi pédagogique",
    "Créé pour s'intégrer facilement à votre quotidien",
    "Adaptable à l'organisation de votre établissement",
  ];

  const dataFeatures = [
    { icon: "📊", title: "Recrutement", description: "Récupérez les données de recrutements de vos étudiants" },
    { icon: "🤝", title: "Mise en relation", description: "Mettez en relations vos étudiants à la recherche d'entreprise" },
    { icon: "🚀", title: "Feedback", description: "Exploitez les feedbacks des entreprises pour améliorer votre formation" },
    { icon: "⭐️", title: "Évaluation", description: "Évaluez l'accueil des entreprises et la progression des étudiants" },
  ];

  const faqs = [
    {
      question: "Est-ce que je peux personnaliser les questionnaires de suivi ?",
      answer: "Nous vous délivrons un suivi pédagogique clés en main. Ce suivi a été développé en fonction de trois critères : les périodes clés en entreprises, le bien-être des étudiants, et la montée en compétences. Il est relié à un algorithme permettant de détecter des problématiques nécessitant votre intervention. Nous mettons donc à disposition ce parcours de suivi mais vous pourrez évidemment personnaliser certains questionnaires si vous le souhaitez.",
    },
    {
      question: "Comment être sûrs que les étudiants utilisent halfonse ?",
      answer: "Notre plateforme est conçue pour être intuitive et engageante. Les étudiants reçoivent des notifications régulières et le processus de suivi est simple et rapide. De plus, les établissements peuvent suivre le taux de participation en temps réel.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              halfonse dans votre établissement 🏫
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Gardez le lien,</span> même de loin
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Avec halfonse, associez la pédagogie et les relations entreprises pour maintenir le lien avec vos étudiants et fidéliser les entreprises d'accueil.
            </p>
            <Link to="/decouvrir">
              <Button variant="hero" size="xl">
                Découvrir en démo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
            Comment ça marche ?
          </h2>

          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-up ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-gradient">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {highlights.map((highlight, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-primary/10 text-foreground font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits with Image */}
      <section className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <img
                src={workflowIllustration}
                alt="Plateforme halfonse"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/decouvrir">
                <Button variant="hero" size="lg">
                  Demander une démo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Data Features */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
            Reprenez la main sur vos données pédagogiques
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Vous avez des questions, nous avons les réponses.
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer le suivi pédagogique ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez comment halfonse peut simplifier la gestion de vos stages et alternances.
          </p>
          <Link to="/decouvrir">
            <Button variant="hero" size="xl">
              Réserver une démo gratuite
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CommentCaMarcheEcole;
