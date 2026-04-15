import { useState } from 'react';
import { Coin, Portfolio, PortfolioEntry } from '../types';

const defaultHoldings: PortfolioEntry[] = [
  { coinId: 'bitcoin', amount: 0.5, avgBuyPrice: 58000 },
  { coinId: 'ethereum', amount: 4, avgBuyPrice: 3100 },
  { coinId: 'solana', amount: 25, avgBuyPrice: 160 },
];

export function usePortfolio(coins: Coin[]) {
  const [holdings] = useState<PortfolioEntry[]>(defaultHoldings);
  const [watchlist, setWatchlist] = useState(['bitcoin','ethereum','solana','chainlink']);

  const portfolio: Portfolio = (() => {
    const totalValue = holdings.reduce((s, h) => s + (coins.find((c) => c.id === h.coinId)?.price ?? 0) * h.amount, 0);
    const totalCost = holdings.reduce((s, h) => s + h.avgBuyPrice * h.amount, 0);
    const totalPnl = totalValue - totalCost;
    return { holdings, totalValue, totalCost, totalPnl, totalPnlPercent: totalCost > 0 ? (totalPnl / totalCost) * 100 : 0 };
  })();

  const toggleWatchlist = (id: string) =>
    setWatchlist((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  return { portfolio, watchlist, toggleWatchlist };
}
