
import React from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { OverviewChart } from './OverviewChart';
import { OutlineTable } from './OutlineTable';
import { cn } from '../lib/utils';

export const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Stats Cards Grid - 24px rounded corners and specific spacing */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total Revenue" 
          value="$1,250.00" 
          trend="+12.5%" 
          trendDir="up"
          subTrend="Trending up this month"
          detail="Visitors for the last 6 months"
        />
        <StatsCard 
          title="New Customers" 
          value="1,234" 
          trend="-20%" 
          trendDir="down"
          subTrend="Down 20% this period"
          detail="Acquisition needs attention"
        />
        <StatsCard 
          title="Active Accounts" 
          value="45,678" 
          trend="+12.5%" 
          trendDir="up"
          subTrend="Strong user retention"
          detail="Engagement exceed targets"
        />
        <StatsCard 
          title="Growth Rate" 
          value="4.5%" 
          trend="+4.5%" 
          trendDir="up"
          subTrend="Steady performance increase"
          detail="Meets growth projections"
        />
      </div>

      {/* Main Chart Section - Precise styling from image */}
      <Card className="rounded-[24px] border border-zinc-200 shadow-sm overflow-hidden bg-white">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-8 border-b border-zinc-50">
          <div className="space-y-1">
            <h3 className="text-[16px] font-bold text-zinc-900">Total Visitors</h3>
            <p className="text-[12px] text-zinc-400 font-medium">Total for the last 3 months</p>
          </div>
          <div className="flex items-center gap-0 bg-[#f4f4f5] p-1 rounded-xl border border-zinc-100">
            <button className="px-5 py-2 text-[12px] font-semibold bg-white shadow-sm border border-zinc-200 rounded-lg text-zinc-900 transition-all">Last 3 months</button>
            <button className="px-5 py-2 text-[12px] font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">Last 30 days</button>
            <button className="px-5 py-2 text-[12px] font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">Last 7 days</button>
          </div>
        </div>
        <CardContent className="p-8 pt-10">
          <OverviewChart />
        </CardContent>
      </Card>

      <div className="pt-2">
        <OutlineTable />
      </div>
    </div>
  );
};

const StatsCard: React.FC<{
  title: string;
  value: string;
  trend: string;
  trendDir: 'up' | 'down';
  subTrend: string;
  detail: string;
}> = ({ title, value, trend, trendDir, subTrend, detail }) => (
  <Card className="rounded-[24px] border border-zinc-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] bg-white p-7 flex flex-col justify-between min-h-[220px]">
    <div className="space-y-5">
      <div className="flex flex-row items-center justify-between">
        <span className="text-[14px] font-medium text-zinc-400">{title}</span>
        <div className={cn(
          "flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold border",
          trendDir === 'up' ? "bg-zinc-50 border-zinc-100 text-zinc-900" : "bg-zinc-50 border-zinc-100 text-zinc-900"
        )}>
          {trendDir === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3 rotate-180" />}
          {trend}
        </div>
      </div>
      
      <div className="text-[34px] font-bold tracking-tight text-zinc-900 leading-none">{value}</div>
    </div>

    <div className="space-y-1.5 mt-auto">
      <div className="flex items-center gap-1.5">
        <span className="text-[13px] font-bold text-zinc-800">{subTrend}</span>
        <ArrowUpRight className={cn("h-4 w-4", trendDir === 'down' && "rotate-90")} />
      </div>
      <p className="text-[12px] text-zinc-400 font-medium leading-tight">{detail}</p>
    </div>
  </Card>
);
