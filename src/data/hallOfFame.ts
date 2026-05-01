export interface HallOfFameEntry {
  brand: string;
  generic: string;
  yearCoined?: number;
  origin: string;
  citation: string;
}

export const HALL_OF_FAME: HallOfFameEntry[] = [
  {
    brand: "Kleenex",
    generic: "facial tissue",
    yearCoined: 1924,
    origin: "Kimberly-Clark, Wisconsin",
    citation:
      "So thoroughly absorbed into the language that the asking of brand at the pharmacy counter has become quaint.",
  },
  {
    brand: "Band-Aid",
    generic: "adhesive bandage",
    yearCoined: 1920,
    origin: "Johnson & Johnson, New Jersey",
    citation:
      "A trademark so trusted that the wound is dressed before the brand is even consciously selected.",
  },
  {
    brand: "Q-Tips",
    generic: "cotton swab",
    yearCoined: 1923,
    origin: "Leo Gerstenzang, New York",
    citation:
      "The 'Q' stood for quality. A pledge upheld for over a century.",
  },
  {
    brand: "Velcro",
    generic: "hook-and-loop fastener",
    yearCoined: 1955,
    origin: "Georges de Mestral, Switzerland",
    citation:
      "Inspired by the burdock plant. Adopted by NASA. Absorbed into every wardrobe of the modern child.",
  },
  {
    brand: "Jell-O",
    generic: "flavored gelatin dessert",
    yearCoined: 1897,
    origin: "Pearle Wait, LeRoy, New York",
    citation:
      "The jiggling cornerstone of the church potluck. A rare brand to outlast its century.",
  },
  {
    brand: "Crock-Pot",
    generic: "slow cooker",
    yearCoined: 1971,
    origin: "Rival Manufacturing, Kansas City",
    citation:
      "The unhurried hero of the working family's evening meal.",
  },
  {
    brand: "Popsicle",
    generic: "ice pop",
    yearCoined: 1923,
    origin: "Frank Epperson, San Francisco",
    citation:
      "An accidental invention by an eleven-year-old. The frozen embodiment of childhood.",
  },
  {
    brand: "Frisbee",
    generic: "flying disc",
    yearCoined: 1957,
    origin: "Wham-O, California",
    citation:
      "Named for the Frisbie Pie Company, whose tins were the original projectile of the Yale lawn.",
  },
  {
    brand: "Thermos",
    generic: "vacuum flask",
    yearCoined: 1904,
    origin: "Thermos GmbH, Germany",
    citation:
      "The original keeper of the hot — and the cold. Indispensable to the lunchbox of the working man.",
  },
  {
    brand: "Tupperware",
    generic: "plastic food container",
    yearCoined: 1946,
    origin: "Earl Tupper, Massachusetts",
    citation:
      "Sold not in stores, but in living rooms. A revolution in domestic storage.",
  },
  {
    brand: "Tabasco",
    generic: "hot pepper sauce",
    yearCoined: 1868,
    origin: "Edmund McIlhenny, Avery Island, Louisiana",
    citation:
      "The little red bottle that has presided over the American breakfast table for over a century and a half.",
  },
  {
    brand: "Sharpie",
    generic: "permanent marker",
    yearCoined: 1964,
    origin: "Sanford Ink Company, Illinois",
    citation:
      "The signature of the autograph, the warning on the leftover, the marker of the moving box.",
  },
];

export const ASPIRING: HallOfFameEntry[] = [
  {
    brand: "Tater Tots®",
    generic: "(see: taters, seasoned shredded potatoes)",
    yearCoined: 1953,
    origin: "Ore-Ida, Ontario, Oregon",
    citation:
      "A registered trademark of the Ore-Ida Foods division of the H.J. Heinz Company. Currently under the stewardship of the Council, and approaching cultural escape velocity.",
  },
];
