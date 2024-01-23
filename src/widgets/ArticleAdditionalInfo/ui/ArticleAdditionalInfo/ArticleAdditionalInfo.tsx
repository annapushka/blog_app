import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleAdditionalInfo.module.scss';
import { User } from '@/entities/User';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import Button from '@/shared/ui/redesigned/Button/Button';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
}

export const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
  const {
    className,
    author,
    createdAt,
    views,
    onEdit,
  } = props;
  const { t } = useTranslation('article');

  return (
    <VStack
      gap="32"
      className={classNames(cls.ArticleAdditionalInfo, {}, [className])}
    >
      <HStack gap="8">
        <Avatar
          size={32}
          src={author.avatar}
        />
        <Text text={author.username} bold />
        <Text text={createdAt} />
      </HStack>
      <Button onClick={onEdit}>{t('Редактировать')}</Button>
      <Text text={t('{{count}} просмотров', { count: views })} />
    </VStack>
  );
});
