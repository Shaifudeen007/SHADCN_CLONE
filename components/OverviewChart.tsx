
import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', v1: 400, v2: 300 },
  { name: 'Feb', v1: 600, v2: 450 },
  { name: 'Mar', v1: 450, v2: 700 },
  { name: 'Apr', v1: 900, v2: 600 },
  { name: 'May', v1: 700, v2: 1100 },
  { name: 'Jun', v1: 1400, v2: 900 },
  { name: 'Jul', v1: 1100, v2: 1200 },
  { name: 'Aug', v1: 1200, v2: 800 },
  { name: 'Sep', v1: 800, v2: 1000 },
  { name: 'Oct', v1: 1000, v2: 600 },
];

export const OverviewChart: React.FC = () => {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#18181b" stopOpacity={0.1}/>
              <stop offset="100%" stopColor="#18181b" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorSecond" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#71717a" stopOpacity={0.05}/>
              <stop offset="100%" stopColor="#71717a" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#f3f3f3" strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            hide
          />
          <YAxis 
            hide
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              borderColor: '#f4f4f5',
              borderRadius: '12px',
              fontSize: '12px',
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
            }} 
          />
          <Area 
            type="monotone" 
            dataKey="v1" 
            stroke="#18181b" 
            strokeWidth={2.5}
            fillOpacity={1} 
            fill="url(#colorMain)" 
            isAnimationActive={true}
          />
          <Area 
            type="monotone" 
            dataKey="v2" 
            stroke="#e4e4e7" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorSecond)" 
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
