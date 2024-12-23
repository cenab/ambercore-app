import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Bar,
} from 'recharts';

// Sample data - replace with your real-time data
const priceData = Array.from({ length: 100 }, (_, i) => ({
  time: new Date(2024, 0, 1, 0, i).getTime(),
  price: 5900 + Math.random() * 100,
  volume: Math.random() * 1000,
}));

const volumeProfileData = Array.from({ length: 20 }, (_, i) => ({
  price: 5880 + i * 10,
  volume: Math.random() * 1000,
}));

const marketDepthData = Array.from({ length: 20 }, (_, i) => ({
  price: 5900 + (i - 10) * 10,
  bids: i < 10 ? Math.random() * 1000 : 0,
  asks: i >= 10 ? Math.random() * 1000 : 0,
}));

export function TradingViewCharts() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 bg-black text-white">
      {/* Price and Volume Chart */}
      <div className="h-[400px] bg-black/40 rounded-xl p-4">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={priceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="time" 
              type="number"
              domain={['auto', 'auto']}
              tickFormatter={(time) => new Date(time).toLocaleTimeString()}
              stroke="#666"
            />
            <YAxis 
              yAxisId="price"
              orientation="right"
              domain={['auto', 'auto']}
              stroke="#666"
            />
            <YAxis 
              yAxisId="volume"
              orientation="left"
              domain={[0, 'auto']}
              stroke="#666"
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }}
              labelStyle={{ color: '#666' }}
            />
            <Area
              yAxisId="price"
              type="monotone"
              dataKey="price"
              stroke="#00ff00"
              fill="url(#colorPrice)"
              fillOpacity={0.3}
            />
            <Bar
              yAxisId="volume"
              dataKey="volume"
              fill="#004400"
              opacity={0.5}
            />
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00ff00" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00ff00" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Volume Profile */}
      <div className="h-[200px] bg-black/40 rounded-xl p-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={volumeProfileData}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis type="number" stroke="#666" />
            <YAxis 
              dataKey="price" 
              type="number"
              orientation="right"
              stroke="#666"
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }}
              labelStyle={{ color: '#666' }}
            />
            <Area
              type="monotone"
              dataKey="volume"
              stroke="#4CAF50"
              fill="#4CAF50"
              fillOpacity={0.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Market Depth */}
      <div className="h-[200px] bg-black/40 rounded-xl p-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={marketDepthData}
            stackOffset="silhouette"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="price" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }}
              labelStyle={{ color: '#666' }}
            />
            <Area
              type="monotone"
              dataKey="bids"
              stackId="1"
              stroke="#4CAF50"
              fill="#4CAF50"
              fillOpacity={0.5}
            />
            <Area
              type="monotone"
              dataKey="asks"
              stackId="1"
              stroke="#FF5252"
              fill="#FF5252"
              fillOpacity={0.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 