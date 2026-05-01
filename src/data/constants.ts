export const TOT_WEIGHT_GRAMS = 8.5;
export const TOT_VOLUME_ML = 10;
export const GRAMS_PER_OUNCE = 28.3495;
export const ML_PER_CUBIC_FOOT = 28316.85;
export const ML_PER_CUBIC_INCH = 16.387;

export const PRICE_PER_OUNCE = {
  name: 0.14,
  generic: 0.093,
} as const;

export const PRICE_PER_TOT = {
  name: PRICE_PER_OUNCE.name * (TOT_WEIGHT_GRAMS / GRAMS_PER_OUNCE),
  generic: PRICE_PER_OUNCE.generic * (TOT_WEIGHT_GRAMS / GRAMS_PER_OUNCE),
} as const;

export const BRAND_LABELS = {
  name: "Tater Tots",
  generic: "Taters Seasoned Shredded Potatoes",
} as const;

export const BRAND_LABELS_SHORT = {
  name: "Tater Tots",
  generic: "Taters",
} as const;

export const BRAND_PRODUCER = {
  name: "Ore-Ida",
  generic: "the broader frozen-potato category",
} as const;

export type Brand = "name" | "generic";

export const FOUNDED_YEAR = 1953;
