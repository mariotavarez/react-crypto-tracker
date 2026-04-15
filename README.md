# 💰 React Crypto Tracker

A real-time cryptocurrency portfolio tracker built with React 18, TypeScript, and Tailwind CSS v4. Monitor live prices, track portfolio P&L, and manage your watchlist — all in one dark dashboard.

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

## 📸 Preview

![ Demo](.github/demo.gif)

## ✨ Features

- 📈 **Live Price Simulation** — Prices update every 3 seconds
- 💼 **Portfolio Tracker** — Real-time P&L and percentage gains/losses
- 📊 **Price Charts** — Interactive Recharts line charts per coin
- ⭐ **Watchlist** — Star/unstar coins
- 🔍 **Search** — Filter coins by name or symbol
- 📱 **Responsive** — Mobile to desktop

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| **Tailwind CSS v4** | Vite plugin — zero config |
| Recharts | Price charts |
| Lucide React | Icons |
| Vite | Build tool |

## 🚀 Quick Start

```bash
git clone https://github.com/mariotavarez/react-crypto-tracker.git
cd react-crypto-tracker
npm install
npm run dev
```

## 📁 Structure

```
src/
├── components/
│   ├── CoinCard.tsx      # Coin price card with mini sparkline
│   ├── Header.tsx        # Search header
│   ├── Portfolio.tsx     # Portfolio P&L
│   ├── PriceChart.tsx    # Price history chart
│   └── Watchlist.tsx     # Starred coins
├── data/cryptoData.ts
├── hooks/
│   ├── useCryptoData.ts  # Live price updates
│   └── usePortfolio.ts   # Portfolio state
└── types/index.ts
```

## ⚙️ Tailwind CSS v4

```ts
// vite.config.ts
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({ plugins: [react(), tailwindcss()] })
```

```css
/* src/index.css */
@import "tailwindcss";
```

## 📄 License

MIT © Mario Tavarez
