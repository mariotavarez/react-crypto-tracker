import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Coin } from '../types';

export function PriceChart({ coin }: { coin: Coin }) {
  const data = coin.priceHistory.map((p,i) => ({ time:`T-${coin.priceHistory.length-1-i}`, p }));
  const pos = coin.change24h >= 0;
  const stroke = pos ? '#10b981' : '#ef4444';
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold">{coin.name} Price History</h3>
          <p className="text-sm text-gray-400">Last 7 data points</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-white">${coin.price.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}</p>
          <p className={`text-sm ${pos?'text-emerald-400':'text-red-400'}`}>{pos?'+':''}{coin.change24h.toFixed(2)}% (24h)</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937"/>
          <XAxis dataKey="time" tick={{ fill:'#6b7280', fontSize:11 }} axisLine={false} tickLine={false}/>
          <YAxis domain={['auto','auto']} tick={{ fill:'#6b7280', fontSize:11 }} axisLine={false} tickLine={false}
            tickFormatter={(v)=>`$${Number(v).toLocaleString()}`}/>
          <Tooltip contentStyle={{ backgroundColor:'#111827', border:'1px solid #1f2937', borderRadius:'8px' }}
            labelStyle={{ color:'#e5e7eb' }}
            formatter={(v:number)=>[`$${v.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`,'Price']}/>
          <Line type="monotone" dataKey="p" stroke={stroke} strokeWidth={2} dot={{ fill:stroke, r:3 }} activeDot={{ r:5 }}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
