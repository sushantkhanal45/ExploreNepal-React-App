const destinations = [
  {
    id: 1,
    name: "Kathmandu",
    slug: "kathmandu",
    region: "Bagmati",
    category: "Culture",
    location: "Kathmandu Valley",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1400&q=85",
    shortDescription:
      "Explore ancient temples, historic squares, vibrant streets, and the rich culture of Nepal's capital city.",
    description:
      "Kathmandu is the capital and cultural heart of Nepal. The city is known for its ancient temples, UNESCO World Heritage sites, traditional architecture, colorful markets, and vibrant local life.",
    bestTime:
      "September to November and March to May",
    duration:
      "2–4 days",
    elevation:
      "1,400 m",
    coordinates: {
      latitude: 27.7172,
      longitude: 85.324,
    },
    highlights: [
      "Boudhanath Stupa",
      "Swayambhunath",
      "Kathmandu Durbar Square",
      "Pashupatinath Temple",
    ],
  },

  {
    id: 2,
    name: "Pokhara",
    slug: "pokhara",
    region: "Gandaki",
    category: "Nature",
    location: "Kaski District",
    image:
  "https://images.pexels.com/photos/14989387/pexels-photo-14989387.jpeg?auto=compress&cs=tinysrgb&w=1400",
    shortDescription:
      "Enjoy peaceful lakes, mountain views, adventure activities, and beautiful sunsets.",
    description:
      "Pokhara is one of Nepal's most popular travel destinations. It is famous for Phewa Lake, views of the Annapurna range, paragliding, waterfalls, caves, and a relaxed lakeside atmosphere.",
    bestTime:
      "September to November and March to May",
    duration:
      "2–4 days",
    elevation:
      "822 m",
    coordinates: {
      latitude: 28.2096,
      longitude: 83.9856,
    },
    highlights: [
      "Phewa Lake",
      "World Peace Pagoda",
      "Sarangkot",
      "Davis Falls",
    ],
  },

  {
    id: 3,
    name: "Lumbini",
    slug: "lumbini",
    region: "Lumbini",
    category: "Spiritual",
    location: "Rupandehi District",
   image:
  "https://images.pexels.com/photos/7331531/pexels-photo-7331531.jpeg?auto=compress&cs=tinysrgb&w=1400",
    shortDescription:
      "Visit the birthplace of Lord Buddha and explore peaceful monasteries and sacred sites.",
    description:
      "Lumbini is the birthplace of Siddhartha Gautama, who later became Gautama Buddha. The sacred area includes the Maya Devi Temple, the Ashoka Pillar, monasteries, meditation spaces, and the peaceful Lumbini Garden.",
    bestTime:
      "October to March",
    duration:
      "1–2 days",
    elevation:
      "150 m",
    coordinates: {
      latitude: 27.4833,
      longitude: 83.2767,
    },
    highlights: [
      "Maya Devi Temple",
      "Ashoka Pillar",
      "Sacred Garden",
      "International Monastic Zone",
    ],
  },

  {
    id: 4,
    name: "Chitwan",
    slug: "chitwan",
    region: "Bagmati",
    category: "Wildlife",
    location: "Chitwan District",
    image:
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1400&q=85",
    shortDescription:
      "Experience jungle safaris, wildlife, local culture, and the natural beauty of Chitwan.",
    description:
      "Chitwan is famous for Chitwan National Park, one of Nepal's most important wildlife areas. Visitors can enjoy jungle safaris, bird watching, canoe rides, and cultural experiences.",
    bestTime:
      "October to March",
    duration:
      "2–3 days",
    elevation:
      "415 m",
    coordinates: {
      latitude: 27.5291,
      longitude: 84.3542,
    },
    highlights: [
      "Chitwan National Park",
      "Jungle Safari",
      "Tharu Culture",
      "Rapti River",
    ],
  },

  {
    id: 5,
    name: "Mustang",
    slug: "mustang",
    region: "Gandaki",
    category: "Adventure",
    location: "Mustang District",
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1400&q=85",
    shortDescription:
      "Discover dramatic desert landscapes, ancient caves, monasteries, and Himalayan culture.",
    description:
      "Mustang is known for its dry mountain landscapes, deep valleys, ancient settlements, Tibetan-influenced culture, and the historic walled city of Lo Manthang.",
    bestTime:
      "May to October",
    duration:
      "5–8 days",
    elevation:
      "3,840 m",
    coordinates: {
      latitude: 29.1867,
      longitude: 83.9596,
    },
    highlights: [
      "Lo Manthang",
      "Muktinath",
      "Kagbeni",
      "Ancient Caves",
    ],
  },

  {
    id: 6,
    name: "Everest Base Camp",
    slug: "everest-base-camp",
    region: "Koshi",
    category: "Trekking",
    location: "Solukhumbu District",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
    shortDescription:
      "Take an unforgettable trek through the Himalayas toward the base of the world's highest mountain.",
    description:
      "The Everest Base Camp trek takes travelers through Sherpa villages, forests, suspension bridges, and high Himalayan landscapes with spectacular views of Mount Everest.",
    bestTime:
      "March to May and September to November",
    duration:
      "12–16 days",
    elevation:
      "5,364 m",
    coordinates: {
      latitude: 28.0043,
      longitude: 86.852,
    },
    highlights: [
      "Mount Everest",
      "Namche Bazaar",
      "Tengboche Monastery",
      "Kala Patthar",
    ],
  },

  {
    id: 7,
    name: "Annapurna",
    slug: "annapurna",
    region: "Gandaki",
    category: "Trekking",
    location: "Annapurna Region",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85",
    shortDescription:
      "Trek through forests, mountain villages, valleys, and spectacular Himalayan landscapes.",
    description:
      "The Annapurna region is one of the world's most famous trekking destinations. It offers diverse landscapes, traditional villages, mountain views, and several trekking routes.",
    bestTime:
      "March to May and September to November",
    duration:
      "7–15 days",
    elevation:
      "5,416 m",
    coordinates: {
      latitude: 28.596,
      longitude: 83.82,
    },
    highlights: [
      "Annapurna Base Camp",
      "Poon Hill",
      "Machhapuchhre",
      "Ghandruk Village",
    ],
  },

  {
    id: 8,
    name: "Ilam",
    slug: "ilam",
    region: "Koshi",
    category: "Nature",
    location: "Ilam District",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",
    shortDescription:
      "Explore green tea gardens, peaceful hills, forests, and beautiful sunrise viewpoints.",
    description:
      "Ilam is known for its rolling tea gardens, green hills, peaceful villages, and scenic viewpoints. It is a relaxing destination in eastern Nepal.",
    bestTime:
      "October to April",
    duration:
      "2–3 days",
    elevation:
      "1,200 m",
    coordinates: {
      latitude: 26.911,
      longitude: 87.9282,
    },
    highlights: [
      "Kanyam Tea Garden",
      "Antu Danda",
      "Mai Pokhari",
      "Tea Estates",
    ],
  },
];

export default destinations;