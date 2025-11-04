import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

interface GiphyGif {
  id: string;
  images: {
    original: {
      url: string;
    };
    fixed_height: {
      url: string;
    };
  };
  title: string;
  url: string;
}

export const GiphyFeed = () => {
  const [gifs, setGifs] = useState<GiphyGif[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        // Using Giphy's public API endpoint for user content
        // Note: In production, you should use your own API key
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=sJW9RaPZ4r9vpNGNKSCz6w61vJlCjjKw&q=pulodogatoead&limit=20&rating=g`
        );
        
        if (!response.ok) throw new Error("Failed to fetch");
        
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          setGifs(data.data);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching Giphy content:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGifs();
  }, []);

  useEffect(() => {
    if (gifs.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 4000); // Change GIF every 4 seconds

    return () => clearInterval(interval);
  }, [gifs.length]);

  if (isLoading) {
    return (
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-card to-secondary rounded-2xl p-8 shadow-golden animate-pulse">
              <div className="aspect-video bg-muted rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || gifs.length === 0) {
    return (
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-card to-secondary rounded-2xl p-8 shadow-golden border border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nossos GIFs no Giphy</h3>
                <p className="text-muted-foreground mb-6">
                  Confira nossos GIFs exclusivos e compartilhe nas suas conversas!
                </p>
                <a
                  href="https://giphy.com/pulodogatoead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-golden text-primary-foreground font-semibold rounded-lg shadow-medium hover:shadow-glow transition-smooth hover:scale-105"
                >
                  <ExternalLink className="h-5 w-5" />
                  Ver no Giphy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentGif = gifs[currentIndex];

  return (
    <section className="py-12 bg-card/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Animated Card */}
          <div className="relative bg-gradient-to-br from-card to-secondary rounded-2xl p-6 lg:p-8 shadow-golden border border-primary/20 overflow-hidden group">
            {/* Giphy Badge */}
            <div className="absolute top-4 right-4 z-10">
              <a
                href="https://giphy.com/pulodogatoead"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-full border border-primary/30 hover:border-primary transition-smooth"
              >
                <svg className="h-4 w-4" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="200" fill="#00FF99"/>
                  <path d="M40 40H160V80H120V160H80V80H40V40Z" fill="black"/>
                </svg>
                <span className="text-xs font-semibold text-white">GIPHY</span>
              </a>
            </div>

            {/* GIF Container with Animation */}
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              {gifs.map((gif, index) => (
                <div
                  key={gif.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <img
                    src={gif.images.original.url}
                    alt={gif.title || "Pulo do Gato GIF"}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}

              {/* Progress Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {gifs.slice(0, 10).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary shadow-glow"
                        : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Ver GIF ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-primary">GIFs Oficiais</span> Pulo do Gato
              </h3>
              <p className="text-muted-foreground mb-4">
                Compartilhe conhecimento e diversão! Use nossos GIFs nas suas conversas.
              </p>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={currentGif.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-golden text-primary-foreground font-semibold rounded-lg shadow-medium hover:shadow-glow transition-smooth hover:scale-105"
                >
                  <ExternalLink className="h-5 w-5" />
                  Ver este GIF
                </a>
                <a
                  href="https://giphy.com/pulodogatoead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-smooth"
                >
                  Ver Todos os GIFs
                </a>
              </div>

              {/* Counter */}
              <p className="mt-4 text-sm text-muted-foreground">
                {currentIndex + 1} de {gifs.length} GIFs
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};
