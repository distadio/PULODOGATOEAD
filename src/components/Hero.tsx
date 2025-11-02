import { Button } from "@/components/ui/button";
import { Play, Users, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-subtle -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium">
              <Award className="h-4 w-4" />
              100% Gratuito • Patrocinado por marcas líderes
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Domine a <span className="text-primary">Tecnologia</span> de{" "}
              <span className="gradient-accent bg-clip-text text-transparent">Eventos</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Aprenda sonorização, iluminação e multimídia com cursos técnicos profissionais. 
              Totalmente gratuitos, direto dos especialistas da indústria.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="xl" variant="hero" asChild>
                <Link to="/courses">
                  <Play className="h-5 w-5" />
                  Explorar Cursos
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/about">Saiba Mais</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">10k+</p>
                  <p className="text-sm text-muted-foreground">Alunos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Play className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm text-muted-foreground">Cursos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Global</p>
                  <p className="text-sm text-muted-foreground">Acesso Mundial</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative lg:block hidden">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
              <div className="absolute inset-0 gradient-hero opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto gradient-accent rounded-full flex items-center justify-center shadow-glow">
                    <Play className="h-12 w-12 text-accent-foreground" />
                  </div>
                  <p className="text-2xl font-bold">Conteúdo Profissional</p>
                  <p className="text-muted-foreground">Aprenda com os melhores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
