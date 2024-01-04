import { memo, useCallback } from 'react';
import ThemeIcon from '@/shared/assets/icons/day-and-night-light.svg';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Icon from '@/shared/ui/Icon/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
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
      <Icon Svg={ThemeIcon} inverted />
    </Button>
  );
});

export default ThemeSwitcher;
