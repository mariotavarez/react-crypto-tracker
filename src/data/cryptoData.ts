import { Coin } from '../types';

export const initialCoins: Coin[] = [
  { id:'bitcoin', symbol:'BTC', name:'Bitcoin', price:67842, change24h:2.34, change7d:-1.2,
    marketCap:1334000000000, volume24h:28500000000, circulatingSupply:19700000,
    color:'#F7931A', priceHistory:[62000,63500,61800,65200,64100,66800,67842] },
  { id:'ethereum', symbol:'ETH', name:'Ethereum', price:3521, change24h:1.87, change7d:3.4,
    marketCap:423000000000, volume24h:14200000000, circulatingSupply:120200000,
    color:'#627EEA', priceHistory:[3200,3280,3150,3380,3420,3490,3521] },
  { id:'solana', symbol:'SOL', name:'Solana', price:184.52, change24h:4.21, change7d:8.7,
    marketCap:81000000000, volume24h:3800000000, circulatingSupply:439000000,
    color:'#9945FF', priceHistory:[158,162,155,170,175,181,184.52] },
  { id:'cardano', symbol:'ADA', name:'Cardano', price:0.612, change24h:-1.23, change7d:2.1,
    marketCap:21500000000, volume24h:820000000, circulatingSupply:35100000000,
    color:'#0033AD', priceHistory:[0.58,0.59,0.57,0.60,0.62,0.61,0.612] },
  { id:'chainlink', symbol:'LINK', name:'Chainlink', price:18.42, change24h:3.56, change7d:-0.8,
    marketCap:11200000000, volume24h:680000000, circulatingSupply:608000000,
    color:'#2A5ADA', priceHistory:[16.8,17.2,16.5,17.8,18.1,18.3,18.42] },
  { id:'polygon', symbol:'MATIC', name:'Polygon', price:1.08, change24h:-0.54, change7d:4.3,
    marketCap:10800000000, volume24h:520000000, circulatingSupply:10000000000,
    color:'#8247E5', priceHistory:[0.98,1.01,0.97,1.04,1.06,1.07,1.08] },
];
