import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoHorizontal from "@/assets/logo-horizontal.png";
import logoHorizontalWhite from "@/assets/logo-horizontal-white.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logoHorizontalWhite} 
              alt="Pulo do Gato EAD" 
              className="h-10 transition-smooth group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Início
            </Link>
            <Link to="/sobre" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Quem Somos
            </Link>
            <Link to="/cursos" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Cursos
            </Link>
            <Link to="/parceiros" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Parceiros
            </Link>
            <Link to="/tutores" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Tutores
            </Link>
            <Link to="/eventos" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Eventos
            </Link>
            <Link to="/contato" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Contato
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button variant="golden" asChild>
              <Link to="/cadastro">Começar Grátis</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/sobre"
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                to="/cursos"
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos
              </Link>
              <Link
                to="/parceiros"
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Parceiros
              </Link>
              <Link
                to="/tutores"
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Tutores
              </Link>
              <Link
                to="/eventos"
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Eventos
              </Link>
              <Link
                to="/contato"
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login">Entrar</Link>
                </Button>
                <Button variant="golden" asChild className="w-full">
                  <Link to="/cadastro">Começar Grátis</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
