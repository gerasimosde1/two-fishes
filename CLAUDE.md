# Two Fishes

Astrology web app built for the owner's girlfriend, who describes the features she wants. She is relearning astrology after about 10 years, so explanations should be plain and beginner friendly.

## How it ships
- `index.html` (markup + CSS), `app.js` (all logic), `i18n/en.js`, `i18n/el.js`, `i18n/it.js` (all wording), plus `manifest.webmanifest`, `sw.js` and `icons/`.
- Languages: English, Greek, Italian (the owner said these three for now). No user-visible text belongs in app.js or index.html: static labels use `data-i18n` keys (`L.ui`), sentences are template functions in `L.f` / `L.q`. When adding text, add the key to all three packs. Greek and Italian templates handle articles and cases (e.g. Greek `art`, `acc`, `your`, `yourS`, sign `inS`/`gen`), so build sentences inside the pack, not by concatenating in app.js.
- GitHub Pages serves `main` at https://gerasimosde1.github.io/two-fishes/. Her phone QR code opens that URL, so pushing to `main` updates her app within a minute or two.
- It is an installable PWA. After changing cached files, bump `VERSION` in `sw.js` so phones pick up the new version.
- Run locally with `python3 -m http.server 8791` and open http://localhost:8791.

## Data and maths
- Default chart (`EXAMPLE` in `index.html`) is hers: 3 Mar 2004, 16:05, Cagliari (Europe/Rome). Pisces Sun, Leo Moon, Leo Rising. The repo is public; the owner chose to keep her data in.
- Planet positions come from Astronomy Engine 2.1.19 (jsDelivr). The Ascendant, MC and Placidus houses are computed in-file; the mean node uses the standard formula.

## Design she asked for
- Every shade of blue (turquoise to baby blue) and pink, with vintage-looking type (IM Fell English, EB Garamond, Courier Prime).
- Logo: two Pisces fishes around a sun. Colours are CSS tokens on `:root`, with light and dark themes.

## Voice
- Warm, wry and honest. Light humor (never at her expense), no fearmongering: a hard transit is a hard day, not a doom. Say plainly that transits describe themes and moods, not fixed outcomes (`honestNote`, `tidesNote`). Keep every sentence plain and beginner friendly, and keep the same tone in all three languages (write natural jokes, don't translate word for word).

## Features so far
- Birth Chart tab: a clickable wheel with placements, signs, houses and aspects.
- Planets tab, three sections (Signs, Sky now, Retrograde). Signs: every planet and Chiron in its sign, degree and house (tap a row to open it on the Chart tab). Sky now: live positions with day steps. Retrograde: filter Now / Coming up (two years) / My birth chart, each retrograde as an expandable card (dates, status, signs and houses crossed, houses it rules in her chart, natal points it crosses). Chiron comes from `chiron.js` (JPL Horizons table 1900-2100, 5-day steps, interpolated); outside that range it is simply left out. Wording lives in the i18n packs (`retroInfo`, `L.f.retro*`, `L.ui` keys).
- Transits tab (opens first):
  - "Today's Tides": star ratings for Love, Work, Money, Energy, Mind, Home, Friends and Inner world, with practical advice, a "why" built from transits, and a "learn" line. Also a daily visit streak. She likes this as the hook that keeps her coming back.
  - A calendar (tap any day, past or future) and a biwheel.
  - Transits read against the WHOLE chart (houses, rulerships, dispositors, natal aspects), grouped into long-term (Jupiter to Pluto and the Node), short-term (Sun to Mars) and Moon, with in-orb dates and exact dates. This whole-chart reading is her key requirement.
  - Active life areas and a 12-month timeline of slow transits.
- Explanations everywhere: house, sign and planet write-ups, plus the "How to read your chart" and "What is a transit?" guides. She is relearning, so keep everything explained.
- Learn tab: 16 games across Beginner, Intermediate, Hard and Expert levels (Master Exam: 15 timed questions). She wants them challenging.
- Me tab: multiple saved charts (add, edit, switch, delete) stored in localStorage `tf.charts` and `tf.active`, plus install help.

## Optional features (each one can be removed on its own)
Added in one batch; the owner's girlfriend may not want all of them. Each is its own commit, so you can see exactly what it touched (`git show <commit>`). Later small fixes touched the same files, so to remove one, edit the code listed here rather than blindly reverting. Remove the matching keys from all three i18n packs too, and bump `VERSION` in `sw.js`.

| Feature | Commit | What to remove |
|---|---|---|
| Today strip (moon phase, void Moon, retro chips) | 329b75c | `renderToday`, `moonForecast`, `#today-strip` in index.html, `.today-strip`/`.tsl`/`.chips` CSS, `L.moonPhases`, `L.moonAdvice`, `F.voidMoon`, `F.moonNext`, ui `todayTitle`, the `renderToday();` call in `renderTransits` |
| Cycles (returns, progressions) | d04c3fc | `computeReturns`, `renderCycles`, `data-pseg="cycles"` button and `data-pp="cycles"` panel, `.ret-card` CSS, `L.returnInfo`, `L.progInfo`, ui `segCycles cycTitle cycNote ret* passes age prog*` |
| Match (compare two charts) | 4084e61 | `renderMatch`, `data-pseg="match"` button and `data-pp="match"` panel, ui `segMatch match*` |
| Explain-this (dignity notes, plain-words aspects) | 1e8b726 | `dignityOf`, `DIGN_EXALT`, the two small inserts in `natalPointHTML`, `F.aspMeaning`, ui `digHome digExalt digDet digFall plainWords` |
| Practice (mistakes review, streak) | cd89aa7 | `GAMES.mistakes`, `game.queue`/`game.n` handling, the `tf.missed` and `tf.practice` code in `answerQ`, the practice bar in `renderGames`, `L.games.mistakes`, `F.mistakesCta`, `F.practiceStreak`, `.practice-bar` CSS |
| Day journal | 263df5b | `dayNotes`, `saveDayNote`, the note box in `renderCalendar`, `.day-note` and `.has-note` CSS, ui `myNote notePh noteSaved` (notes live in localStorage `tf.notes`) |
| Share card and calendar file | a0c937a | `shareBig3`, `buildICS`, `shareFile`, `#share-big3` and `#ics-btn` in index.html, ui `shareBtn icsBtn icsNote`, `F.icsStart icsEnd icsMoon` |
| Offline start | (sw.js) | the `OUTSIDE` precache list in `sw.js` |

Gotcha: `.tl` is an existing timeline class (min-width 640px); do not reuse that name for new styles.

