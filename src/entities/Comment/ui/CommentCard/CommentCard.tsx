import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Avatar from '@/shared/ui/deprecated/Avatar/Avatar';
import Text from '@/shared/ui/deprecated/Text/Text';
import Skeleton from '@/shared/ui/deprecated/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink/AppLink';
import VStack from '@/shared/ui/deprecated/Stack/VStack/VStack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack
        data-testid="CommentCard.isLoading"
        gap="8"
        max
        className={classNames(cls.CommentCard, {}, [
          className,
          cls.loading,
        ])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton
            height={16}
            width={100}
            className={cls.username}
          />
        </div>
        <Skeleton height={50} width="100%" />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      data-testid="CommentCard.Content"
      gap="8"
      max
      className={classNames(cls.CommentCard, {}, [className])}
    >
      <AppLink
        to={getRouteProfile(comment?.user?.id)}
        className={cls.header}
      >
        {comment?.user?.username ? (
          <Avatar
            size={30}
            src={comment?.user?.avatar}
            alt={comment?.user?.username}
          />
        ) : null}
        <Text
          className={cls.username}
          title={comment?.user?.username}
        />
      </AppLink>
      <Text className={cls.text} text={comment?.text} />
    </VStack>
  );
});

export default CommentCard;
