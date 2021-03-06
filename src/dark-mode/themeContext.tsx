import React from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  // If you want to use light theme as the default, return "light" instead
  return 'dark';
};

interface IContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
// Remember if You wanna uncomment above remove null in the next line.
export const ThemeContext = React.createContext({} as IContextProps);

interface ThemeProps {
  initialTheme?: any;
  children: any;
}

export const ThemeProvider: React.FC<ThemeProps> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('color-theme', theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
