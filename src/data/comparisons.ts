export type Category =
  | "daily"
  | "subscriptions"
  | "transport"
  | "shelter"
  | "tech"
  | "healthcare"
  | "lifestyle"
  | "time"
  | "civic"
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
  subscriptions: "Recurring Indulgences",
  transport: "Personal Transport",
  shelter: "Hearth & Home",
  tech: "Modern Conveniences",
  healthcare: "Matters of the Body",
  lifestyle: "Leisure & Ceremony",
  time: "The Hours of Labor",
  civic: "Civic Expenditures",
  milestone: "Life's Great Outlays",
};

export const CATEGORY_TAGLINES: Record<Category, string> = {
  daily: "Reconsider the everyday meal.",
  subscriptions: "The monthly toll, denominated in starch.",
  transport: "Move yourself, or feed yourself.",
  shelter: "The four walls, recast in starch.",
  tech: "Today's gadgetry, weighed against tradition.",
  healthcare: "What it costs to remain alive.",
  lifestyle: "Special occasions deserve special accounting.",
  time: "The dollar per hour. The tot per hour.",
  civic: "The collective accounting.",
  milestone: "The big-ticket choices, in their proper unit.",
};

export const CATEGORY_ORDER: Category[] = [
  "daily",
  "subscriptions",
  "transport",
  "shelter",
  "tech",
  "healthcare",
  "lifestyle",
  "time",
  "civic",
  "milestone",
];

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
  {
    id: "subway-fare",
    name: "A Single Subway Fare",
    category: "daily",
    priceUsd: 2.9,
    blurb: "The price of admission to the city beneath the city.",
    spatial:
      "A modest handful — to be eaten before the train arrives, certainly before the next stop.",
  },
  {
    id: "craft-cocktail",
    name: "A Craft Cocktail",
    category: "daily",
    priceUsd: 16,
    blurb: "Hand-shaken, hand-priced, reconsidered.",
    spatial:
      "A heaping mound of tots — sufficient to soak up the very drink you elected not to order.",
  },

  // Subscriptions
  {
    id: "streaming-monthly",
    name: "A Streaming Service, Monthly",
    category: "subscriptions",
    priceUsd: 23,
    blurb: "What the prestige drama costs, weighed in starch.",
    spatial:
      "A monthly bag of tots, standing in for the streaming queue you have not actually watched.",
  },
  {
    id: "gym-monthly",
    name: "A Monthly Gym Membership",
    category: "subscriptions",
    priceUsd: 50,
    blurb: "The treadmill goes unused. The tots do not.",
    spatial:
      "A month's worth of tots — caloric mockery of the very membership in question.",
  },
  {
    id: "newspaper-monthly",
    name: "A Newspaper Subscription",
    category: "subscriptions",
    priceUsd: 25,
    blurb: "The morning paper, weighed in golden cylinders.",
    spatial:
      "A serving of tots large enough to read alongside, with one hand free for either.",
  },
  {
    id: "streaming-bundle-monthly",
    name: "The Family Streaming Bundle",
    category: "subscriptions",
    priceUsd: 80,
    blurb: "Every screen in the house, monthly.",
    spatial:
      "Sufficient tots to feed the entire household through the season finale, with leftovers.",
  },
  {
    id: "daily-coffee-monthly",
    name: "A Daily Coffee Habit, Monthly",
    category: "subscriptions",
    priceUsd: 195,
    blurb: "Thirty mornings, each $6.50 the wiser.",
    spatial:
      "A month's worth of tots — the equivalent caffeine intake from sheer chewing satisfaction.",
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

  // Healthcare
  {
    id: "er-visit",
    name: "An Emergency Room Visit",
    category: "healthcare",
    priceUsd: 2200,
    blurb: "Four hours in the waiting room, weighed properly.",
    spatial:
      "Tots filling the very chair you sat in, with enough left over to share with the triage nurse.",
  },
  {
    id: "insurance-family-annual",
    name: "A Family's Annual Health Insurance",
    category: "healthcare",
    priceUsd: 24000,
    blurb: "The premium paid before the deductible is met.",
    spatial:
      "An entire garage filled with tots — and the deductible has, as yet, not been met.",
  },
  {
    id: "mri-scan",
    name: "A Single MRI",
    category: "healthcare",
    priceUsd: 1300,
    blurb: "Forty minutes of imaging, in starch terms.",
    spatial:
      "Tots filling the scanner tube itself — at considerably less expense per slice.",
  },
  {
    id: "ambulance-ride",
    name: "An Ambulance Ride",
    category: "healthcare",
    priceUsd: 1500,
    blurb: "Six miles, lights and sirens, properly accounted for.",
    spatial:
      "A gurney piled high with tots — the patient ride included, the bill arriving separately.",
  },
  {
    id: "prescription-monthly",
    name: "A Monthly Generic Prescription",
    category: "healthcare",
    priceUsd: 15,
    blurb: "Thirty pills, once daily, in tot terms.",
    spatial:
      "The pill bottle, recapped — and replaced, capacity for capacity, with crisped cylinders.",
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
  {
    id: "ps5",
    name: "A PlayStation 5",
    category: "tech",
    priceUsd: 499,
    blurb: "Eight teraflops of processing, weighed in starch.",
    spatial:
      "Tots filling the console's box twelve times — and far easier to share with a sibling.",
  },
  {
    id: "airpods-pro",
    name: "A Pair of AirPods Pro",
    category: "tech",
    priceUsd: 249,
    blurb: "Pocket-sized audio, pocket-sized accounting.",
    spatial:
      "A small bowl of tots — quieter, but more nourishing.",
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
  {
    id: "funeral-average",
    name: "An Average American Funeral",
    category: "lifestyle",
    priceUsd: 9500,
    blurb: "The final transaction, denominated in starch.",
    spatial:
      "Tots enough to feed every guest in attendance — and the deceased, were the matter not concluded.",
  },
  {
    id: "divorce-uncontested",
    name: "An Uncontested Divorce",
    category: "lifestyle",
    priceUsd: 15000,
    blurb: "A clean split, in the most stable unit available.",
    spatial:
      "Tots sufficient to be divided, equitably, between two newly separate households.",
  },
  {
    id: "golf-round",
    name: "A Round at a Public Course",
    category: "lifestyle",
    priceUsd: 65,
    blurb: "Eighteen holes, fully accounted for.",
    spatial:
      "Enough tots to share with the foursome, and the cart girl besides.",
  },

  // Time / Labor
  {
    id: "minimum-wage-hour",
    name: "An Hour at Federal Minimum Wage",
    category: "time",
    priceUsd: 7.25,
    blurb: "Sixty minutes of labor, before withholding.",
    spatial:
      "A snack-sized bag — to be eaten standing, on the fifteen-minute break.",
  },
  {
    id: "median-wage-hour",
    name: "An Hour at the Median Wage",
    category: "time",
    priceUsd: 24,
    blurb: "What an average American hour is worth.",
    spatial:
      "A bag of tots earned per hour — taxes, of course, applied to both.",
  },
  {
    id: "therapy-hour",
    name: "An Hour of Psychotherapy",
    category: "time",
    priceUsd: 175,
    blurb: "Fifty-three minutes of clinical attention.",
    spatial:
      "A heaping plate of tots — comfort eating is, in its own way, a treatment plan.",
  },
  {
    id: "lawyer-hour",
    name: "An Hour of a Top NYC Attorney",
    category: "time",
    priceUsd: 1500,
    blurb: "Sixty minutes of billable counsel.",
    spatial:
      "A bushel of tots per minute of legal advice — chew while you listen.",
  },
  {
    id: "lifetime-earnings",
    name: "A Worker's Lifetime Earnings",
    category: "time",
    priceUsd: 2_700_000,
    blurb: "Forty-five years of labor, in their proper unit.",
    spatial:
      "An entire career's compensation — converted, at last, to its caloric form.",
  },

  // Civic
  {
    id: "public-school-pupil",
    name: "One Pupil's Year of Public Education",
    category: "civic",
    priceUsd: 16500,
    blurb: "K through 12, prorated to the year.",
    spatial:
      "Tots filling a classroom desk for every student in the grade — pop quiz on starch content forthcoming.",
  },
  {
    id: "fighter-jet",
    name: "An F-35 Lightning II",
    category: "civic",
    priceUsd: 90_000_000,
    blurb: "Fifth-generation tactical airpower, weighed in tots.",
    spatial:
      "Tots filling the entire fuselage, the wings, and a generous portion of the runway.",
  },
  {
    id: "senate-campaign",
    name: "An Average Senate Campaign",
    category: "civic",
    priceUsd: 28_000_000,
    blurb: "The cost of a six-year term, won.",
    spatial:
      "Enough tots to canvass every voter in the state — door-to-door, individually delivered.",
  },
  {
    id: "mars-rover",
    name: "A Mars Rover Mission",
    category: "civic",
    priceUsd: 2_700_000_000,
    blurb: "Interplanetary science, properly accounted for.",
    spatial:
      "A continuous bridge of tots reaching well past the Moon — the Mars connection remains aspirational.",
  },
  {
    id: "nuclear-submarine",
    name: "A Nuclear-Powered Submarine",
    category: "civic",
    priceUsd: 3_500_000_000,
    blurb: "Strategic deterrence, weighed in starch.",
    spatial:
      "An ocean of tots, sealed beneath the waves, undetectable to radar.",
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
