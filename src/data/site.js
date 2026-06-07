// Central site configuration for Aria Hair Studio.
// Single source of truth for contact details, hours, socials, and the
// booking link — reused by the navbar, footer, and contact section.
//
// NOTE: This is a fictional portfolio demo. Phone, address, email, social
// handles, and the booking URL are placeholders to be swapped for the real
// salon's details.

export const site = {
  name: 'Aria Hair Studio',
  shortName: 'Aria',
  tagline: 'Considered, contemporary hair — crafted for you.',

  phone: '(519) 555-0142',
  phoneHref: 'tel:+15195550142',
  email: 'hello@ariahairstudio.ca',

  address: {
    line1: '88 Colborne Street',
    line2: 'Brantford, ON N3T 2G7',
    // Used for the embedded map / directions in the contact section (step 11).
    mapQuery: '88 Colborne Street, Brantford, ON',
  },

  // Placeholder external booking link — swap for the salon's real
  // Fresha / Booksy booking URL. There is no booking backend in this demo.
  bookingUrl: 'https://www.fresha.com/',

  hours: [
    { day: 'Tuesday – Friday', time: '9:00 AM – 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
    { day: 'Sunday – Monday', time: 'Closed' },
  ],

  socials: [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Facebook', href: 'https://facebook.com' },
  ],
}

// Anchor links shown in the navbar and footer. Each href maps to a
// section id defined in src/components/sections.
export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Stylists', href: '#stylists' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
