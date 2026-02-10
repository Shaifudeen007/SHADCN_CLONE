
import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { cn } from '../lib/utils';
import { Menu, Plus } from 'lucide-react';
import { Button } from './ui/Button';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onThemeToggle: () => void;
  currentTheme: 'light' | 'dark';
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-[#fafafa] text-zinc-950 font-sans overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px] md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Positioned Fixed on mobile, Relative on tablets/laptops */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={toggleSidebar} 
        className={cn(
          "fixed inset-y-0 left-0 z-50 md:relative md:translate-x-0 transition-all duration-300 ease-in-out border-r border-zinc-200 bg-[#f9f9fb]",
          !sidebarOpen && isMobile ? "-translate-x-full" : "translate-x-0",
          !sidebarOpen && !isMobile ? "w-20" : "w-[240px]"
        )}
      />
      
      <div className="flex flex-1 flex-col min-w-0 h-full overflow-hidden">
        {/* Main Header - Matching screenshot alignment */}
        <header className="flex h-[72px] items-center justify-between px-8 border-b border-zinc-200 shrink-0 bg-white">
          <div className="flex items-center gap-4">
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-zinc-500 hover:bg-zinc-100"
                onClick={toggleSidebar}
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <h1 className="text-[17px] font-semibold tracking-tight text-zinc-900">Documents</h1>
          </div>
          
          <Button className="bg-zinc-950 text-white hover:bg-zinc-900 rounded-full px-5 h-10 text-[13px] font-bold gap-2 shadow-sm">
            <div className="flex items-center justify-center bg-white/20 rounded-full p-0.5">
              <Plus className="h-3 w-3" />
            </div>
            Quick Create
          </Button>
        </header>

        {/* Main Content Area - Large padding and correct background */}
        <main className="flex-1 overflow-y-auto bg-white/50 p-8 scroll-smooth no-scrollbar">
          <div className="mx-auto max-w-[1600px] w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
