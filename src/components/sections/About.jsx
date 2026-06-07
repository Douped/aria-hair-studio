import Reveal from '../Reveal'

// About — the salon story, paired with a warm interior image and a few
// quiet highlights.
//
// IMAGE: free Unsplash placeholder (salon interior) for the demo — swap for
// a real photo of the studio.
const aboutImage =
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80'

const highlights = [
  { value: '2018', label: 'Year founded' },
  { value: 'Senior-only', label: 'Stylist team' },
  { value: '5.0★', label: 'Average rating' },
]

function About() {
  return (
    <section id="about" className="bg-cream px-6 py-24 sm:py-28 lg:py-32">
      <Reveal className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Story */}
        <div className="max-w-xl">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
            Our Story
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            A calm hour that’s entirely yours.
          </h2>

          <div className="mt-6 space-y-5 text-charcoal-soft">
            <p>
              Aria began with a simple idea: that a salon could feel less like a
              production line and more like a calm hour that belongs entirely to
              you.
            </p>
            <p>
              We keep the team small and senior, the schedule unhurried, and the
              focus on hair that suits your life — colour that grows out softly,
              cuts that fall back into place between visits.
            </p>
            <p>
              From the first consultation to the final spritz, every appointment
              is built around you: kind-to-hair products, honest advice, and a
              space designed to slow down in.
            </p>
          </div>

          {/* Highlights */}
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-sand pt-8">
            {highlights.map((h) => (
              <div key={h.label}>
                <dt className="sr-only">{h.label}</dt>
                <dd className="font-serif text-2xl text-plum sm:text-3xl">
                  {h.value}
                </dd>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.15em] text-taupe">
                  {h.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-sand shadow-md sm:aspect-[3/4] lg:aspect-[4/5]">
            <img
              src={aboutImage}
              alt="The Aria Hair Studio interior — soft light, plum styling chairs, and mirrors"
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* Soft-gold detail accent */}
          <div
            className="absolute -bottom-4 -left-4 -z-10 hidden h-32 w-32 rounded-2xl bg-gold-soft/40 lg:block"
            aria-hidden="true"
          />
        </div>
      </Reveal>
    </section>
  )
}

export default About
