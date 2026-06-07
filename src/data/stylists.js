// Stylist bios for the team section.
//
// PLACEHOLDERS: free Unsplash portraits and fictional names/bios standing in
// for the real Aria team — swap for genuine staff photos and copy.
const portrait = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&h=750&q=80`

export const stylists = [
  {
    name: 'Aria Sloane',
    role: 'Founder & Creative Director',
    specialty: 'Bespoke colour & cutting',
    image: portrait('1494790108377-be9c29b29330'),
    bio: 'Aria opened the studio in 2018 after a decade behind the chair in Toronto. She is known for lived-in colour and cuts that grow out as beautifully as they begin.',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Marcus Lee',
    role: 'Senior Stylist',
    specialty: 'Precision cuts & men’s grooming',
    image: portrait('1500648767791-00dcc994a43e'),
    bio: 'A precision cutter at heart, Marcus blends classic barbering with modern texture — and never rushes a fringe.',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Priya Anand',
    role: 'Colour Specialist',
    specialty: 'Balayage & dimensional colour',
    image: portrait('1580489944761-15a19d654956'),
    bio: 'Priya’s painterly approach makes her the studio’s go-to for soft, sun-grown dimension and seamless, low-maintenance blends.',
    instagram: 'https://instagram.com',
  },
]
