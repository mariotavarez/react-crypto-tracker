import clsx from 'clsx';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { Portfolio as T, Coin } from '../types';

export function Portfolio({ portfolio, coins }: { portfolio:T; coins:Coin[] }) {
  const pos = portfolio.totalPnl >= 0;
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Wallet size={18} className="text-amber-400"/>
        <h3 className="text-white font-semibold">My Portfolio</h3>
      </div>
      <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-800/30 rounded-xl p-4 mb-4">
        <p className="text-sm text-amber-400/70 mb-1">Total Value</p>
        <p className="text-3xl font-bold text-white">${portfolio.totalValue.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}</p>
        <p className={clsx('flex items-center gap-1 text-sm mt-1', pos?'text-emerald-400':'text-red-400')}>
          {pos ? <TrendingUp size={14}/> : <TrendingDown size={14}/>}
          {pos?'+':''}${Math.abs(portfolio.totalPnl).toLocaleString('en-US',{maximumFractionDigits:0})} ({pos?'+':''}{portfolio.totalPnlPercent.toFixed(2)}%)
        </p>
      </div>
      <div className="space-y-3">
        {portfolio.holdings.map((h) => {
          const coin = coins.find((c)=>c.id===h.coinId); if(!coin) return null;
          const val = coin.price * h.amount; const cost = h.avgBuyPrice * h.amount; const pnl = val - cost;
          return (
            <div key={h.coinId} className="flex items-center justify-between py-2 border-t border-gray-800">
              <div>
                <p className="text-sm font-medium text-white">{coin.name}</p>
                <p className="text-xs text-gray-400">{h.amount} {coin.symbol}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-white">${val.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}</p>
                <p className={clsx('text-xs', pnl>=0?'text-emerald-400':'text-red-400')}>{pnl>=0?'+':''}{((pnl/cost)*100).toFixed(1)}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
