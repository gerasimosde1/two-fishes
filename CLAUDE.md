# Two Fishes

Astrology web app built for the owner's girlfriend, who describes the features she wants. She is relearning astrology after about 10 years, so explanations should be plain and beginner friendly.

## How it ships
- Everything lives in `index.html` (HTML, CSS and JS in one file), plus `manifest.webmanifest`, `sw.js` and `icons/`.
- GitHub Pages serves `main` at https://gerasimosde1.github.io/two-fishes/. Her phone QR code opens that URL, so pushing to `main` updates her app within a minute or two.
- It is an installable PWA. After changing cached files, bump `VERSION` in `sw.js` so phones pick up the new version.
- Run locally with `python3 -m http.server 8791` and open http://localhost:8791.

## Data and maths
- Default chart (`EXAMPLE` in `index.html`) is hers: 3 Mar 2004, 16:05, Cagliari (Europe/Rome). Pisces Sun, Leo Moon, Leo Rising. The repo is public; the owner chose to keep her data in.
- Planet positions come from Astronomy Engine 2.1.19 (jsDelivr). The Ascendant, MC and Placidus houses are computed in-file; the mean node uses the standard formula.

## Design she asked for
- Every shade of blue (turquoise to baby blue) and pink, with vintage-looking type (IM Fell English, EB Garamond, Courier Prime).
- Logo: two Pisces fishes around a sun. Colours are CSS tokens on `:root`, with light and dark themes.

## Features so far
- Birth Chart tab: a clickable wheel with placements, signs, houses and aspects.
- Transits tab (opens first):
  - "Today's Tides": star ratings for Love, Work, Money, Energy, Mind, Home, Friends and Inner world, with practical advice, a "why" built from transits, and a "learn" line. Also a daily visit streak. She likes this as the hook that keeps her coming back.
  - A calendar (tap any day, past or future) and a biwheel.
  - Transits read against the WHOLE chart (houses, rulerships, dispositors, natal aspects), grouped into long-term (Jupiter to Pluto and the Node), short-term (Sun to Mars) and Moon, with in-orb dates and exact dates. This whole-chart reading is her key requirement.
  - Active life areas and a 12-month timeline of slow transits.
- Explanations everywhere: house, sign and planet write-ups, plus the "How to read your chart" and "What is a transit?" guides. She is relearning, so keep everything explained.
- Learn tab: 12 games across Beginner, Intermediate, Hard and Expert levels (Master Exam: 15 timed questions). She wants them challenging.
- Me tab: multiple saved charts (add, edit, switch, delete) stored in localStorage `tf.charts` and `tf.active`, plus install help.
