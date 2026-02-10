
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Folder, 
  FileText, 
  Database, 
  Search, 
  MoreHorizontal, 
  RefreshCcw
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Lifecycle', icon: RefreshCcw },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Projects', icon: Folder },
  { label: 'Team', icon: Users },
];

const docItems = [
  { label: 'Data Library', icon: Database },
  { label: 'Reports', icon: FileText },
  { label: 'Word Assistant', icon: Search },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, className }) => {
  return (
    <aside
      className={cn(
        "flex h-screen flex-col bg-[#f9f9fb] transition-all duration-300 ease-in-out shrink-0",
        className
      )}
    >
      {/* Acme Inc Header area matching height of main header */}
      <div className="flex h-[72px] shrink-0 items-center px-8">
        <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <div className="h-5 w-5 rounded-full border-[1.5px] border-zinc-900 flex items-center justify-center shrink-0">
            <div className="h-1 w-1 rounded-full bg-zinc-900" />
          </div>
          {(isOpen || (typeof window !== 'undefined' && window.innerWidth < 768)) && (
            <span className="font-bold text-[15px] tracking-tight text-zinc-900">Acme Inc.</span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-10 py-8 px-6 overflow-y-auto no-scrollbar">
        <div>
          {isOpen && <p className="mb-4 px-2 text-[12px] font-medium text-zinc-400">Home</p>}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <SidebarItem key={item.label} {...item} isOpen={isOpen} />
            ))}
          </nav>
        </div>

        <div>
          {isOpen && <p className="mb-4 px-2 text-[12px] font-medium text-zinc-400">Documents</p>}
          <nav className="flex flex-col gap-1">
            {docItems.map((item) => (
              <SidebarItem key={item.label} {...item} isOpen={isOpen} />
            ))}
            <SidebarItem label="More" icon={MoreHorizontal} isOpen={isOpen} />
          </nav>
        </div>
      </div>
    </aside>
  );
};

const SidebarItem: React.FC<{ label: string; icon: any; active?: boolean; isOpen: boolean }> = ({
  label,
  icon: Icon,
  active,
  isOpen,
}) => (
  <button
    className={cn(
      "group flex items-center gap-3 rounded-lg px-2.5 py-2 text-[13.5px] font-medium transition-all w-full",
      active 
        ? "text-zinc-950" 
        : "text-zinc-500 hover:text-zinc-950 hover:bg-zinc-200/50",
      (!isOpen && typeof window !== 'undefined' && window.innerWidth >= 768) && "justify-center px-0"
    )}
  >
    <Icon className={cn("h-[18px] w-[18px] shrink-0 stroke-[1.5px]", active ? "text-zinc-950" : "text-zinc-400 group-hover:text-zinc-950")} />
    {(isOpen || (typeof window !== 'undefined' && window.innerWidth < 768)) && <span className="truncate">{label}</span>}
  </button>
);
