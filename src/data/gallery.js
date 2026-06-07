// Gallery images for the transformation grid.
//
// PLACEHOLDERS: free Unsplash photos with descriptive captions, standing in
// for the salon's real before/after client work. Swap the `id` and copy for
// genuine portfolio shots. Mixed aspect ratios feed the masonry layout, and
// captions are written to match what each photo actually shows.
const img = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`

export const galleryItems = [
  { src: img('1492106087820-71f1a00d2b11'), caption: 'Dimensional lavender' },
  { src: img('1519699047748-de8e457a634e'), caption: 'Defined natural curls' },
  { src: img('1580618672591-eb180b1a973f'), caption: 'Precision blow-out' },
  { src: img('1605980776566-0486c3ac7617'), caption: 'Sharp men’s cut' },
  { src: img('1595476108010-b4d1f102b1b1'), caption: 'At the wash basin' },
  { src: img('1502823403499-6ccfcf4fb453'), caption: 'Soft textured updo' },
  { src: img('1562322140-8baeececf3df'), caption: 'Finishing touches' },
  { src: img('1503951914875-452162b0f3f1'), caption: 'Classic gentleman’s grooming' },
  { src: img('1633681926022-84c23e8cb2d6'), caption: 'Inside the studio' },
]
