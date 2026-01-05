import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Mission */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">h</span>
              </div>
              <span className="font-heading font-bold text-xl">halfonse</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              La plateforme qui facilite le suivi pédagogique de vos étudiants en entreprise.
            </p>
          </div>

          {/* À propos */}
          <div>
            <h4 className="font-heading font-semibold mb-4">À propos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/manifesto" className="text-background/70 hover:text-background transition-colors text-sm">
                  Notre mission
                </Link>
              </li>
              <li>
                <Link to="/decouvrir" className="text-background/70 hover:text-background transition-colors text-sm">
                  Découvrir halfonse
                </Link>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                  Carrières
                </a>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Solution</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                  Pour les établissements
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                  Pour les étudiants
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                  Pour les entreprises
                </a>
              </li>
            </ul>
          </div>

          {/* Liens */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Liens</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-background/70 hover:text-background transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} halfonse. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
