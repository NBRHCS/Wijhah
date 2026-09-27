export const THEME_STORAGE_KEY = 'wejha-theme';

export const DEFAULT_THEME = 'theme-2' as const;

export const THEMES = [
  {
    id: 'theme-2',
    name: ['الثيم 2', 'Theme 2'],
    description: ['فاتح ودافئ', 'Warm and light'],
  },
  {
    id: 'theme-6',
    name: ['الثيم 6', 'Theme 6'],
    description: ['داكن وعصري', 'Dark and modern'],
  },
] as const;

export type ThemeId = (typeof THEMES)[number]['id'];

export function isThemeId(value: string | null): value is ThemeId {
  return THEMES.some((theme) => theme.id === value);
}
