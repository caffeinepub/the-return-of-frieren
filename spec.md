# The Return of Frieren — $FRIEREN Meme Coin Landing Page

## Current State
New project. Empty backend scaffold.

## Requested Changes (Diff)

### Add
- Full landing page for $FRIEREN Solana meme coin, converted from provided HTML to React/TypeScript
- Sticky navbar with logo, nav links, social icons (Telegram, X), and BUY $FRIEREN button
- Mobile hamburger menu
- Hero section with uploaded fantasy background image (img_2882), glowing title, contract address with copy button, floating emoji animations
- Confetti/particle animation on page load (🦋 ✨ 🪄 falling from top)
- About section with stats (∞ Immortal Legacy, 1B Total Supply) and Why $FRIEREN card
- Token Information section (3 cards: Contract Address, Ticker, Blockchain)
- How to Buy section (3 numbered steps + CTA button)
- Community section (Telegram + Twitter/X cards)
- Footer with links and disclaimer

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Copy uploaded images to frontend/public/assets/
2. Build single-page React app matching the HTML exactly
3. Deep purple theme (#1a0b2e bg), pink/purple gradient accents, glow text effects
4. Use inline styles / Tailwind for all styling
5. Implement copyContract(), toggleMobileMenu(), launchConfetti() as React state/effects
6. Use img_2882 (fantasy scene) as hero background, img_2881 (character collage) optionally in About
