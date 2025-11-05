import { ExternalLink } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const GIFS = [
  {
    id: "PnO0N0GZbas00EnQCk",
    mp4: "https://i.giphy.com/media/PnO0N0GZbas00EnQCk/giphy.mp4",
    href: "https://giphy.com/gifs/pulodogatoead-fotografia-objetivas-lentesobjetivas-PnO0N0GZbas00EnQCk",
    title: "Fotografia - Objetivas",
  },
  {
    id: "j44wXiMUciH4cyTjpw",
    mp4: "https://i.giphy.com/media/j44wXiMUciH4cyTjpw/giphy.mp4",
    href: "https://giphy.com/gifs/pulodogatoead-stanley-kubrick-j44wXiMUciH4cyTjpw",
    title: "Stanley Kubrick",
  },
  {
    id: "mBSckhrfL7yVrOF39M",
    mp4: "https://i.giphy.com/media/mBSckhrfL7yVrOF39M/giphy.mp4",
    href: "https://giphy.com/gifs/pulodogatoead-elipsoidal-elipso-refletorelipsoidal-mBSckhrfL7yVrOF39M",
    title: "Elipsoidal - Refletor",
  },
];

export const GiphyFeed = () => {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleEnded = useCallback(() => {
    setIndex((i) => (i + 1) % GIFS.length);
  }, []);

  // Tenta reproduzir automaticamente ao trocar de GIF (necessário em alguns navegadores)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const play = () => {
      const p = v.play();
      if (p && typeof (p as any).catch === "function") {
        (p as Promise<void>).catch(() => {
          // Caso o autoplay falhe, manteremos silenciosamente
        });
      }
    };
    play();
  }, [index]);

  return (
    <section className="py-12 bg-card/50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <svg className="h-5 w-5" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" fill="currentColor" className="text-primary" />
              <path d="M40 40H160V80H120V160H80V80H40V40Z" fill="black" />
            </svg>
            <span className="text-sm font-medium text-foreground">@pulodogatoead</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Nossos <span className="text-primary">GIFs Oficiais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carrossel alternando automaticamente entre 3 GIFs.
          </p>
        </div>

        {/* Card com carrossel automático */}
        <div className="max-w-3xl mx-auto">
          <article className="bg-gradient-to-br from-card to-secondary rounded-2xl p-4 lg:p-6 shadow-golden border border-primary/20 overflow-hidden animate-fade-in">
            <div className="rounded-xl overflow-hidden shadow-medium">
              <video
                key={GIFS[index].id}
                ref={videoRef}
                src={GIFS[index].mp4}
                autoPlay
                muted
                playsInline
                controls={false}
                preload="metadata"
                onEnded={handleEnded}
                onError={handleEnded}
                className="w-full h-auto aspect-video object-cover"
                aria-label={`GIF ${index + 1}: ${GIFS[index].title}`}
                title={`GIF ${index + 1}: ${GIFS[index].title}`}
              />
            </div>

            {/* Indicadores simples */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {GIFS.map((g, i) => (
                <span
                  key={g.id}
                  className={
                    i === index
                      ? "h-2 w-6 rounded-full bg-primary transition-smooth"
                      : "h-2 w-2 rounded-full bg-muted-foreground/40 transition-smooth"
                  }
                  aria-hidden
                />
              ))}
            </div>

            {/* Link para o GIF atual */}
            <div className="text-center mt-4">
              <a
                className="story-link text-sm text-muted-foreground"
                href={GIFS[index].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver este GIF no Giphy
              </a>
            </div>
          </article>

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
