import { Button } from "@/components/ui/button";
import { Play, Gift, Award, Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logoVertical from "@/assets/logo-vertical.png";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background -z-10" />
      
      {/* Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 -z-10">
        <img src={logoVertical} alt="" className="w-96 h-96 object-contain" />
      </div>

      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              100% Gratuito • Patrocinado pelas Maiores Marcas do Mercado
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-primary">Democratização</span> do{" "}
            <span className="text-foreground">EAD Profissionalizante</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Domine a Tecnologia de Eventos com Cursos 100% Gratuitos
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Cursos técnicos profissionalizantes no segmento Audiovisual. Aprenda iluminação, 
            sonorização e multimídia com profissionais atuantes nos maiores eventos do Brasil e do mundo.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="xl" variant="golden" asChild className="shadow-golden">
              <Link to="/cursos">
                <Play className="h-5 w-5" />
                Explorar Cursos Gratuitos
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link to="/sobre">Conheça Nossa Missão</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto gradient-golden rounded-lg flex items-center justify-center">
                <Gift className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Gratuito</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary/30">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">Certificados</p>
              <p className="text-sm text-muted-foreground">Reconhecidos</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary/30">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">Acesso</p>
              <p className="text-sm text-muted-foreground">Global</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary/30">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">Sem</p>
              <p className="text-sm text-muted-foreground">Barreiras</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
