import { memo, useCallback } from 'react';
import LightIcon from '@/shared/assets/icons/day-and-night-light.svg';
import DarkIcon from '@/shared/assets/icons/day-and-night.svg';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

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
