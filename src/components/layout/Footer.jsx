import { site, navLinks } from '../../data/site'

// Minimal inline social glyphs (no icon dependency).
const socialIcons = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.4V5.5c-.7-.1-1.4-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.1H8.3V14h2.2v7h3z" />
    </svg>
  ),
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + socials */}
          <div>
            <a href="#home" className="flex items-baseline gap-2">
              <span className="font-serif text-2xl text-ivory">{site.shortName}</span>
              <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-taupe">
                Hair Studio
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              {site.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              {site.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-cream/70 transition-colors hover:text-gold"
                >
                  {socialIcons[s.name]}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-gold">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-ivory">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-gold">
              Visit
            </h3>
            <address className="mt-5 space-y-3 text-sm not-italic">
              <p>
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
              <p>
                <a href={site.phoneHref} className="transition-colors hover:text-ivory">
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-ivory"
                >
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-gold">
              Hours
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-cream/60">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Brantford, Ontario</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
