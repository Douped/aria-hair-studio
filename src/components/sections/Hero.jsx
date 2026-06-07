import { site } from '../../data/site'

// Hero — brand name, tagline, primary "Book a Consultation" CTA over a
// warm full-bleed salon image.
//
// IMAGE: free Unsplash placeholder, to be swapped for real client/salon
// photography. Source: https://unsplash.com/photos/woman-getting-her-hair-done
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-charcoal"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2070&q=80"
        alt="Stylist finishing a soft, dimensional blow-out at Aria Hair Studio"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />

      {/* Overlays: charcoal gradient for legibility + a whisper of warm plum */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/55 to-charcoal/25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-plum/10" aria-hidden="true" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold-soft">
            {site.name} &middot; Brantford, Ontario
          </p>

          <h1 className="mt-6 text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            Quietly luxurious hair,
            <span className="italic text-gold-soft"> made for you.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ivory/85">
            An intimate Brantford studio for precision cuts, dimensional
            colour, and lived-in balayage — crafted slowly, in a calm and
            unhurried space.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-plum px-8 py-4 font-sans text-sm font-medium tracking-wide text-ivory shadow-lg shadow-charcoal/30 transition-colors hover:bg-plum-dark"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-ivory/40 px-8 py-4 font-sans text-sm font-medium tracking-wide text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Subtle scroll cue */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ivory/60 transition-colors hover:text-ivory sm:block"
      >
        <svg className="h-6 w-6 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}

export default Hero
