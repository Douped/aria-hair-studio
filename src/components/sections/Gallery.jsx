import { galleryItems } from '../../data/gallery'

// Gallery — a responsive masonry grid of transformation photos with a
// subtle hover zoom and caption reveal.
function Gallery() {
  return (
    <section id="gallery" className="bg-ivory px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
            Gallery
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Transformations</h2>
          <p className="mt-5 text-charcoal-soft">
            A glimpse of recent work — colour, balayage, and finishes created
            in the studio chair.
          </p>
        </div>

        {/* Masonry grid (CSS columns) */}
        <div className="mt-16 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className="group relative block break-inside-avoid overflow-hidden rounded-lg bg-sand"
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Caption: gradient + label reveal on hover/focus */}
              <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 font-sans text-sm tracking-wide text-ivory">
                  {item.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
