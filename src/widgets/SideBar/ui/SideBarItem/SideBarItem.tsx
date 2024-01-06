import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SideBarItemType } from '../../model/types/sidebar';
import cls from './SideBarItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon/Icon';
import { AppLinkTheme, AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink/AppLink';

interface SideBarItemProps {
    item: SideBarItemType;
    collapsed: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <AppLink
          variant={AppLinkTheme.SECONDARY}
          to={item.path}
          className={classNames(cls.item, { [cls.collapsedRedesign]: collapsed })}
        >
          <Icon Svg={item.Icon} />
          <span className={cls.linkiRedesign}>{t(item.text)}</span>
        </AppLink>
      )}
      off={(
        <AppLinkDeprecated
          theme={AppLinkTheme.SECONDARY}
          to={item.path}
          className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
          <item.Icon className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLinkDeprecated>
)}
    />

  );
});

export default SideBarItem;
