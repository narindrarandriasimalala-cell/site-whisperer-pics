import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import teamMember from "@/assets/team-member.png";

const Decouvrir = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons rapidement.",
    });
    setFormData({ nom: "", prenom: "", email: "", telephone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Envie de découvrir et intégrer{" "}
              <span className="text-gradient">halfonse</span> ?
            </h1>
            <p className="text-lg text-muted-foreground">
              Vous êtes un établissement et vous souhaitez en savoir plus sur halfonse, écrivez-nous ou réservez directement un rendez-vous démo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-up">
              <h2 className="font-heading text-2xl font-bold mb-6">Contactez-nous</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom</label>
                    <Input
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Prénom</label>
                    <Input
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Adresse e-mail</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <Input
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="+33 6 00 00 00 00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows={4}
                    required
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  Envoyer
                </Button>
              </form>
            </div>

            {/* Demo Booking */}
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-heading text-2xl font-bold mb-6">Rencontrons-nous</h2>
              
              <div className="flex items-center gap-4 mb-8 p-4 bg-secondary/50 rounded-xl">
                <img
                  src={teamMember}
                  alt="Maud Houssais"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-heading font-semibold">Maud Houssais</h3>
                  <p className="text-sm text-muted-foreground">
                    Découverte du livret de suivi halfonse
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border bg-background">
                  <p className="font-medium mb-2">📅 45 min</p>
                  <p className="text-sm text-muted-foreground">
                    Cette première rencontre permet d'échanger sur vos besoins et enjeux concernant le livret de suivi de l'alternance et du stage.
                  </p>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."].map((day) => (
                    <div key={day} className="font-medium text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <button
                      key={day}
                      className={`py-2 rounded-lg transition-colors ${
                        [7, 8, 9, 14, 15, 16, 21, 22, 23].includes(day)
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "text-muted-foreground"
                      }`}
                      disabled={![7, 8, 9, 14, 15, 16, 21, 22, 23].includes(day)}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <Button variant="hero" size="lg" className="w-full mt-4">
                  Confirmer le rendez-vous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Decouvrir;
