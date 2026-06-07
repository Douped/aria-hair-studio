// Temporary design-token proof screen.
// This is replaced by the real section components in later roadmap steps —
// for now it just verifies Tailwind v4 and the Aria design tokens render.
function App() {
  const swatches = [
    { name: 'Ivory', className: 'bg-ivory border border-sand' },
    { name: 'Cream', className: 'bg-cream' },
    { name: 'Sand', className: 'bg-sand' },
    { name: 'Taupe', className: 'bg-taupe' },
    { name: 'Charcoal', className: 'bg-charcoal' },
    { name: 'Plum', className: 'bg-plum' },
    { name: 'Plum dark', className: 'bg-plum-dark' },
    { name: 'Gold', className: 'bg-gold' },
  ]

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
        Aria Hair Studio
      </p>
      <h1 className="mt-4 text-5xl text-charcoal sm:text-6xl">
        Design tokens, configured.
      </h1>
      <p className="mt-6 max-w-prose text-charcoal-soft">
        Fraunces for headings, Inter for body — set against a warm neutral base
        with a single restrained plum accent and a sparing touch of soft gold.
        This placeholder is swapped for the real sections in the steps ahead.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {swatches.map((s) => (
          <div key={s.name}>
            <div className={`h-20 w-full rounded-md ${s.className}`} />
            <p className="mt-2 text-sm text-charcoal-soft">{s.name}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
