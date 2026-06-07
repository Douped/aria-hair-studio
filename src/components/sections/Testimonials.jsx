import { testimonials } from '../../data/testimonials'

// Five small gold stars.
function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-label="Five out of five stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15.9 4.7 18.6l1-5.8L1.5 8.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  )
}

// Testimonials — three quiet client-quote cards.
function Testimonials() {
  return (
    <section id="testimonials" className="bg-ivory px-6 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
            Kind Words
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl">What clients say</h2>
        </div>

        {/* Quote cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-xl border border-sand bg-cream p-8"
            >
              {/* Decorative quotation glyph */}
              <span
                className="pointer-events-none absolute right-6 top-2 font-serif text-6xl leading-none text-gold-soft/60"
                aria-hidden="true"
              >
                &rdquo;
              </span>

              <Stars />

              <blockquote className="mt-5 grow font-serif text-lg italic leading-relaxed text-charcoal">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6">
                <p className="font-sans text-sm font-medium text-charcoal">
                  {t.name}
                </p>
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-taupe">
                  {t.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
