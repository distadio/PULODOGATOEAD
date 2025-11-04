import { Instagram } from "lucide-react";
import { useEffect } from "react";

export const InstagramFeed = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Process embeds if script already loaded
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <Instagram className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">@pulodogatoead</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Acompanhe Nosso{" "}
            <span className="text-primary">Instagram</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das novidades, bastidores dos cursos e dicas exclusivas dos profissionais
          </p>
        </div>

        {/* Instagram Embed */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Instagram Post Embed 1 - Replace with actual Instagram post URLs */}
            <div className="bg-card rounded-lg overflow-hidden shadow-medium">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/EXAMPLE1/"
                data-instgrm-version="14"
                style={{
                  background: 'hsl(var(--card))',
                  border: 0,
                  borderRadius: '0.75rem',
                  boxShadow: 'var(--shadow-soft)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: 'calc(100% - 2px)'
                }}
              />
            </div>

            {/* Instagram Post Embed 2 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-medium">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/EXAMPLE2/"
                data-instgrm-version="14"
                style={{
                  background: 'hsl(var(--card))',
                  border: 0,
                  borderRadius: '0.75rem',
                  boxShadow: 'var(--shadow-soft)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: 'calc(100% - 2px)'
                }}
              />
            </div>

            {/* Instagram Post Embed 3 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-medium">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/EXAMPLE3/"
                data-instgrm-version="14"
                style={{
                  background: 'hsl(var(--card))',
                  border: 0,
                  borderRadius: '0.75rem',
                  boxShadow: 'var(--shadow-soft)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: 'calc(100% - 2px)'
                }}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/pulodogatoead"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-medium hover:shadow-glow transition-smooth hover:scale-105"
            >
              <Instagram className="h-5 w-5" />
              Seguir no Instagram
            </a>
          </div>
        </div>

        {/* Info Box */}
        <div className="max-w-2xl mx-auto mt-12 p-6 bg-card border border-primary/20 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <span className="text-primary font-semibold">💡 Dica:</span> Para ver as postagens mais recentes, 
            substitua os URLs de exemplo (EXAMPLE1, EXAMPLE2, EXAMPLE3) pelos links reais das postagens do Instagram do Pulo do Gato EAD. 
            Basta copiar o link de qualquer postagem do Instagram e colar no código.
          </p>
        </div>
      </div>
    </section>
  );
};

// TypeScript declaration for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
