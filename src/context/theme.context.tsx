import { THEMES } from '@/constants/theme.constants';
import { Theme } from '@/types/theme.types';
import { useLocalStorage } from '@uidotdev/usehooks';
import { createContext, useEffect } from 'react';

type ThemeContextProps = {
  theme: Theme;
  setBrowserDefaultTheme: () => void;
  setLightTheme: () => void;
  setDarkTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: THEMES.BROWSER_DEFAULT,
  setBrowserDefaultTheme: () => {},
  setLightTheme: () => {},
  setDarkTheme: () => {},
});

const ThemeProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', THEMES.BROWSER_DEFAULT);

  const setBrowserDefaultTheme = (): void => setTheme(THEMES.BROWSER_DEFAULT);
  const setLightTheme = (): void => setTheme(THEMES.LIGHT);
  const setDarkTheme = (): void => setTheme(THEMES.DARK);

  useEffect(() => {
    if (theme === THEMES.BROWSER_DEFAULT) {
      document.documentElement.classList.remove(THEMES.LIGHT, THEMES.DARK);
    } else if (theme === THEMES.LIGHT) {
      document.documentElement.classList.remove(THEMES.DARK);
      document.documentElement.classList.add(THEMES.LIGHT);
    } else if (theme === THEMES.DARK) {
      document.documentElement.classList.remove(THEMES.LIGHT);
      document.documentElement.classList.add(THEMES.DARK);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setBrowserDefaultTheme, setLightTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
