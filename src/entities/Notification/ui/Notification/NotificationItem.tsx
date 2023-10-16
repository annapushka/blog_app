import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotificationItem, {}, [className])} />
    );
});
