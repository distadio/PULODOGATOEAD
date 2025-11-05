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

        {/* Instagram Profile Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg overflow-hidden shadow-elegant border border-primary/20">
            <iframe
              src="https://www.instagram.com/pulodogatoead/embed"
              className="w-full"
              style={{ minHeight: '600px', border: 'none' }}
              scrolling="no"
              allowTransparency={true}
            />
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
