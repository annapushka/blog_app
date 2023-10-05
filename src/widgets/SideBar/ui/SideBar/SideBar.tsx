import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import ArrowLeft from 'shared/assets/icons/angel-left.svg';
import ArrowRight from 'shared/assets/icons/angel-right.svg';
import { useSelector } from 'react-redux';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import VStack from 'shared/ui/Stack/VStack/VStack';
import cls from './SideBar.module.scss';
import SideBarItem from '../SideBarItem/SideBarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <menu
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
            <VStack gap="8" className={cls.items}>
                {sidebarItemsList.map((item) => (
                    <SideBarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </menu>
    );
});

export default SideBar;
