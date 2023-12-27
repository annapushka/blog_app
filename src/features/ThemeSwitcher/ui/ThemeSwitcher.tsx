import { memo, useCallback } from 'react';
import LightIcon from '@/shared/assets/icons/day-and-night-light.svg';
import DarkIcon from '@/shared/assets/icons/day-and-night.svg';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {

    });
  }, [toggleTheme]);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onToggleHandler}
      className={className}
    >
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});

export default ThemeSwitcher;
