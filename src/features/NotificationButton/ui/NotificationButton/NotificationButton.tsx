import { memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon/Icon';
import BellIconDeprecated from '@/shared/assets/icons/bell.svg';
import BellIcon from '@/shared/assets/icons/notifyIcon.svg';
import { Drawer } from '@/shared/ui/redesigned/Drawer/Drawer';
import cls from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import Icon from '@/shared/ui/redesigned/Icon/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const trigger = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <Icon
          Svg={BellIcon}
          onClick={() => setIsOpen(true)}
          clickable
        />
      )}
      off={(
        <ButtonDeprecated onClick={() => setIsOpen(true)} theme={ButtonTheme.CLEAR}>
          <IconDeprecated Svg={BellIconDeprecated} inverted />
        </ButtonDeprecated>
      )}
    />

  );

  return (
    <div>
      <BrowserView>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={(
            <Popover
              className={classNames(cls.NotificationButton, {}, [
                className,
              ])}
              trigger={trigger}
            >
              <NotificationList className={cls.notifications} />
            </Popover>
          )}
          off={(
            <PopoverDeprecated
              className={classNames(cls.NotificationButton, {}, [
                className,
              ])}
              trigger={trigger}
            >
              <NotificationList className={cls.notifications} />
            </PopoverDeprecated>
          )}
        />

      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
});
