import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { Text } from '@/shared/ui/redesigned/Text/Text';

interface NotificationItemProps {
    className?: string;
    notification: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, notification } = props;

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <Card
          variant="outlined"
          className={classNames(cls.NotificationItem, {}, [className])}
        >
          <Text title={notification.title} text={notification.description} />
        </Card>
      )}
      off={(
        <CardDeprecated
          theme={CardTheme.OUTLINED}
          className={classNames(cls.NotificationItem, {}, [className])}
        >
          <TextDeprecated title={notification.title} text={notification.description} />
        </CardDeprecated>
    )}
    />

  );

  if (notification.href) {
    return (
      <a
        className={cls.link}
        target="_blank"
        href={notification.href}
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
});
