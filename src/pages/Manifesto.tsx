import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import connectionIllustration from "@/assets/connection-illustration.png";

const Manifesto = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
              Notre <span className="text-gradient">Manifesto</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Nous croyons que chaque période en entreprise est une opportunité unique de croissance pour l'étudiant, l'établissement et l'entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-slide-right">
              <img
                src={connectionIllustration}
                alt="Connexion entre les acteurs de la formation"
                className="w-full max-w-lg mx-auto"
              />
            </div>
            <div className="animate-slide-left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Notre mission
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Chez halfonse, nous avons une conviction : <strong className="text-foreground">le suivi pédagogique ne devrait jamais être une contrainte</strong>, mais une opportunité de créer de la valeur pour tous.
                </p>
                <p>
                  Nous avons créé halfonse pour transformer la manière dont les établissements accompagnent leurs étudiants en stage et en alternance.
                </p>
                <p>
                  Notre plateforme est née d'un constat simple : <strong className="text-foreground">trop d'outils sont déconnectés des besoins réels</strong> des référents, des tuteurs et des étudiants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
            Nos <span className="text-gradient">valeurs</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🎯",
                title: "Simplicité",
                description: "Nous concevons des outils simples, intuitifs et adaptés à chaque type d'utilisateur. Pas de complexité inutile.",
              },
              {
                emoji: "🤝",
                title: "Collaboration",
                description: "Nous croyons en la force du collectif. Étudiants, tuteurs et référents travaillent ensemble vers un objectif commun.",
              },
              {
                emoji: "💡",
                title: "Innovation",
                description: "Nous repoussons les limites de la pédagogie traditionnelle pour créer des expériences d'apprentissage uniques.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-6">{value.emoji}</div>
                <h3 className="font-heading text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              Notre histoire
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                halfonse est né de l'expérience terrain de professionnels de l'éducation qui ont vécu au quotidien les difficultés du suivi pédagogique.
              </p>
              <p>
                Entre les fichiers Excel perdus, les emails sans réponse, les visites d'entreprise chronophages et le manque de visibilité sur le bien-être des étudiants, nous savions qu'il fallait réinventer l'approche.
              </p>
              <p>
                Aujourd'hui, halfonse accompagne des centaines d'établissements dans leur transformation digitale, avec un objectif clair : <strong className="text-foreground">redonner du sens au suivi pédagogique</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Rejoignez l'aventure halfonse
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Découvrez comment notre plateforme peut transformer le suivi pédagogique de votre établissement.
          </p>
          <Link to="/decouvrir">
            <Button
              size="xl"
              className="bg-background text-primary hover:bg-background/90 font-semibold shadow-lg"
            >
              Demander une démo
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Manifesto;
