import { Button } from "@/components/ui/button";
import { PlayCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="gradient-hero p-2 rounded-lg transition-smooth group-hover:scale-110">
              <PlayCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Audio<span className="text-accent">Tech</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth">
              Início
            </Link>
            <Link to="/courses" className="text-foreground hover:text-primary transition-smooth">
              Cursos
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-smooth">
              Sobre
            </Link>
            <Link to="/sponsors" className="text-foreground hover:text-primary transition-smooth">
              Patrocinadores
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button variant="accent" asChild>
              <Link to="/signup">Começar Grátis</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="px-4 py-2 hover:bg-accent/10 rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/courses"
                className="px-4 py-2 hover:bg-accent/10 rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 hover:bg-accent/10 rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                to="/sponsors"
                className="px-4 py-2 hover:bg-accent/10 rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Patrocinadores
              </Link>
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Button variant="ghost" asChild className="w-full">
                  <Link to="/login">Entrar</Link>
                </Button>
                <Button variant="accent" asChild className="w-full">
                  <Link to="/signup">Começar Grátis</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
