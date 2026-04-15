import { Search, RefreshCw } from 'lucide-react';

export function Header({ onSearch, lastUpdate }: { onSearch:(q:string)=>void; lastUpdate:Date }) {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-sm font-bold text-white">₿</div>
          <span className="text-xl font-bold text-white">CryptoTracker</span>
        </div>
        <div className="flex-1 max-w-md relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search coins..." onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"/>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <RefreshCw size={12} className="animate-spin"/>Updated {lastUpdate.toLocaleTimeString()}
        </div>
      </div>
    </header>
  );
}
