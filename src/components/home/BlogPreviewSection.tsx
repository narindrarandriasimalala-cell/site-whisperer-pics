import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";

const blogPosts = [
  {
    id: 1,
    title: "Créer de la valeur pour votre entreprise grâce au livret d'apprentissage",
    category: "Outils",
    image: blog1,
    slug: "valeur-entreprise-livret-apprentissage",
  },
  {
    id: 2,
    title: "Construire un vivier de recrutement solide grâce à l'apprentissage",
    category: "Outils",
    image: blog2,
    slug: "vivier-recrutement-solide-apprentissage",
  },
  {
    id: 3,
    title: "Évaluer pour projeter : comment transformer les dernières semaines de l'apprentissage en levier d'employabilité",
    category: "Pédagogie",
    image: blog3,
    slug: "evaluer-apprentissage-levier-employabilite",
  },
];

const BlogPreviewSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Sinon, ce qu'on aime c'est la{" "}
              <span className="text-gradient">pédagogie</span>.
            </h2>
          </div>
          <Link
            to="/blog"
            className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-4 md:mt-0"
          >
            Voir tous les articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article className="rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-heading font-semibold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
