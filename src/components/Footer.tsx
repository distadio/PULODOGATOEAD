import { PlayCircle, Mail, Globe, Youtube, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="gradient-hero p-2 rounded-lg">
                <PlayCircle className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">
                Audio<span className="text-accent">Tech</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Plataforma global de cursos gratuitos em tecnologia para eventos, sonorização e multimídia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent/10 rounded-lg transition-smooth"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent/10 rounded-lg transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent/10 rounded-lg transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold mb-4">Cursos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/courses?category=audio" className="hover:text-primary transition-smooth">
                  Áudio e Sonorização
                </Link>
              </li>
              <li>
                <Link to="/courses?category=lighting" className="hover:text-primary transition-smooth">
                  Iluminação
                </Link>
              </li>
              <li>
                <Link to="/courses?category=video" className="hover:text-primary transition-smooth">
                  Vídeo e Projeção
                </Link>
              </li>
              <li>
                <Link to="/courses?category=infrastructure" className="hover:text-primary transition-smooth">
                  Infraestrutura
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-smooth">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="hover:text-primary transition-smooth">
                  Patrocinadores
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="hover:text-primary transition-smooth">
                  Instrutores
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-smooth">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contato@audiotech.com" className="hover:text-primary transition-smooth">
                  contato@audiotech.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Acesso global</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 AudioTech. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-smooth">
              Privacidade
            </Link>
            <Link to="/terms" className="hover:text-primary transition-smooth">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
