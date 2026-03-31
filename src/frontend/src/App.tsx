import { useEffect, useState } from "react";

const CONTRACT = "6YD9o7KLFLu8i1QrYR381ePicJPK63md4d7yC8j";
const DEXSCREENER =
  "https://dexscreener.com/solana/EAXx4kZjE1H6jkt6PnaRqcGG6Y9WvkBPZYkeMeok1wzN";
const TELEGRAM = "https://t.me/FrierenReturn";
const TWITTER = "https://x.com/frierensolana";
const SOLSCAN = `https://solscan.io/token/${CONTRACT}`;

function useConfetti() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const emojis = ["🦋", "✨", "🪄"];
      for (let i = 0; i < 80; i++) {
        setTimeout(() => {
          const el = document.createElement("div");
          el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          el.style.cssText = `position:fixed;left:${Math.random() * 100}vw;top:-20px;font-size:20px;z-index:9999;pointer-events:none`;
          document.body.appendChild(el);
          const duration = Math.random() * 3000 + 2000;
          const angle = Math.random() * 80 + 20;
          el.animate(
            [
              { transform: "translateY(0) rotate(0deg)" },
              {
                transform: `translateY(${window.innerHeight + 100}px) rotate(${angle * 10}deg)`,
              },
            ],
            { duration, easing: "cubic-bezier(0.25, 0.1, 0.25, 1)" },
          );
          setTimeout(() => el.remove(), duration);
        }, i * 30);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
}

function useCopy() {
  const [copied, setCopied] = useState(false);
  function copy(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return { copied, copy };
}

export default function App() {
  useConfetti();
  const [mobileOpen, setMobileOpen] = useState(false);
  const heroCopy = useCopy();
  const tokenCopy = useCopy();

  return (
    <div className="bg-[#1a0b2e] text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="navbar-blur bg-[#1a0b2e]/90 sticky top-0 z-50 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl overflow-hidden border-2 border-purple-400 shadow-lg shadow-purple-500/50">
              <img
                src="/assets/frieren-hero.jpeg"
                alt="Frieren"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tighter">FRIEREN</p>
              <p className="text-xs text-purple-300 -mt-1">THE RETURN</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#about"
              className="hover:text-purple-300 flex items-center gap-1"
              data-ocid="nav.about.link"
            >
              <i className="fa-solid fa-wand-magic-sparkles" /> ABOUT
            </a>
            <a
              href="#token"
              className="hover:text-purple-300 flex items-center gap-1"
              data-ocid="nav.token.link"
            >
              <i className="fa-solid fa-coins" /> TOKEN
            </a>
            <a
              href="#howtobuy"
              className="hover:text-purple-300 flex items-center gap-1"
              data-ocid="nav.howtobuy.link"
            >
              <i className="fa-solid fa-cart-shopping" /> HOW TO BUY
            </a>
            <a
              href="#community"
              className="hover:text-purple-300 flex items-center gap-1"
              data-ocid="nav.community.link"
            >
              <i className="fa-solid fa-users" /> COMMUNITY
            </a>
            <a
              href={DEXSCREENER}
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-300 flex items-center gap-1"
              data-ocid="nav.chart.link"
            >
              <i className="fa-solid fa-chart-line" /> LIVE CHART
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-9 h-9 bg-[#229ED9] hover:bg-[#1a8ac4] rounded-xl text-white"
              data-ocid="nav.telegram.link"
            >
              <i className="fa-brands fa-telegram-plane text-xl" />
            </a>
            <a
              href={TWITTER}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-9 h-9 bg-black hover:bg-gray-800 rounded-xl text-white"
              data-ocid="nav.twitter.link"
            >
              <i className="fa-brands fa-x-twitter text-xl" />
            </a>
            <a
              href={DEXSCREENER}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-2 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-purple-500/50"
              data-ocid="nav.buy.primary_button"
            >
              <i className="fa-solid fa-rocket" /> BUY $FRIEREN
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden text-2xl"
              data-ocid="nav.mobile.toggle"
            >
              <i className="fa-solid fa-bars" />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            className="md:hidden bg-[#1a0b2e] border-t border-purple-500/30 px-6 py-6 text-center"
            data-ocid="nav.mobile.panel"
          >
            <div
              className="flex flex-col gap-6 text-lg"
              onClick={() => setMobileOpen(false)}
              onKeyDown={() => setMobileOpen(false)}
              role="menu"
            >
              <a href="#about" className="py-2">
                ✨ ABOUT THE RETURN
              </a>
              <a href="#token" className="py-2">
                🪙 TOKEN INFO
              </a>
              <a href="#howtobuy" className="py-2">
                🛒 HOW TO BUY
              </a>
              <a href="#community" className="py-2">
                🌐 COMMUNITY
              </a>
              <a
                href={DEXSCREENER}
                target="_blank"
                rel="noreferrer"
                className="py-2"
              >
                📈 LIVE CHART
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header
        id="hero"
        className="hero-bg min-h-screen flex items-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e]/40 via-[#1a0b2e]/70 to-[#1a0b2e]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-3xl border border-purple-300/30">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="uppercase text-sm tracking-[2px] font-bold">
                  LIVE ON SOLANA • PUMP.FUN
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-black leading-none glow-text">
                THE RETURN
                <br />
                OF{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  FRIEREN
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-purple-200 font-light">
                $FRIEREN
              </p>
              <p className="max-w-md text-lg text-purple-100">
                The most powerful anime meme coin is making its return.
                <br />
                <span className="text-pink-300">Immortal gains await.</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={DEXSCREENER}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#1a0b2e] hover:bg-purple-200 px-8 py-5 rounded-3xl font-bold text-xl shadow-xl shadow-purple-500/40"
                  data-ocid="hero.buy.primary_button"
                >
                  <i className="fa-solid fa-rocket" /> BUY NOW
                </a>
                <a
                  href={DEXSCREENER}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border-2 border-white/70 hover:border-purple-300 px-8 py-5 rounded-3xl font-bold text-xl"
                  data-ocid="hero.chart.secondary_button"
                >
                  <i className="fa-solid fa-chart-line" /> LIVE CHART
                </a>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-purple-400/30 rounded-3xl p-6 max-w-md">
                <p className="uppercase text-xs tracking-widest text-purple-300 mb-2">
                  Contract Address
                </p>
                <div className="flex items-center justify-between bg-[#2a1b3e] rounded-2xl p-4 font-mono text-sm break-all">
                  {heroCopy.copied ? (
                    <span className="text-green-400">✅ COPIED!</span>
                  ) : (
                    <span>{CONTRACT}</span>
                  )}
                  <button
                    type="button"
                    onClick={() => heroCopy.copy(CONTRACT)}
                    className="ml-4 flex items-center justify-center w-8 h-8 bg-purple-500 hover:bg-purple-600 rounded-xl flex-shrink-0"
                    data-ocid="hero.contract.copy_button"
                  >
                    <i className="fa-solid fa-copy" />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end justify-center gap-8 text-right">
              <div className="butterfly text-6xl">🦋</div>
              <div className="butterfly-delay-2 text-5xl">✨</div>
              <div className="butterfly-delay-4 text-7xl">🪄</div>
              <p className="text-purple-300 text-xl max-w-[220px]">
                &ldquo;Even after a thousand years… the legend returns.&rdquo;
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs uppercase tracking-widest">
          <span>SCROLL FOR MAGIC</span>
          <i className="fa-solid fa-chevron-down animate-bounce" />
        </div>
        <a
          href={TELEGRAM}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-8 right-8 flex items-center gap-3 bg-[#229ED9] text-white px-5 py-3 rounded-3xl text-sm font-bold shadow-2xl"
          data-ocid="hero.telegram.link"
        >
          <i className="fa-brands fa-telegram-plane" /> JOIN TELEGRAM
        </a>
      </header>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-[#1a0b2e] to-[#2a1b3e]"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="px-6 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm font-bold">
              CHAPTER 1: THE RETURN
            </span>
            <h2 className="text-5xl font-bold mt-6 section-header">
              The most powerful anime meme coin is back.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl leading-relaxed text-purple-100">
                Frieren, the immortal elf mage who has journeyed beyond the end
                of time, has returned to Solana. This isn&apos;t just another
                meme coin — it&apos;s the ultimate tribute to one of
                anime&apos;s most beloved legends.
              </p>
              <p className="mt-8 text-xl leading-relaxed text-purple-100">
                5% of supply already burned for long-term commitment. Pure
                community-driven magic.
              </p>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-6xl font-bold text-pink-300">∞</div>
                  <div className="text-purple-300 text-sm">Immortal Legacy</div>
                </div>
                <div className="h-16 w-px bg-purple-300/30" />
                <div>
                  <div className="text-6xl font-bold text-purple-300">1B</div>
                  <div className="text-purple-300 text-sm">Total Supply</div>
                </div>
              </div>
            </div>
            <div className="bg-black/30 rounded-3xl p-8 border border-purple-300/20">
              <h3 className="text-2xl mb-6 flex items-center gap-3">
                <i className="fa-solid fa-wand-magic-sparkles text-purple-400" />{" "}
                Why $FRIEREN?
              </h3>
              <ul className="space-y-6 text-lg">
                <li className="flex gap-4">
                  <span className="text-3xl">🧝‍♀️</span>{" "}
                  <span>Iconic anime legend meets degen culture</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl">🚀</span>{" "}
                  <span>Built on Solana — lightning speed &amp; low fees</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl">🔥</span>{" "}
                  <span>Community-first with real holder conviction</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl">🌌</span>{" "}
                  <span>Beyond Journey&apos;s End… to the moon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TOKEN INFO */}
      <section id="token" className="py-24 bg-[#1a0b2e]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold section-header">
              Token Information
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/10 border border-purple-400/30 rounded-3xl p-8 text-center"
              data-ocid="token.contract.card"
            >
              <i className="fa-solid fa-fingerprint text-5xl mb-6 text-purple-400" />
              <p className="uppercase text-xs mb-3">Contract Address</p>
              <p className="font-mono text-sm break-all">{CONTRACT}</p>
              <button
                type="button"
                onClick={() => tokenCopy.copy(CONTRACT)}
                className="mt-6 text-purple-300 hover:text-white flex items-center gap-2 mx-auto"
                data-ocid="token.contract.copy_button"
              >
                <i className="fa-solid fa-copy" />{" "}
                {tokenCopy.copied ? (
                  <span className="text-green-400">COPIED!</span>
                ) : (
                  "COPY ADDRESS"
                )}
              </button>
            </div>
            <div
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/10 border border-purple-400/30 rounded-3xl p-8 text-center"
              data-ocid="token.ticker.card"
            >
              <i className="fa-solid fa-chart-bar text-5xl mb-6 text-purple-400" />
              <p className="uppercase text-xs mb-3">Ticker</p>
              <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                $FRIEREN
              </p>
            </div>
            <div
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/10 border border-purple-400/30 rounded-3xl p-8 text-center"
              data-ocid="token.blockchain.card"
            >
              <i className="fa-solid fa-scale-balanced text-5xl mb-6 text-purple-400" />
              <p className="uppercase text-xs mb-3">Blockchain</p>
              <p className="text-4xl font-bold">Solana</p>
              <p className="text-purple-300 mt-2">Fast • Cheap • Magical</p>
            </div>
          </div>
          <p className="text-center text-purple-300 mt-16 max-w-lg mx-auto">
            Verified on Pump.fun • Live trading on Raydium
            <br />
            <a
              href={DEXSCREENER}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
              data-ocid="token.chart.link"
            >
              View full chart &amp; stats →
            </a>
          </p>
        </div>
      </section>

      {/* HOW TO BUY */}
      <section
        id="howtobuy"
        className="py-24 bg-gradient-to-b from-[#2a1b3e] to-[#1a0b2e]"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold section-header">
              How to Buy $FRIEREN
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            <div
              className="flex gap-6 bg-white/5 p-8 rounded-3xl"
              data-ocid="howtobuy.step.1"
            >
              <div className="text-4xl font-black text-purple-400 w-12">01</div>
              <div>
                <h4 className="text-2xl font-semibold">Get a Solana Wallet</h4>
                <p className="text-purple-200">
                  Phantom, Solflare, or Backpack — download and create a wallet.
                </p>
              </div>
            </div>
            <div
              className="flex gap-6 bg-white/5 p-8 rounded-3xl"
              data-ocid="howtobuy.step.2"
            >
              <div className="text-4xl font-black text-purple-400 w-12">02</div>
              <div>
                <h4 className="text-2xl font-semibold">Buy SOL</h4>
                <p className="text-purple-200">
                  Use Binance, Coinbase, or any exchange and transfer SOL to
                  your wallet.
                </p>
              </div>
            </div>
            <div
              className="flex gap-6 bg-white/5 p-8 rounded-3xl"
              data-ocid="howtobuy.step.3"
            >
              <div className="text-4xl font-black text-purple-400 w-12">03</div>
              <div>
                <h4 className="text-2xl font-semibold">
                  Swap on Raydium or Jupiter
                </h4>
                <p className="text-purple-200">
                  Go to the live chart, click &quot;Trade&quot;, paste the
                  contract address and swap SOL for $FRIEREN.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href={DEXSCREENER}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-10 py-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl text-2xl font-bold hover:scale-105 transition-transform"
                data-ocid="howtobuy.trade.primary_button"
              >
                OPEN LIVE CHART &amp; TRADE NOW{" "}
                <i className="fa-solid fa-arrow-right ml-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="py-24 bg-[#1a0b2e]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h2 className="text-5xl font-bold section-header">
              Join the Legion of Frieren
            </h2>
          </div>
          <p className="text-xl text-purple-200 max-w-xl mx-auto mt-8">
            The community is the real magic. Come vibe with fellow degens and
            anime fans.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="group flex-1 max-w-xs bg-[#229ED9] hover:bg-[#1e8ac4] rounded-3xl p-8 text-left flex items-center gap-6 text-white"
              data-ocid="community.telegram.link"
            >
              <i className="fa-brands fa-telegram-plane text-6xl" />
              <div>
                <div className="font-bold text-2xl">Telegram</div>
                <div className="text-white/70">t.me/FrierenReturn</div>
                <div className="text-xs uppercase mt-6 group-hover:underline">
                  Join the chat →
                </div>
              </div>
            </a>
            <a
              href={TWITTER}
              target="_blank"
              rel="noreferrer"
              className="group flex-1 max-w-xs bg-black hover:bg-gray-900 rounded-3xl p-8 text-left flex items-center gap-6 text-white"
              data-ocid="community.twitter.link"
            >
              <i className="fa-brands fa-x-twitter text-6xl" />
              <div>
                <div className="font-bold text-2xl">X / Twitter</div>
                <div className="text-white/70">@frierensolana</div>
                <div className="text-xs uppercase mt-6 group-hover:underline">
                  Follow the saga →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/60 py-12 border-t border-purple-400/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-purple-300">
          <div>
            © {new Date().getFullYear()} The Return of Frieren • $FRIEREN • Not
            financial advice. DYOR.
          </div>
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <a
              href={DEXSCREENER}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              DexScreener
            </a>
            <a
              href={SOLSCAN}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Solscan
            </a>
            <span className="text-xs">Made with ❤️ for the anime degens</span>
          </div>
        </div>
        <div className="text-center mt-4 text-xs text-purple-400/60">
          Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-purple-300"
          >
            caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
