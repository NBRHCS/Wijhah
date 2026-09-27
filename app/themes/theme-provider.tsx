'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { DEFAULT_THEME, THEMES, THEME_STORAGE_KEY } from './theme-config';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      attribute="data-theme"
      defaultTheme={DEFAULT_THEME}
      enableSystem={false}
      storageKey={THEME_STORAGE_KEY}
      themes={THEMES.map((theme) => theme.id)}
    >
      {children}
    </NextThemeProvider>
  );
}
