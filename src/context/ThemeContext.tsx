import React, { createContext, useEffect } from 'react';

export type Theme = 'light';

export interface ThemeContextType {
  theme: 'light';
  resolvedTheme: 'light';
  setTheme: (theme: Theme) => void;
}

// oxlint-disable-next-line react/only-export-components
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Strictly enforce light mode
    const root = document.documentElement;
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
    try {
      localStorage.removeItem('theme');
      localStorage.removeItem('casio_theme');
    } catch {
      // Ignore
    }
  }, []);

  const setTheme = (_newTheme: Theme) => {
    // Light mode only
  };

  return (
    <ThemeContext.Provider value={{ theme: 'light', resolvedTheme: 'light', setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
