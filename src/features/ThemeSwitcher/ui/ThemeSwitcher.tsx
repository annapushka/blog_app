import { memo, useCallback } from 'react';
import ThemeIconDeprecated from '@/shared/assets/icons/day-and-night-light.svg';
import ThemeIcon from '@/shared/assets/icons/swapThemeIcon.svg';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon/Icon';
import Icon from '@/shared/ui/redesigned/Icon/Icon';

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <Icon Svg={ThemeIcon} />
      )}
      off={(
        <ButtonDeprecated
          theme={ButtonTheme.CLEAR}
          onClick={onToggleHandler}
          className={className}
        >
          <IconDeprecated Svg={ThemeIconDeprecated} inverted />
        </ButtonDeprecated>
      )}
    />

  );
});

export default ThemeSwitcher;
