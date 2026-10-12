# Space Race 🚀

## ▶️ [Open the app](https://richardbrb9-coder.github.io/space-race/)

**https://richardbrb9-coder.github.io/space-race/** works in any web browser on a computer, tablet or phone.
(This GitHub page only shows the code; the link above is the working app.)

A fun, educational space app for kids: a Space-pedia of 142 planets, stars, galaxies, spacecraft, missions and
space heroes, an interactive Solar System (with "Your weight on Mars" and "How old would you be on Jupiter?"),
a Space Race Timeline from Sputnik to Artemis and beyond, a Science Lab of animated diagrams (day and night,
years and leap years, seasons, Moon phases, light-years, why astronauts float), and games: Space Pairs,
Moon Rover Rescue (maze), Space Quiz, Who Am I? and Asteroid Dash.

It's a Progressive Web App (PWA): once installed it works offline.

## Install on a tablet
1. Open [the app link](https://richardbrb9-coder.github.io/space-race/) while connected to the internet.
2. **iPad:** in **Safari** tap **Share → Add to Home Screen**.
   **Android:** in **Chrome** tap the **⋮** menu → **Install app** (or **Add to home screen → Install**, not "Create shortcut").
3. Open it once from the home screen while still online, so every picture is saved for offline use.

## Pictures and credits
Every picture is a real, freely licensed file from Wikimedia Commons (mostly NASA and ESA, public domain or
Creative Commons). Each one's author and licence is in `credits.js`, shown under the picture in the app and on
the **Picture credits** page. Drawings and computer models are labelled as artist's impressions. No pictures of
real people were generated. This is a family learning project and isn't connected to NASA, ESA or any other agency.

## Updating
After changing the app, bump `CACHE_NAME` in `sw.js` (e.g. `v1` → `v2`) and push. Tablets pick up the
new version the next time the app is opened while online. Space plans change often: the "future" facts in
`space.js` were checked in October 2026.

## Files
- `index.html` – the whole app (screens, games, styles)
- `space.js` – the space items, clues, timeline events and planet facts
- `credits.js` – who made each picture and its licence
- `space-images/` – one WebP picture per item (800 × 600)
- `sw.js` – the service worker that saves everything for offline use
- `manifest.json` – app name, icons and colours for installing
