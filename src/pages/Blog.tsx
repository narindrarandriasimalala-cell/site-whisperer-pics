import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";

const blogPosts = [
  {
    id: 1,
    title: "Créer de la valeur pour votre entreprise grâce au livret d'apprentissage",
    excerpt: "Découvrez comment le livret d'apprentissage peut devenir un véritable outil de création de valeur pour votre entreprise et vos alternants.",
    category: "Outils",
    date: "8 septembre 2025",
    image: blog1,
    slug: "valeur-entreprise-livret-apprentissage",
  },
  {
    id: 2,
    title: "Construire un vivier de recrutement solide grâce à l'apprentissage",
    excerpt: "L'alternance et le stage sont de formidables opportunités pour construire votre futur vivier de talents. Voici comment en tirer le meilleur.",
    category: "Outils",
    date: "8 septembre 2025",
    image: blog2,
    slug: "vivier-recrutement-solide-apprentissage",
  },
  {
    id: 3,
    title: "Évaluer pour projeter : comment transformer les dernières semaines de l'apprentissage en levier d'employabilité",
    excerpt: "Les dernières semaines de l'apprentissage sont cruciales. Apprenez à les transformer en véritable tremplin pour l'employabilité de vos étudiants.",
    category: "Pédagogie",
    date: "17 juillet 2025",
    image: blog3,
    slug: "evaluer-apprentissage-levier-employabilite",
  },
  {
    id: 4,
    title: "Comment bien préparer l'arrivée d'un alternant dans votre entreprise",
    excerpt: "Un accueil réussi est la clé d'une alternance réussie. Découvrez les étapes essentielles pour préparer l'arrivée de votre alternant.",
    category: "Entreprise",
    date: "10 juin 2025",
    image: blog1,
    slug: "preparer-arrivee-alternant",
  },
  {
    id: 5,
    title: "Les bonnes pratiques du tuteur en entreprise",
    excerpt: "Être tuteur demande des compétences spécifiques. Voici les bonnes pratiques pour accompagner efficacement votre alternant ou stagiaire.",
    category: "Pédagogie",
    date: "25 mai 2025",
    image: blog2,
    slug: "bonnes-pratiques-tuteur",
  },
  {
    id: 6,
    title: "Digitaliser le suivi pédagogique : par où commencer ?",
    excerpt: "La transformation digitale du suivi pédagogique peut sembler complexe. Voici un guide étape par étape pour réussir cette transition.",
    category: "Outils",
    date: "12 mai 2025",
    image: blog3,
    slug: "digitaliser-suivi-pedagogique",
  },
];

const categories = ["Tous", "Outils", "Pédagogie", "Entreprise"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
              Le <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Sinon, ce qu'on aime c'est la pédagogie. Découvrez nos articles sur le suivi pédagogique, l'alternance et le stage.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border bg-background sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <article className="rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg leading-tight group-hover:text-primary transition-colors mb-3">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
