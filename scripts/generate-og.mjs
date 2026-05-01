// Build-time OG image generation. Renders 1200x630 PNG cards for each
// shareable page using satori (HTML-like → SVG) + resvg (SVG → PNG).
// Output: public/og/<page>.png

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

// Pull comparison data and pricing constants directly from the TS sources
// so item OGs stay in sync. Bun runs TS imports natively.
import { COMPARISONS, CATEGORY_LABELS } from "../src/data/comparisons.ts";
import { PRICE_PER_TOT } from "../src/data/constants.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(ROOT, "public/og");

const COLORS = {
  cream: "#f3e7c9",
  creamLight: "#faf3e0",
  paper: "#ede0bf",
  brownDeep: "#2a1a10",
  brownWarm: "#5b3a21",
  gold: "#d4a437",
  goldDeep: "#b88a1f",
  rust: "#b5421c",
  rustDeep: "#8c2d10",
};

async function loadFonts() {
  const f = (rel) =>
    readFile(resolve(ROOT, "node_modules/@fontsource", rel));
  const [oswaldBold, dmSerif, loraItalic] = await Promise.all([
    f("oswald/files/oswald-latin-700-normal.woff"),
    f("dm-serif-display/files/dm-serif-display-latin-400-normal.woff"),
    f("lora/files/lora-latin-400-italic.woff"),
  ]);
  return [
    { name: "Oswald", data: oswaldBold, weight: 700, style: "normal" },
    { name: "DM Serif Display", data: dmSerif, weight: 400, style: "normal" },
    { name: "Lora", data: loraItalic, weight: 400, style: "italic" },
  ];
}

// Element constructor — keeps card layouts terse without needing JSX.
// Satori requires every <div> to have an explicit display, so we default
// to "flex" everywhere and let callers override (e.g. flexDirection).
const el = (type, style = {}, ...children) => ({
  type,
  props: {
    style: type === "div" ? { display: "flex", ...style } : style,
    children: children
      .flat()
      .filter((c) => c !== null && c !== undefined && c !== false),
  },
});
const text = (s) => s;

// Stylized tot mark, drawn as nested divs (satori has no <svg> primitive).
function totMark(size = 110) {
  const w = size * 1.7;
  return el(
    "div",
    {
      width: w,
      height: size,
      display: "flex",
      position: "relative",
      transform: "rotate(-12deg)",
    },
    el("div", {
      position: "absolute",
      inset: 0,
      borderRadius: size,
      background: COLORS.brownDeep,
    }),
    el("div", {
      position: "absolute",
      top: 4,
      bottom: 4,
      left: 4,
      right: 4,
      borderRadius: size,
      background: COLORS.goldDeep,
    }),
    el("div", {
      position: "absolute",
      top: 4,
      bottom: size * 0.3,
      left: 4,
      right: 4,
      borderRadius: size,
      background: COLORS.gold,
    }),
    el("div", {
      position: "absolute",
      top: 8,
      left: 14,
      right: 14,
      height: size * 0.12,
      borderRadius: size,
      background: "#e8c266",
    })
  );
}

// Council seal — concentric rings + year. Done with circular borders.
function seal(size = 110) {
  return el(
    "div",
    {
      width: size,
      height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: size,
      border: `3px solid ${COLORS.brownDeep}`,
      background: COLORS.creamLight,
      position: "relative",
    },
    el(
      "div",
      {
        width: size - 16,
        height: size - 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: size,
        border: `2px solid ${COLORS.brownDeep}`,
      },
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 11,
          letterSpacing: 2,
          color: COLORS.brownWarm,
          textTransform: "uppercase",
        },
        text("Council")
      ),
      el(
        "div",
        {
          fontFamily: "DM Serif Display",
          fontSize: 28,
          color: COLORS.brownDeep,
          marginTop: -2,
          marginBottom: -2,
        },
        text("1953")
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 9,
          letterSpacing: 2,
          color: COLORS.brownWarm,
          textTransform: "uppercase",
        },
        text("Established")
      )
    )
  );
}

// The shared card frame. Each page provides its own body block.
function card(body) {
  return el(
    "div",
    {
      width: 1200,
      height: 630,
      display: "flex",
      flexDirection: "column",
      background: COLORS.cream,
      fontFamily: "Lora",
      color: COLORS.brownDeep,
      position: "relative",
    },
    // Top stripes
    el("div", { height: 16, width: 1200, background: COLORS.rust }),
    el("div", { height: 6, width: 1200, background: COLORS.gold }),
    // Body wrapper
    el(
      "div",
      {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "44px 64px 0 64px",
        position: "relative",
      },
      body
    ),
    // Bottom council band
    el(
      "div",
      {
        height: 64,
        width: 1200,
        background: COLORS.brownDeep,
        color: COLORS.cream,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 64px",
        fontFamily: "Oswald",
        fontSize: 14,
        textTransform: "uppercase",
        letterSpacing: 4,
      },
      el("span", {}, text("Council on Frozen Potato Affairs")),
      el("span", { color: COLORS.gold }, text("Est. 1953 · Ontario, OR"))
    )
  );
}

function pageHeader(eyebrow) {
  return el(
    "div",
    { display: "flex", alignItems: "center", gap: 24 },
    seal(96),
    el(
      "div",
      { display: "flex", flexDirection: "column" },
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 14,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: COLORS.rust,
        },
        text(eyebrow)
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 28,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: COLORS.brownDeep,
          marginTop: 2,
          fontWeight: 700,
        },
        text("The Tater Tot Index")
      )
    )
  );
}

function homeBody() {
  return el(
    "div",
    { flexDirection: "column", height: "100%" },
    pageHeader("A Public Service of"),
    el(
      "div",
      {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 8,
      },
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 18,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: COLORS.rust,
          marginBottom: 8,
        },
        text("— The Official Index —")
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 130,
          lineHeight: 1,
          textTransform: "uppercase",
          color: COLORS.brownDeep,
          fontWeight: 700,
          letterSpacing: 1,
        },
        text("The Tater Tot")
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 130,
          lineHeight: 1,
          textTransform: "uppercase",
          color: COLORS.rust,
          fontWeight: 700,
          letterSpacing: 1,
        },
        text("Index")
      ),
      el(
        "div",
        {
          fontFamily: "Lora",
          fontStyle: "italic",
          fontSize: 24,
          color: COLORS.brownWarm,
          marginTop: 16,
          lineHeight: 1.3,
          maxWidth: 900,
        },
        text(
          "A unified system for measuring the cost of modern life — denominated in the crisped, golden cylinder."
        )
      )
    )
  );
}

function calculatorBody() {
  return el(
    "div",
    { display: "flex", flexDirection: "column", height: "100%" },
    pageHeader("From the Calculator of"),
    el(
      "div",
      {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 8,
      },
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 18,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: COLORS.rust,
          marginBottom: 8,
        },
        text("The Council's Official")
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 116,
          lineHeight: 1,
          textTransform: "uppercase",
          color: COLORS.brownDeep,
          fontWeight: 700,
          letterSpacing: 1,
        },
        text("Conversion")
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 116,
          lineHeight: 1,
          textTransform: "uppercase",
          color: COLORS.rust,
          fontWeight: 700,
          letterSpacing: 1,
        },
        text("Calculator")
      ),
      el(
        "div",
        {
          fontFamily: "Lora",
          fontStyle: "italic",
          fontSize: 24,
          color: COLORS.brownWarm,
          marginTop: 16,
          lineHeight: 1.3,
          maxWidth: 900,
        },
        text(
          "Submit any quantity — by price, weight, volume, or distance — for evaluation in the proper unit."
        )
      )
    )
  );
}

function hallOfFameBody() {
  return el(
    "div",
    { display: "flex", flexDirection: "column", height: "100%" },
    pageHeader("A Council Exhibition by"),
    el(
      "div",
      {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 8,
      },
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 18,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: COLORS.rust,
          marginBottom: 8,
        },
        text("On Permanent Exhibition")
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 110,
          lineHeight: 1,
          textTransform: "uppercase",
          color: COLORS.brownDeep,
          fontWeight: 700,
          letterSpacing: 1,
        },
        text("The Name-Brand")
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 110,
          lineHeight: 1,
          textTransform: "uppercase",
          color: COLORS.rust,
          fontWeight: 700,
          letterSpacing: 1,
        },
        text("Hall of Fame")
      ),
      el(
        "div",
        {
          fontFamily: "Lora",
          fontStyle: "italic",
          fontSize: 24,
          color: COLORS.brownWarm,
          marginTop: 16,
          lineHeight: 1.3,
          maxWidth: 900,
        },
        text(
          "Honoring the rare American trademarks that have so thoroughly entered the language that the brand has become the noun."
        )
      )
    )
  );
}

function aboutBody() {
  return el(
    "div",
    { display: "flex", flexDirection: "column", height: "100%" },
    pageHeader("A History Of"),
    el(
      "div",
      {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 8,
      },
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 18,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: COLORS.rust,
          marginBottom: 8,
        },
        text("A Brief History")
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 130,
          lineHeight: 1,
          textTransform: "uppercase",
          color: COLORS.brownDeep,
          fontWeight: 700,
          letterSpacing: 1,
        },
        text("About the")
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 130,
          lineHeight: 1,
          textTransform: "uppercase",
          color: COLORS.rust,
          fontWeight: 700,
          letterSpacing: 1,
        },
        text("Council")
      ),
      el(
        "div",
        {
          fontFamily: "Lora",
          fontStyle: "italic",
          fontSize: 24,
          color: COLORS.brownWarm,
          marginTop: 16,
          lineHeight: 1.3,
          maxWidth: 900,
        },
        text(
          "Stewards of the American snack since 1953. Chartered to ensure that the household understands the proper place of the tot in the modern economy."
        )
      )
    )
  );
}

function budgetBody() {
  return el(
    "div",
    { display: "flex", flexDirection: "column", height: "100%" },
    pageHeader("A Reverse Service of"),
    el(
      "div",
      {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 8,
      },
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 18,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: COLORS.rust,
          marginBottom: 8,
        },
        text("The Reverse Index")
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 124,
          lineHeight: 1,
          textTransform: "uppercase",
          color: COLORS.brownDeep,
          fontWeight: 700,
          letterSpacing: 1,
        },
        text("The Tater Tot")
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 124,
          lineHeight: 1,
          textTransform: "uppercase",
          color: COLORS.rust,
          fontWeight: 700,
          letterSpacing: 1,
        },
        text("Budget")
      ),
      el(
        "div",
        {
          fontFamily: "Lora",
          fontStyle: "italic",
          fontSize: 24,
          color: COLORS.brownWarm,
          marginTop: 16,
          lineHeight: 1.3,
          maxWidth: 900,
        },
        text(
          "How much modern life does your tot allowance afford? The Council's reverse calculator answers definitively."
        )
      )
    )
  );
}

const TARGETS = [
  { name: "home", body: homeBody },
  { name: "calculator", body: calculatorBody },
  { name: "budget", body: budgetBody },
  { name: "hall-of-fame", body: hallOfFameBody },
  { name: "about", body: aboutBody },
];

function fmtTotsForOg(n) {
  if (n < 10) return n.toFixed(1);
  if (n < 1_000_000) return Math.round(n).toLocaleString("en-US");
  if (n < 1_000_000_000) {
    const m = n / 1_000_000;
    return (m >= 100 ? Math.round(m) : m.toFixed(m >= 10 ? 1 : 2)) + " million";
  }
  if (n < 1_000_000_000_000) {
    const b = n / 1_000_000_000;
    return (b >= 100 ? Math.round(b) : b.toFixed(b >= 10 ? 1 : 2)) + " billion";
  }
  return (n / 1_000_000_000_000).toFixed(2) + " trillion";
}

function fmtPriceForOg(usd) {
  if (usd < 1_000) return "$" + usd.toLocaleString("en-US", { maximumFractionDigits: 0 });
  if (usd < 1_000_000) return "$" + Math.round(usd).toLocaleString("en-US");
  if (usd < 1_000_000_000) return "$" + (usd / 1_000_000).toFixed(usd >= 10_000_000 ? 0 : 1) + "M";
  return "$" + (usd / 1_000_000_000).toFixed(2) + "B";
}

function itemBody(item) {
  const tots = item.priceUsd / PRICE_PER_TOT.name;
  return el(
    "div",
    { flexDirection: "column", height: "100%" },
    pageHeader("From the Index of"),
    el(
      "div",
      {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 8,
      },
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: 16,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: COLORS.rust,
          marginBottom: 4,
        },
        text(`${CATEGORY_LABELS[item.category]} · ${fmtPriceForOg(item.priceUsd)}`)
      ),
      el(
        "div",
        {
          fontFamily: "Oswald",
          fontSize: item.name.length > 28 ? 64 : 78,
          lineHeight: 1,
          textTransform: "uppercase",
          color: COLORS.brownDeep,
          fontWeight: 700,
          letterSpacing: 1,
          marginBottom: 16,
        },
        text(item.name)
      ),
      el(
        "div",
        {
          flexDirection: "row",
          alignItems: "baseline",
          gap: 16,
          marginTop: 4,
        },
        el(
          "div",
          {
            fontFamily: "DM Serif Display",
            fontSize: 130,
            color: COLORS.rustDeep,
            lineHeight: 1,
          },
          text(fmtTotsForOg(tots))
        ),
        el(
          "div",
          {
            flexDirection: "column",
            paddingBottom: 12,
          },
          el(
            "div",
            {
              fontFamily: "Oswald",
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: COLORS.brownWarm,
            },
            text("Crisped, Golden")
          ),
          el(
            "div",
            {
              fontFamily: "Oswald",
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: COLORS.brownWarm,
            },
            text("Cylinders")
          )
        )
      ),
      el(
        "div",
        {
          fontFamily: "Lora",
          fontStyle: "italic",
          fontSize: 22,
          color: COLORS.brownWarm,
          marginTop: 16,
          lineHeight: 1.3,
          maxWidth: 1000,
        },
        text(`"${item.spatial}"`)
      )
    )
  );
}

async function main() {
  const fonts = await loadFonts();
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(resolve(OUT_DIR, "items"), { recursive: true });

  // Page-level OGs
  for (const target of TARGETS) {
    const tree = card(target.body());
    const svg = await satori(tree, { width: 1200, height: 630, fonts });
    const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } })
      .render()
      .asPng();
    const out = resolve(OUT_DIR, `${target.name}.png`);
    await writeFile(out, png);
    console.log(`✓ wrote ${out} (${(png.length / 1024).toFixed(1)} KB)`);
  }

  // Per-item OGs
  for (const item of COMPARISONS) {
    const tree = card(itemBody(item));
    const svg = await satori(tree, { width: 1200, height: 630, fonts });
    const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } })
      .render()
      .asPng();
    const out = resolve(OUT_DIR, `items/${item.id}.png`);
    await writeFile(out, png);
  }
  console.log(`✓ wrote ${COMPARISONS.length} item OGs to ${resolve(OUT_DIR, "items")}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
