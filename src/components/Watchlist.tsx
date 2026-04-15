import { Star, TrendingUp, TrendingDown } from 'lucide-react';
import clsx from 'clsx';
import { Coin } from '../types';

const fmt = (p:number) => p>=1 ? `$${p.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}` : `$${p.toFixed(4)}`;

export function Watchlist({ coins, watchlist, onToggleWatch }: { coins:Coin[]; watchlist:string[]; onToggleWatch:(id:string)=>void }) {
  const watched = coins.filter((c)=>watchlist.includes(c.id));
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Star size={18} className="text-amber-400" fill="currentColor"/>
        <h3 className="text-white font-semibold">Watchlist</h3>
        <span className="ml-auto text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">{watched.length}</span>
      </div>
      {watched.length === 0
        ? <p className="text-sm text-gray-500 text-center py-6">Star a coin to add it here.</p>
        : <div className="space-y-2">
            {watched.map((coin) => {
              const pos = coin.change24h >= 0;
              return (
                <div key={coin.id} className="flex items-center gap-3 p-2.5 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor:coin.color+'33', color:coin.color }}>{coin.symbol.slice(0,2)}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">{coin.symbol}</p>
                    <p className="text-xs text-gray-400 truncate">{coin.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white">{fmt(coin.price)}</p>
                    <p className={clsx('text-xs flex items-center justify-end gap-0.5', pos?'text-emerald-400':'text-red-400')}>
                      {pos?<TrendingUp size={10}/>:<TrendingDown size={10}/>}{pos?'+':''}{coin.change24h.toFixed(2)}%
                    </p>
                  </div>
                  <button onClick={()=>onToggleWatch(coin.id)} className="p-1 text-amber-400 hover:text-gray-400">
                    <Star size={14} fill="currentColor"/>
                  </button>
                </div>
              );
            })}
          </div>
      }
    </div>
  );
}
