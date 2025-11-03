import { Gift, Users, Share2, Zap } from "lucide-react";

export const WhySection = () => {
  const features = [
    {
      icon: Gift,
      title: "Democratização Total",
      description: "Sem custo, sem prova, sem barreiras. Acesso permanente ao conteúdo mesmo após o curso terminar.",
    },
    {
      icon: Users,
      title: "Aprender Ensinando",
      description: "Avaliação entre pares desde o módulo 1. Construção coletiva do conhecimento inspirada em Paulo Freire.",
    },
    {
      icon: Share2,
      title: "Conteúdo Transmídia",
      description: "Debate nas redes sociais. Profissionais compartilhando seus 'pulos do gato' com a comunidade.",
    },
    {
      icon: Zap,
      title: "Prática + Teoria",
      description: "Softwares gratuitos profissionais (MA Lighting, ETC Nomad). Experiência da vida real, não só teoria.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Por Que <span className="text-primary">Pulo do Gato?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O diferencial que torna nossa plataforma única no mercado brasileiro
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-smooth shadow-soft hover:shadow-medium group"
            >
              <div className="w-12 h-12 gradient-golden rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
