import { memo } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/day-and-night-light.svg';
import DarkIcon from '@/shared/assets/icons/day-and-night.svg';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={className}
        >
            {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});

export default ThemeSwitcher;
