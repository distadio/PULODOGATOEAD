import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const SponsorsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Quem Torna o <span className="text-primary">Pulo do Gato</span> Possível
          </h2>
          <p className="text-lg text-muted-foreground">
            Marcas líderes do mercado audiovisual que acreditam na democratização do conhecimento
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12">
          {/* Placeholder para logos dos patrocinadores */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-32 h-24 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-smooth"
            >
              <span className="text-xs text-muted-foreground text-center px-2">
                Logo Patrocinador {i + 1}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Quer patrocinar e apoiar a democratização do conhecimento?
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/parceiros">Seja um Patrocinador</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
