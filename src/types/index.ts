export interface Coin {
  id: string; symbol: string; name: string;
  price: number; change24h: number; change7d: number;
  marketCap: number; volume24h: number; circulatingSupply: number;
  color: string; priceHistory: number[];
}
export interface PortfolioEntry { coinId: string; amount: number; avgBuyPrice: number; }
export interface Portfolio {
  holdings: PortfolioEntry[]; totalValue: number;
  totalCost: number; totalPnl: number; totalPnlPercent: number;
}
