import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import Button, { ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import ArrowLeft from '@/shared/assets/icons/angel-left.svg';
import ArrowRight from '@/shared/assets/icons/angel-right.svg';
import VStack from '@/shared/ui/deprecated/Stack/VStack/VStack';
import cls from './SideBar.module.scss';
import SideBarItem from '../SideBarItem/SideBarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import Icon from '@/shared/ui/redesigned/Icon/Icon';
import ArrowIcon from '@/shared/assets/icons/arrowDownIcon.svg';

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <aside
          data-testid="sidebar"
          className={classNames(cls.SideBarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [
            className,
          ])}
        >
          <AppLogo size={collapsed ? 24 : 30} className={cls.appLogo} />
          <VStack role="navigation" gap="8" className={cls.items}>
            {sidebarItemsList.map((item) => (
              <SideBarItem
                item={item}
                collapsed={collapsed}
                key={item.path}
              />
            ))}
          </VStack>
          <Icon
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={classNames(cls.collapseBtn, { [cls.collapsedCollapseBtn]: collapsed }, [])}
            Svg={ArrowIcon}
            clickable
          />
        </aside>
      )}
      off={(
        <aside
          data-testid="sidebar"
          className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
        >
          <Button
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            square
            size={ButtonSize.L}
          >
            {collapsed ? (
              <ArrowRight className={cls.icon} />
            ) : (
              <ArrowLeft className={cls.icon} />
            )}
          </Button>
          <VStack role="navigation" gap="8" className={cls.items}>
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
        </aside>
      )}
    />
  );
});

export default SideBar;
