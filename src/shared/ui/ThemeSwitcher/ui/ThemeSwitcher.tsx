import { classNames } from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/day-and-night-light.svg";
import DarkIcon from "shared/assets/icons/day-and-night.svg";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </button>
    );
};

export default ThemeSwitcher;