import { ExternalLink } from "lucide-react";
import { useEffect } from "react";

export const GiphyFeed = () => {
  useEffect(() => {
    // Load Giphy embed script
    const script = document.createElement('script');
    script.src = "https://giphy.com/static/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-card/50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <svg className="h-5 w-5" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" fill="currentColor" className="text-primary"/>
              <path d="M40 40H160V80H120V160H80V80H40V40Z" fill="black"/>
            </svg>
            <span className="text-sm font-medium text-foreground">@pulodogatoead</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Nossos{" "}
            <span className="text-primary">GIFs Oficiais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compartilhe conhecimento e diversão! Use nossos GIFs nas suas conversas
          </p>
        </div>

        {/* Giphy Grid Embed */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-card to-secondary rounded-2xl p-6 lg:p-8 shadow-golden border border-primary/20 overflow-hidden">
            <div 
              style={{
                width: '100%',
                height: '0',
                paddingBottom: '56%',
                position: 'relative'
              }}
            >
              <iframe 
                src="https://giphy.com/embed/pulodogatoead/grid" 
                width="100%" 
                height="100%" 
                style={{
                  position: 'absolute'
                }}
                frameBorder="0" 
                className="giphy-embed rounded-lg"
                allowFullScreen
                title="Giphy Feed - Pulo do Gato EAD"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="https://giphy.com/pulodogatoead"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-golden text-primary-foreground font-semibold rounded-lg shadow-medium hover:shadow-glow transition-smooth hover:scale-105"
            >
              <ExternalLink className="h-5 w-5" />
              Ver Todos no Giphy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
