import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import integrationEntreprise from "@/assets/integration-entreprise.png";
import communicationTripartite from "@/assets/communication-tripartite.png";
import accompagnementTuteur from "@/assets/accompagnement-tuteur.png";
import workflowIllustration from "@/assets/workflow-illustration.png";

const CommentCaMarcheEntreprise = () => {
  const features = [
    {
      image: integrationEntreprise,
      title: "Facilite l'intégration",
      description: "de l'étudiant par l'entreprise en diffusant les bonnes informations au tuteur et à la future équipe sur la formation et le parcours de l'apprenant.e",
      reverse: false,
    },
    {
      image: communicationTripartite,
      title: "Simplifie la communication",
      description: "entre les trois parties prenantes de la convention de stage ou d'alternance pour que chacun soit au même niveau d'informations",
      reverse: true,
    },
    {
      image: accompagnementTuteur,
      title: "Accompagne le tuteur",
      description: "grâce à des ressources managériales opérationnelles dédiées à chaque étape de l'accueil de l'apprenant dans l'entreprise",
      reverse: false,
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              halfonse en entreprise 💼
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Une vision opérationnelle de{" "}
              <span className="text-gradient">l'accompagnement et de la formation</span>{" "}
              des apprenants
            </h1>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={feature.reverse ? "lg:order-2" : ""}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div className={feature.reverse ? "lg:order-1" : ""}>
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

          <div className="text-center mt-16">
            <Link to="/decouvrir">
              <Button variant="heroOutline" size="xl">
                Recommander halfonse aux établissements de mes stagiaires et alternants
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Construire et valoriser un vivier de recrutement
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Un apprenant bien intégré et formé ne serait-il pas un bon futur salarié ?</strong>
              </p>
              <p className="text-muted-foreground">
                Investir dans l'accompagnement de vos stagiaires et alternants, c'est construire votre vivier de talents pour demain.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <img
                src={workflowIllustration}
                alt="Vivier de recrutement"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Le saviez-vous ?
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-md animate-fade-up">
              <span className="text-6xl md:text-7xl font-bold text-gradient block mb-6">
                85%
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-4">
                des étudiants et jeunes diplômés accordent de l'importance au bien-être au travail
              </h3>
              <p className="text-muted-foreground">
                Lors de sa recherche de stage ou alternance, un étudiant ne cherche pas seulement des missions mais aussi une entreprise qui lui corresponde !
              </p>
              <p className="text-muted-foreground mt-4">
                La culture d'entreprise a un impact considérable sur la volonté d'un jeune à apprendre à vos côtés et à réaliser cette expérience professionnelle dans votre entreprise !
              </p>
              <p className="text-foreground font-medium mt-6">
                Comme on est sûrs que vous souhaitez aider à s'épanouir les apprenants, ne négligez pas le suivi et l'importance des feedbacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Prêt à mieux accueillir vos apprenants ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez comment halfonse peut améliorer l'intégration et le suivi de vos stagiaires et alternants.
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

export default CommentCaMarcheEntreprise;
