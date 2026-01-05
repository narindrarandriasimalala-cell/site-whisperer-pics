import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const commentCaMarcheLinks = [
    { href: "/comment-ca-marche/ecole", label: "Je suis une école", emoji: "🏫" },
    { href: "/comment-ca-marche/etudiant", label: "Je suis un étudiant", emoji: "🧑‍🎓" },
    { href: "/comment-ca-marche/entreprise", label: "Je suis une entreprise", emoji: "🏢" },
  ];

  const navLinks = [
    { href: "/manifesto", label: "Manifesto" },
    { href: "/blog", label: "Blog" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isCommentCaMarcheActive = location.pathname.startsWith("/comment-ca-marche");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">h</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
              halfonse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Comment ça marche dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 font-medium transition-colors hover:text-primary focus:outline-none ${
                isCommentCaMarcheActive ? "text-primary" : "text-muted-foreground"
              }`}>
                Comment ça marche ?
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-card border border-border shadow-lg z-50">
                {commentCaMarcheLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      to={link.href}
                      className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer ${
                        isActive(link.href) ? "text-primary" : ""
                      }`}
                    >
                      <span className="text-lg">{link.emoji}</span>
                      <span>{link.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/decouvrir">
              <Button variant="hero" size="default">
                Réserver une démo
              </Button>
            </Link>
            <Link to="/connexion" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Connexion
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {/* Comment ça marche section */}
              <div className="py-2">
                <p className="font-medium text-foreground mb-2">Comment ça marche ?</p>
                <div className="pl-4 space-y-2">
                  {commentCaMarcheLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`flex items-center gap-3 py-2 transition-colors ${
                        isActive(link.href) ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-lg">{link.emoji}</span>
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium py-2 transition-colors ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Link to="/decouvrir" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" className="w-full">
                    Réserver une démo
                  </Button>
                </Link>
                <Link
                  to="/connexion"
                  className="text-center text-muted-foreground hover:text-primary font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connexion
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
