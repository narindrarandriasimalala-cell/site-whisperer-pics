const partners = [
  { name: "Maddyness", logo: "Maddyness" },
  { name: "BPI France", logo: "BPI France" },
  { name: "France Bleu", logo: "France Bleu" },
  { name: "EdTech France", logo: "EdTech" },
  { name: "FT One", logo: "FT One" },
];

const PartnersSection = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-muted-foreground/50 font-heading font-semibold text-lg hover:text-muted-foreground transition-colors cursor-default"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
