import { TrendingUp, TrendingDown, Star } from 'lucide-react';
import clsx from 'clsx';
import { Coin } from '../types';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const fmt = (p: number) => p >= 1 ? `$${p.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}` : `$${p.toFixed(4)}`;
const fmtMcap = (n: number) => n >= 1e12 ? `$${(n/1e12).toFixed(2)}T` : n >= 1e9 ? `$${(n/1e9).toFixed(2)}B` : `$${(n/1e6).toFixed(2)}M`;

interface Props { coin:Coin; isWatched:boolean; isSelected:boolean; onToggleWatch:(e:React.MouseEvent)=>void; }

export function CoinCard({ coin, isWatched, isSelected, onToggleWatch }: Props) {
  const pos = coin.change24h >= 0;
  return (
    <div className={clsx('bg-gray-900 border rounded-xl p-4 hover:border-gray-600 transition-colors cursor-pointer', isSelected ? 'border-amber-500/50' : 'border-gray-800')}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
            style={{ backgroundColor: coin.color+'33', border:`2px solid ${coin.color}` }}>
            <span style={{ color: coin.color }}>{coin.symbol.slice(0,2)}</span>
          </div>
          <div>
            <p className="font-semibold text-white">{coin.name}</p>
            <p className="text-xs text-gray-400">{coin.symbol}</p>
          </div>
        </div>
        <button onClick={onToggleWatch} className={clsx('p-1.5 rounded-lg', isWatched?'text-amber-400':'text-gray-600 hover:text-gray-400')}>
          <Star size={16} fill={isWatched?'currentColor':'none'}/>
        </button>
      </div>
      <div className="flex items-end justify-between mb-3">
        <div>
          <p className="text-xl font-bold text-white">{fmt(coin.price)}</p>
          <p className="text-xs text-gray-400">MCap: {fmtMcap(coin.marketCap)}</p>
        </div>
        <span className={clsx('flex items-center gap-1 text-sm font-medium', pos?'text-emerald-400':'text-red-400')}>
          {pos ? <TrendingUp size={14}/> : <TrendingDown size={14}/>}
          {pos?'+':''}{coin.change24h.toFixed(2)}%
        </span>
      </div>
      <div className="h-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={coin.priceHistory.map((p)=>({p}))}>
            <Line type="monotone" dataKey="p" stroke={pos?'#10b981':'#ef4444'} strokeWidth={1.5} dot={false}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
