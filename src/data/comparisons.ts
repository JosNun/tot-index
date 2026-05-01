export type Category =
  | "daily"
  | "transport"
  | "shelter"
  | "tech"
  | "lifestyle"
  | "milestone";

export interface Comparison {
  id: string;
  name: string;
  category: Category;
  priceUsd: number;
  /** Marketing-grade spatial framing. One sentence, present tense. */
  spatial: string;
  /** Subtitle / blurb beneath the headline number. */
  blurb: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  daily: "Daily Sustenance",
  transport: "Personal Transport",
  shelter: "Hearth & Home",
  tech: "Modern Conveniences",
  lifestyle: "Leisure & Ceremony",
  milestone: "Life's Great Outlays",
};

export const CATEGORY_TAGLINES: Record<Category, string> = {
  daily: "Reconsider the everyday meal.",
  transport: "Move yourself, or feed yourself.",
  shelter: "The four walls, recast in starch.",
  tech: "Today's gadgetry, weighed against tradition.",
  lifestyle: "Special occasions deserve special accounting.",
  milestone: "The big-ticket choices, in their proper unit.",
};

export const COMPARISONS: Comparison[] = [
  // Daily Sustenance
  {
    id: "specialty-coffee",
    name: "A Specialty Coffee",
    category: "daily",
    priceUsd: 6.5,
    blurb: "The morning ritual, reconsidered.",
    spatial:
      "Enough golden cylinders to fill the cup four times — and you would still be awake.",
  },
  {
    id: "fast-food-combo",
    name: "A Fast Food Combo Meal",
    category: "daily",
    priceUsd: 12,
    blurb: "Why settle for a single patty?",
    spatial:
      "Three trays' worth of tots, served at the temperature only the drive-thru can promise.",
  },
  {
    id: "avocado-toast",
    name: "Brunchtime Avocado Toast",
    category: "daily",
    priceUsd: 16,
    blurb: "A modern indulgence, recontextualized.",
    spatial:
      "A heaping mound of tots that overflows the plate and reaches the rim of the water glass.",
  },
  {
    id: "supermarket-week",
    name: "A Family's Weekly Groceries",
    category: "daily",
    priceUsd: 285,
    blurb: "An entire shopping cart, denominated in starch.",
    spatial:
      "Tots filling every paper bag the cashier can produce — and a few of the plastic ones besides.",
  },

  // Transport
  {
    id: "tank-of-gas",
    name: "A Tank of Regular Unleaded",
    category: "transport",
    priceUsd: 65,
    blurb: "Are you fueling the car, or the driver?",
    spatial:
      "Thirteen kilos of crisped potato — heavier than a full tank of fuel itself.",
  },
  {
    id: "uber-cross-town",
    name: "A Cross-Town Rideshare",
    category: "transport",
    priceUsd: 28,
    blurb: "Twenty minutes of your time, in tot terms.",
    spatial:
      "A bucket of tots large enough to share with both the driver and his next two passengers.",
  },
  {
    id: "used-civic",
    name: "A Reliable Used Sedan",
    category: "transport",
    priceUsd: 18000,
    blurb: "Ten years of dependable service, valued plainly.",
    spatial:
      "Tots filling the cabin floor-to-ceiling, packing the trunk, and overflowing onto the driveway.",
  },
  {
    id: "tesla-model-3",
    name: "A New Electric Sedan",
    category: "transport",
    priceUsd: 42000,
    blurb: "Range anxiety, but for snacks.",
    spatial:
      "Enough tots to bury the entire vehicle nearly to the roofline in golden cylinders.",
  },

  // Shelter
  {
    id: "monthly-rent",
    name: "A Month's Rent in the City",
    category: "shelter",
    priceUsd: 3500,
    blurb: "Six hundred square feet, denominated in starch.",
    spatial:
      "Tots filling the refrigerator twice over — and the freezer thrice.",
  },
  {
    id: "family-home",
    name: "A 2,000 Sq. Ft. Family Home",
    category: "shelter",
    priceUsd: 450000,
    blurb: "The American dream, recast in golden cylinders.",
    spatial:
      "Spread across the home's footprint, the equivalent buries every floor under nearly two feet of tots.",
  },
  {
    id: "inground-pool",
    name: "A Backyard Inground Pool",
    category: "shelter",
    priceUsd: 65000,
    blurb: "Summertime luxury, reconsidered.",
    spatial:
      "Tots enough to fill the shallow end, end-to-end, lane-line to lane-line.",
  },
  {
    id: "mansion",
    name: "A 10,000 Sq. Ft. Estate",
    category: "shelter",
    priceUsd: 5000000,
    blurb: "Luxury living, in its proper accounting.",
    spatial:
      "Tots covering every square foot of the estate four feet deep — pantry to portico.",
  },

  // Tech
  {
    id: "iphone",
    name: "A New Premium Smartphone",
    category: "tech",
    priceUsd: 999,
    blurb: "Pocket-sized device, pocket-sized accounting?",
    spatial:
      "A pile of tots that outweighs the phone by a factor of two hundred.",
  },
  {
    id: "macbook",
    name: "A Professional Laptop",
    category: "tech",
    priceUsd: 2499,
    blurb: "Modern computation, weighed against tradition.",
    spatial:
      "Tots enough to fill ten backpacks brimming over the zipper.",
  },
  {
    id: "tv-65inch",
    name: "A 65-inch 4K Television",
    category: "tech",
    priceUsd: 800,
    blurb: "The big screen, in its starchier denomination.",
    spatial:
      "A wall of tots, sized exactly to the screen, five full inches thick.",
  },
  {
    id: "vr-headset",
    name: "A New Virtual Reality Headset",
    category: "tech",
    priceUsd: 499,
    blurb: "Immersion you can taste.",
    spatial:
      "A box of tots large enough to obscure the user's vision entirely.",
  },

  // Lifestyle
  {
    id: "concert-ticket",
    name: "A Stadium Concert Seat",
    category: "lifestyle",
    priceUsd: 250,
    blurb: "Front-row entertainment, reconsidered.",
    spatial:
      "Three five-gallon buckets of tots — your row will thank you.",
  },
  {
    id: "wedding",
    name: "The Average American Wedding",
    category: "lifestyle",
    priceUsd: 35000,
    blurb: "A celebration of starch, and starch alone.",
    spatial:
      "Six thousand tots per guest. The caterer is dismissed.",
  },
  {
    id: "vacation-week",
    name: "A Week at the Beach",
    category: "lifestyle",
    priceUsd: 4200,
    blurb: "Family memories, weighed against family meals.",
    spatial:
      "Tots enough to line the beach umbrella's perimeter and feed the seagulls for hours.",
  },

  // Milestone
  {
    id: "median-income",
    name: "The Median Annual U.S. Salary",
    category: "milestone",
    priceUsd: 75000,
    blurb: "A year of labor, weighed plainly.",
    spatial:
      "A bedroom-sized cube of tots, eight feet on every side.",
  },
  {
    id: "college-year",
    name: "One Year of Private College",
    category: "milestone",
    priceUsd: 60000,
    blurb: "An education, denominated in tots.",
    spatial:
      "Six thousand tots per day for the entire academic year. The dining plan is moot.",
  },
  {
    id: "lifetime-healthcare",
    name: "Lifetime Healthcare Costs",
    category: "milestone",
    priceUsd: 320000,
    blurb: "The cost of staying alive, in golden cylinders.",
    spatial:
      "A lifetime supply — the medical attention may, in fact, follow.",
  },
  {
    id: "median-home-price",
    name: "The Median U.S. Home Sale Price",
    category: "milestone",
    priceUsd: 415000,
    blurb: "What the average American door costs to walk through.",
    spatial:
      "Tots numbering nearly ten million. The mortgage application is hereby withdrawn.",
  },
];
