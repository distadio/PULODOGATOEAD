import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Youtube, Globe } from "lucide-react";
import logoVerticalWhite from "@/assets/logo-vertical-white.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <img src={logoVerticalWhite} alt="Pulo do Gato EAD" className="h-20" />
            <p className="text-sm text-secondary-foreground/80 max-w-sm">
              Democratização do EAD Profissionalizante. Cursos 100% gratuitos no segmento 
              Audiovisual, patrocinados pelas maiores marcas do mercado.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Globe className="h-4 w-4 text-primary" />
              <span className="font-medium text-primary">Alcance Global</span>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-bold text-secondary-foreground mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/parceiros" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Parceiros
                </Link>
              </li>
              <li>
                <Link to="/tutores" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Tutores
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Cursos */}
          <div>
            <h3 className="font-bold text-secondary-foreground mb-4">Cursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cursos/conhecendo-iluminacao" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Conhecendo a Iluminação
                </Link>
              </li>
              <li>
                <span className="text-secondary-foreground/50">Sonorização (em breve)</span>
              </li>
              <li>
                <span className="text-secondary-foreground/50">Multimídia (em breve)</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-bold text-secondary-foreground mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-smooth group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-secondary-foreground/80 group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-smooth group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-secondary-foreground/80 group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-smooth group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-secondary-foreground/80 group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-smooth group"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-secondary-foreground/80 group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2025 Pulo Do Gato EAD - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
