'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="relative inline-flex items-center w-16 h-8 rounded-full p-1 bg-gray-200 dark:bg-gray-700 cursor-pointer transition-all"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {/* Toggle knob */}
      <div
        className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white dark:bg-black shadow-md transition-transform duration-300
          ${theme === 'dark' ? 'translate-x-8' : 'translate-x-0'}
        `}
      />

      {/* Icons */}
      <Sun
        className={`absolute left-1.5 w-4 h-4 text-yellow-400 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
      />
      <Moon
        className={`absolute right-1.5 w-4 h-4 text-blue-500 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}