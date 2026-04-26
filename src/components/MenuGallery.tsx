import { useState } from "react";
import { X, ImagePlus } from "lucide-react";

type Props = {
  images: { src: string; alt: string }[];
};

export function MenuGallery({ images }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  if (images.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-border bg-card/50 p-10 lg:p-16 text-center">
        <div className="mx-auto h-14 w-14 rounded-full bg-secondary flex items-center justify-center mb-4">
          <ImagePlus className="h-6 w-6 text-saffron" />
        </div>
        <h3 className="font-display text-2xl text-foreground mb-2">Menu photos coming soon</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Upload your menu / order list images and they will be displayed here in a beautiful,
          zoomable gallery.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => setOpen(img.src)}
            className="group relative overflow-hidden rounded-2xl bg-surface shadow-deep hover:shadow-gold transition-smooth aspect-[3/4] border border-gold"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent opacity-60 group-hover:opacity-90 transition-smooth" />
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <span className="text-cream text-sm font-medium">{img.alt}</span>
              <span className="text-accent text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-smooth">
                Tap to zoom →
              </span>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 h-11 w-11 rounded-full bg-accent text-charcoal hover:scale-110 flex items-center justify-center transition-smooth shadow-gold z-10"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={open}
            alt="Menu"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] max-w-[95vw] object-contain rounded-lg shadow-deep"
          />
        </div>
      )}
    </>
  );
}
