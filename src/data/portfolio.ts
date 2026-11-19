/**
 * PORTFOLIO — "Our Work"
 * ----------------------
 * HOW TO ADD A PROJECT: add an object to the PORTFOLIO array below.
 * As soon as a real item exists, one placeholder slot disappears automatically
 * (placeholders only fill up to MIN_SLOTS and are clearly labelled).
 *
 * Example:
 *
 *   {
 *     id: "brand-launch-clip-01",
 *     brand: "Brand or Campaign Name",
 *     title: "Launch week highlight",
 *     platform: "TikTok",                         // "TikTok" | "Instagram" | "YouTube" | "X"
 *     url: "https://www.tiktok.com/@clipblox.agency/video/123456789",
 *     thumbnail: "https://example.com/thumb.jpg", // optional — import a file from src/assets or use a URL
 *     description: "Short description of the clip or campaign.",
 *   },
 *
 * Only add real work here — no placeholders in this array.
 */

export type Platform = "TikTok" | "Instagram" | "YouTube" | "X";

export interface PortfolioItem {
  id: string;
  brand: string;
  title: string;
  platform: Platform;
  url: string;
  thumbnail?: string;
  description: string;
}

export const PORTFOLIO: PortfolioItem[] = [];

/** Minimum number of cards shown. Empty slots render as clearly-labelled placeholders. */
export const MIN_SLOTS = 3;

/** Platforms cycled through on placeholder cards */
export const PLACEHOLDER_PLATFORMS: Platform[] = ["TikTok", "Instagram", "YouTube"];
