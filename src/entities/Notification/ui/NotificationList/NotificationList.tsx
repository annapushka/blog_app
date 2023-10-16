import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useGetNotificstions } from 'entities/Notification/api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: notifications, isLoading } = useGetNotificstions(null);

    return (
        <div className={classNames(cls.NotificationList, {}, [className])} />
    );
});
