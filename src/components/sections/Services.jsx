import { serviceGroups } from '../../data/services'
import { site } from '../../data/site'

// Services & Pricing — an elegant, readable priced menu grouped by category.
function Services() {
  return (
    <section id="services" className="bg-cream px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
            Services &amp; Pricing
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Crafted services, transparent pricing.
          </h2>
          <p className="mt-5 text-charcoal-soft">
            Every appointment begins with a conversation. The prices below are
            starting points — your stylist confirms the details with you at
            consultation.
          </p>
        </div>

        {/* Service groups */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {serviceGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-sand bg-ivory p-8 shadow-sm"
            >
              <h3 className="text-2xl">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                {group.blurb}
              </p>

              <ul className="mt-6 divide-y divide-sand">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="font-sans text-charcoal">{item.name}</span>
                    <span className="whitespace-nowrap font-sans text-sm text-charcoal-soft">
                      from{' '}
                      <span className="text-base font-medium text-plum">
                        ${item.price}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing note + CTA */}
        <div className="mt-14 flex flex-col items-center gap-6 text-center">
          <p className="max-w-xl text-sm text-charcoal-soft">
            Pricing varies with length, density, and time in the chair. New to
            the studio? Start with a complimentary consultation.
          </p>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-plum px-8 py-4 font-sans text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-plum-dark"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
