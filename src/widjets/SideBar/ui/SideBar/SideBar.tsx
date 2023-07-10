import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import ArrowLeft from 'shared/assets/icons/angel-left.svg';
import ArrowRight from 'shared/assets/icons/angel-right.svg';
import { SideBarItemList } from 'widjets/SideBar/model/items';
import cls from './SideBar.module.scss';
import SideBarItem from '../SideBarItem/SideBarItem';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? <ArrowRight className={cls.icon} /> : <ArrowLeft className={cls.icon} />}
            </Button>
            <div className={cls.items}>
                {SideBarItemList.map((item) => (
                    <SideBarItem item={item} collapsed={collapsed} key={item.path} />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
});

export default SideBar;
