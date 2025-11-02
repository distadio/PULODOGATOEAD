import { Award } from "lucide-react";

const SPONSORS = [
  { name: "Shure", logo: "S" },
  { name: "Behringer", logo: "B" },
  { name: "JBL Professional", logo: "J" },
  { name: "Yamaha", logo: "Y" },
  { name: "Sennheiser", logo: "S" },
  { name: "Martin Audio", logo: "M" },
];

export const SponsorsSection = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Patrocinadores Oficiais
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Apoiado pelas Maiores Marcas do Mercado
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossos cursos são patrocinados por líderes globais em equipamentos profissionais para eventos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {SPONSORS.map((sponsor, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center bg-card border border-border rounded-xl hover:border-primary hover:shadow-soft transition-smooth group"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 gradient-hero rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-smooth">
                  {sponsor.logo}
                </div>
                <p className="text-sm font-medium group-hover:text-primary transition-smooth">
                  {sponsor.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Interessado em patrocinar nossos cursos?{" "}
            <a href="mailto:patrocinio@audiotech.com" className="text-primary hover:underline font-medium">
              Entre em contato
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
