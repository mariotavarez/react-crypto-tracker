import { useState } from 'react';
import { Header } from './components/Header';
import { CoinCard } from './components/CoinCard';
import { Portfolio } from './components/Portfolio';
import { PriceChart } from './components/PriceChart';
import { Watchlist } from './components/Watchlist';
import { useCryptoData } from './hooks/useCryptoData';
import { usePortfolio } from './hooks/usePortfolio';

function App() {
  const { coins, lastUpdate } = useCryptoData();
  const { portfolio, watchlist, toggleWatchlist } = usePortfolio(coins);
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState('bitcoin');
  const filtered = coins.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.symbol.toLowerCase().includes(search.toLowerCase()));
  const selected = coins.find((c) => c.id === selectedId);
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onSearch={setSearch} lastUpdate={lastUpdate}/>
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3 space-y-4">
          {selected && <PriceChart coin={selected}/>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((coin) => (
              <div key={coin.id} onClick={() => setSelectedId(coin.id)}>
                <CoinCard coin={coin} isWatched={watchlist.includes(coin.id)} isSelected={coin.id===selectedId}
                  onToggleWatch={(e) => { e.stopPropagation(); toggleWatchlist(coin.id); }}/>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <Portfolio portfolio={portfolio} coins={coins}/>
          <Watchlist coins={coins} watchlist={watchlist} onToggleWatch={toggleWatchlist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
