import { useState } from 'react'
import { site } from '../../data/site'
import Reveal from '../Reveal'

const SERVICES = [
  'General enquiry',
  'Cut & style',
  'Colour',
  'Balayage',
  'Extensions',
  'Treatments',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMPTY = { name: '', email: '', phone: '', service: SERVICES[0], message: '' }

// Embedded Google Map (keyless) + directions link.
// We target the frameable /maps/embed endpoint directly. The simpler
// `?q=...&output=embed` form only reaches it via a 301 whose redirect carries
// X-Frame-Options: SAMEORIGIN, which can block the frame in some browsers; the
// endpoint below responds 200 with no X-Frame-Options. `!1m2!2m1!1s<query>` is
// the minimal `pb` payload for a text-query map.
const mapEmbedSrc = `https://www.google.com/maps/embed?pb=!1m2!2m1!1s${site.address.mapQuery.replace(
  /\s+/g,
  '+',
)}`
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.address.mapQuery,
)}`

// Contact — front-end-only form (no backend; submission is simulated),
// visit details with click-to-call, and an embedded map.
function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    // Clear a field's error as the user corrects it.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter your email.'
    else if (!EMAIL_RE.test(values.email)) next.email = 'Please enter a valid email.'
    if (!values.message.trim()) next.message = 'Please add a short message.'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      // NOTE: front-end demo only — no request is sent anywhere.
      setSubmitted(true)
    }
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setSubmitted(false)
  }

  const fieldClass = (field) =>
    `mt-2 w-full rounded-lg border bg-ivory px-4 py-3 font-sans text-sm text-charcoal outline-none transition-colors focus:border-plum ${
      errors[field] ? 'border-plum-soft' : 'border-sand'
    }`

  return (
    <section id="contact" className="bg-ivory px-6 py-24 sm:py-28 lg:py-32">
      <Reveal className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
            Get in touch
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Book your chair</h2>
          <p className="mt-5 text-charcoal-soft">
            Send a note and we’ll reply within one business day — or book
            instantly online.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <div className="rounded-2xl border border-sand bg-cream p-8 sm:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-plum/10 text-plum">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-5 text-2xl">Thank you, {values.name.split(' ')[0]}.</h3>
                <p className="mt-3 max-w-sm text-sm text-charcoal-soft">
                  Your message is on its way. We’ll be in touch within one
                  business day to find a time that works.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 font-sans text-sm text-plum underline-offset-4 transition-colors hover:text-plum-dark hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal-soft">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={update}
                      className={fieldClass('name')}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-plum">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal-soft">
                      Phone <span className="text-taupe">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={update}
                      className={fieldClass('phone')}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal-soft">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={update}
                      className={fieldClass('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-plum">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal-soft">
                      Interested in
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={values.service}
                      onChange={update}
                      className={`${fieldClass('service')} appearance-none`}
                    >
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="font-sans text-xs uppercase tracking-[0.15em] text-charcoal-soft">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={update}
                      className={`${fieldClass('message')} resize-y`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-plum">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-7 w-full rounded-full bg-plum px-8 py-4 font-sans text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-plum-dark sm:w-auto"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Visit details */}
          <div className="flex flex-col">
            <div className="space-y-8">
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-gold">
                  Visit
                </h3>
                <address className="mt-3 text-lg not-italic leading-relaxed text-charcoal">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </address>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-sans text-sm text-plum underline-offset-4 transition-colors hover:text-plum-dark hover:underline"
                >
                  Get directions →
                </a>
              </div>

              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-gold">
                  Call or email
                </h3>
                <p className="mt-3">
                  <a href={site.phoneHref} className="text-lg text-charcoal transition-colors hover:text-plum">
                    {site.phone}
                  </a>
                </p>
                <p className="mt-1">
                  <a href={`mailto:${site.email}`} className="text-charcoal-soft transition-colors hover:text-plum">
                    {site.email}
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-gold">
                  Hours
                </h3>
                <ul className="mt-3 space-y-2">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6 text-charcoal-soft">
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full border border-plum px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-plum transition-colors hover:bg-plum hover:text-ivory"
              >
                Book online instead
              </a>
            </div>
          </div>
        </div>

        {/* Embedded map */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-sand">
          <iframe
            title={`Map to ${site.name}`}
            src={mapEmbedSrc}
            className="h-[360px] w-full border-0 sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </section>
  )
}

export default Contact
