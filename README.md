# 💰 React Crypto Tracker

A real-time cryptocurrency portfolio tracker built with React 18, TypeScript, and Tailwind CSS. Monitor live prices, track portfolio P&L, and manage your watchlist — all in one beautiful dark dashboard.

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

## ✨ Features

- 📈 **Live Price Simulation** — Prices update every 3 seconds to simulate real-time market data
- 💼 **Portfolio Tracker** — Track holdings with real-time P&L and percentage gains/losses
- 📊 **Price Charts** — Interactive Recharts line charts per cryptocurrency
- ⭐ **Watchlist** — Add/remove coins from your personal watchlist
- 🔍 **Search** — Filter coins by name or symbol in real time
- 📱 **Responsive** — Works on all screen sizes

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
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
│   ├── Header.tsx        # App header with search
│   ├── Portfolio.tsx     # Portfolio summary and holdings
│   ├── PriceChart.tsx    # Detailed price history chart
│   └── Watchlist.tsx     # Starred watchlist panel
├── data/
│   └── cryptoData.ts
├── hooks/
│   ├── useCryptoData.ts  # Live price simulation hook
│   └── usePortfolio.ts   # Portfolio state management
└── types/
    └── index.ts
```

## 📄 License

MIT © Mario Tavarez
