import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Connexion = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Fonctionnalité à venir",
      description: "La connexion sera bientôt disponible.",
    });
  };

  return (
    <Layout>
      <section className="gradient-hero min-h-[80vh] flex items-center py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border animate-scale-in">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-heading font-bold text-3xl">h</span>
                </div>
                <h1 className="font-heading text-2xl font-bold mb-2">Connexion</h1>
                <p className="text-muted-foreground">
                  Accédez à votre espace halfonse
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Adresse e-mail</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mot de passe</label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-muted-foreground">Se souvenir de moi</span>
                  </label>
                  <a href="#" className="text-primary hover:underline">
                    Mot de passe oublié ?
                  </a>
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  Se connecter
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground text-sm">
                  Vous n'avez pas de compte ?{" "}
                  <Link to="/decouvrir" className="text-primary hover:underline font-medium">
                    Demander une démo
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

export default Connexion;
