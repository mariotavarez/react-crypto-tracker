import { useState, useEffect } from 'react';
import { Coin } from '../types';
import { initialCoins } from '../data/cryptoData';

function simulatePrice(p: number, vol = 0.005): number {
  return parseFloat((p * (1 + (Math.random() - 0.5) * 2 * vol)).toFixed(p < 10 ? 4 : 2));
}

export function useCryptoData() {
  const [coins, setCoins] = useState<Coin[]>(initialCoins);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setCoins((prev) => prev.map((coin) => {
        const newPrice = simulatePrice(coin.price);
        const newChange = parseFloat((coin.change24h + ((newPrice - coin.price) / coin.price) * 10).toFixed(2));
        return { ...coin, price: newPrice, change24h: newChange, priceHistory: [...coin.priceHistory.slice(1), newPrice] };
      }));
      setLastUpdate(new Date());
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return { coins, lastUpdate };
}
