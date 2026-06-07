import { useState } from 'react'
import { site, navLinks } from '../../data/site'

// Sticky, responsive navbar: wordmark + anchor links + "Book Now" CTA.
// Collapses to a hamburger menu below the md breakpoint.
function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sand/70 bg-ivory/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Wordmark */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-baseline gap-2"
          aria-label={`${site.name} — back to top`}
        >
          <span className="font-serif text-2xl tracking-tight text-charcoal">
            {site.shortName}
          </span>
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-taupe transition-colors group-hover:text-gold">
            Hair Studio
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm tracking-wide text-charcoal-soft transition-colors hover:text-plum"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-plum px-5 py-2.5 font-sans text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-plum-dark md:inline-flex"
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center p-1 text-charcoal md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-sand/70 bg-ivory md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 font-sans text-base text-charcoal-soft transition-colors hover:text-plum"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block rounded-full bg-plum px-5 py-3 text-center font-sans text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-plum-dark"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
