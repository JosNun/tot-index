import {
  PRICE_PER_TOT,
  TOT_WEIGHT_GRAMS,
  type Brand,
} from "../data/constants";

export function totsForPrice(priceUsd: number, brand: Brand): number {
  return priceUsd / PRICE_PER_TOT[brand];
}

export function formatTotCount(n: number): string {
  if (n < 10) return n.toFixed(1);
  if (n < 1_000) return Math.round(n).toLocaleString("en-US");
  if (n < 1_000_000) return Math.round(n).toLocaleString("en-US");
  if (n < 1_000_000_000) {
    const m = n / 1_000_000;
    return `${m >= 100 ? Math.round(m) : m.toFixed(m >= 10 ? 1 : 2)} million`;
  }
  if (n < 1_000_000_000_000) {
    const b = n / 1_000_000_000;
    return `${b >= 100 ? Math.round(b) : b.toFixed(b >= 10 ? 1 : 2)} billion`;
  }
  const t = n / 1_000_000_000_000;
  return `${t.toFixed(2)} trillion`;
}

export function formatPrice(usd: number): string {
  if (usd < 1) return `$${usd.toFixed(2)}`;
  if (usd < 1_000) return `$${usd.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  if (usd < 1_000_000) return `$${Math.round(usd).toLocaleString("en-US")}`;
  if (usd < 1_000_000_000) {
    const m = usd / 1_000_000;
    return `$${m >= 10 ? m.toFixed(1) : m.toFixed(2)} million`;
  }
  const b = usd / 1_000_000_000;
  return `$${b.toFixed(2)} billion`;
}

export function totsToWeightLbs(tots: number): number {
  return (tots * TOT_WEIGHT_GRAMS) / 453.592;
}

export function formatWeight(lbs: number): string {
  if (lbs < 1) return `${(lbs * 16).toFixed(1)} oz`;
  if (lbs < 1_000) return `${lbs.toLocaleString("en-US", { maximumFractionDigits: 1 })} lbs`;
  if (lbs < 2_000_000) {
    const tons = lbs / 2000;
    return `${tons >= 100 ? Math.round(tons) : tons.toFixed(1)} tons`;
  }
  const ktons = lbs / 2_000_000;
  return `${ktons.toFixed(1)} thousand tons`;
}

/** Volume in cubic feet from a tot count, assuming 10 ml per tot. */
export function totsToCubicFeet(tots: number): number {
  return (tots * 10) / 28316.85;
}

export function formatVolume(cubicFeet: number): string {
  if (cubicFeet < 1) {
    const cubicInches = cubicFeet * 1728;
    return `${cubicInches.toFixed(1)} cu. in.`;
  }
  if (cubicFeet < 10_000) {
    return `${cubicFeet.toLocaleString("en-US", { maximumFractionDigits: 1 })} cu. ft.`;
  }
  return `${Math.round(cubicFeet).toLocaleString("en-US")} cu. ft.`;
}

/**
 * For a given footprint in square feet, how many feet deep does this many tots
 * cover the footprint? Returns feet (decimal).
 */
export function depthOverFootprint(tots: number, footprintSqFt: number): number {
  return totsToCubicFeet(tots) / footprintSqFt;
}

export function formatDepth(feet: number): string {
  if (feet < 1 / 12) {
    return `${(feet * 12).toFixed(2)} inches`;
  }
  if (feet < 1) {
    return `${(feet * 12).toFixed(1)} inches`;
  }
  return `${feet.toFixed(1)} feet`;
}
