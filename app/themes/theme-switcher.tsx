'use client';

import { Check, Moon, Palette, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  DEFAULT_THEME,
  isThemeId,
  THEMES,
  type ThemeId,
} from './theme-config';

type ThemeSwitcherProps = {
  en: boolean;
};

export default function ThemeSwitcher({ en }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const candidateTheme = theme ?? null;
  const activeTheme: ThemeId = isThemeId(candidateTheme) ? candidateTheme : DEFAULT_THEME;

  function selectTheme(nextTheme: ThemeId) {
    setTheme(nextTheme);
  }

  const ActiveIcon = activeTheme === 'theme-6' ? Moon : Sun;

  return (
    <DropdownMenu dir={en ? 'ltr' : 'rtl'}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="theme-trigger"
          aria-label={en ? 'Choose appearance' : 'اختر المظهر'}
        >
          <Palette className="theme-trigger-palette" size={17} aria-hidden="true" />
          <span className="theme-trigger-label">{en ? 'Appearance' : 'المظهر'}</span>
          <ActiveIcon className="theme-trigger-state" size={15} aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="theme-menu"
        align="end"
        sideOffset={10}
        aria-label={en ? 'Appearance themes' : 'سمات المظهر'}
      >
        <DropdownMenuLabel className="theme-menu-title">
          {en ? 'Choose appearance' : 'اختر المظهر'}
        </DropdownMenuLabel>
        <div className="theme-options">
          {THEMES.map((option) => {
            const selected = option.id === activeTheme;
            const Icon = option.id === 'theme-6' ? Moon : Sun;
            return (
              <DropdownMenuItem
                key={option.id}
                className="theme-option"
                onSelect={() => selectTheme(option.id)}
                aria-current={selected ? 'true' : undefined}
              >
                <span className={`theme-preview ${option.id}`} aria-hidden="true">
                  <Icon size={17} />
                  <i />
                  <i />
                  <i />
                </span>
                <span className="theme-option-copy">
                  <strong>{option.name[en ? 1 : 0]}</strong>
                  <small>{option.description[en ? 1 : 0]}</small>
                </span>
                <span className={`theme-check ${selected ? 'is-selected' : ''}`} aria-hidden="true">
                  {selected && <Check size={14} />}
                </span>
              </DropdownMenuItem>
            );
          })}
        </div>
        <DropdownMenuSeparator className="theme-menu-separator" />
        <p className="theme-menu-note">
          {en ? 'You can change this at any time' : 'يمكنك التغيير في أي وقت'}
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
