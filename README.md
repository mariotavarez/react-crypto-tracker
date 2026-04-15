<div align="center">

# CryptoTracker

**Your portfolio. Live prices. Zero noise.**

A real-time crypto dashboard that tracks prices, calculates P&L, and keeps your watchlist front and center — all in a polished dark UI that updates every 3 seconds.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

![ Demo](.github/demo.gif)

</div>

---

## What is CryptoTracker?

A crypto portfolio dashboard you'd actually want to use. Live-simulated prices, interactive charts per coin, real-time P&L on your holdings, and a watchlist for the coins you're following — all in one dark, responsive UI.

Built to showcase React 19's concurrent features with custom hooks, Recharts visualizations, and a full Atomic Design architecture using TypeScript 5.7 in strict mode.

```bash
git clone https://github.com/mariotavarez/react-crypto-tracker.git
cd react-crypto-tracker && npm install && npm run dev
```

---

## Features

- **Live Price Simulation** — Prices update every 3 seconds with realistic volatility using a custom hook
- **Portfolio Tracker** — Enter your holdings and watch real-time P&L update as prices move
- **Interactive Price Charts** — Recharts LineChart per coin showing price history over time
- **Watchlist** — Star any coin to pin it to your watchlist panel for quick reference
- **Market Cap Display** — Smart formatting (T / B / M) for market cap values
- **Full-Text Search** — Filter coins by name or symbol across the entire grid
- **Responsive Layout** — From mobile single-column to desktop 3-panel layout

---

## Quick Start

```bash
git clone https://github.com/mariotavarez/react-crypto-tracker.git
cd react-crypto-tracker
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Structure — Atomic Design

```
src/
├── atoms/
│   ├── CoinSymbol.tsx      # coin logo circle with dynamic color per symbol
│   ├── MarketCapText.tsx   # formats T / B / M market cap values
│   ├── PriceText.tsx       # smart decimal formatting (2 or 6 places)
│   ├── StarButton.tsx      # amber watchlist toggle button
│   └── TrendIndicator.tsx  # change % with up/down directional icon
├── molecules/
│   ├── CoinCard.tsx        # full coin card with sparkline preview
│   ├── HoldingRow.tsx      # portfolio row with cost basis and P&L
│   ├── SearchBar.tsx       # search input with live refresh indicator
│   └── WatchlistItem.tsx   # compact watchlist entry with price
├── organisms/
│   ├── AppHeader.tsx       # app header with title and SearchBar
│   ├── CoinGrid.tsx        # responsive grid of CoinCards
│   ├── PortfolioPanel.tsx  # holdings list with aggregate P&L summary
│   ├── PriceChart.tsx      # selected coin price history (Recharts)
│   └── WatchlistPanel.tsx  # starred coins list with live prices
├── templates/
│   └── TrackerLayout.tsx   # AppHeader + responsive main content wrapper
├── pages/
│   └── TrackerPage.tsx     # all state: prices, portfolio, watchlist, selection
├── hooks/
│   ├── useCryptoData.ts    # price update loop with setInterval
│   └── usePortfolio.ts     # portfolio state and P&L calculation
└── data/cryptoData.ts      # initial 10 coins with seed price history
```

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.7 | Strict type safety |
| Tailwind CSS | v4 | Vite plugin — zero config |
| Recharts | 2.10 | Price chart visualizations |
| Lucide React | 0.344 | Icons |
| Vite | 6.2 | Build tool |

---

## License

MIT © [Mario Tavarez](https://github.com/mariotavarez)
