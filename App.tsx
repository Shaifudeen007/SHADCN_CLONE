
import React, { useState, useEffect } from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardPage } from './components/DashboardPage';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <DashboardLayout onThemeToggle={toggleTheme} currentTheme={theme}>
      <DashboardPage />
    </DashboardLayout>
  );
};

export default App;
