import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Icon from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import BellIcon from 'shared/assets/icons/bell.svg';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const trigger = (
        <Button onClick={() => setIsOpen(true)} theme={ButtonTheme.CLEAR}>
            <Icon Svg={BellIcon} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>

        </div>

    );
});
