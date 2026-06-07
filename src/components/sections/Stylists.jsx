import { stylists } from '../../data/stylists'
import Reveal from '../Reveal'

// Stylists — three bio cards (portrait, name, role/specialty, short bio).
function Stylists() {
  return (
    <section id="stylists" className="bg-cream px-6 py-24 sm:py-28 lg:py-32">
      <Reveal className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
            The Team
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Meet your stylists</h2>
          <p className="mt-5 text-charcoal-soft">
            A small, senior team — so you see the same trusted hands every
            visit.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stylists.map((s) => (
            <article
              key={s.name}
              className="group overflow-hidden rounded-xl border border-sand bg-ivory shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="aspect-[4/5] overflow-hidden bg-sand">
                <img
                  src={s.image}
                  alt={`${s.name}, ${s.role} at Aria Hair Studio`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-gold">
                  {s.specialty}
                </p>
                <h3 className="mt-2 text-2xl">{s.name}</h3>
                <p className="mt-1 font-sans text-sm text-charcoal-soft">
                  {s.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
                  {s.bio}
                </p>

                <a
                  href={s.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-sans text-sm text-plum transition-colors hover:text-plum-dark"
                  aria-label={`${s.name} on Instagram`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Follow
                </a>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Stylists
