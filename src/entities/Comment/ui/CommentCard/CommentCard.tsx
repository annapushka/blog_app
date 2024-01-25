import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text/Text';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink/AppLink';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonDeprecated,
    off: () => SkeletonRedesigned,
  });

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <Card className={cls.card} border="round" padding="16">
          <VStack
            data-testid="CommentCard.Content"
            gap="8"
            max
            className={classNames(cls.CommentCardRedesigned, {}, [className])}
          >
            <AppLink
              to={getRouteProfile(comment?.user?.id)}
            >
              <HStack gap="8">
                {comment?.user?.username ? (
                  <Avatar
                    size={30}
                    src={comment?.user?.avatar}
                    alt={comment?.user?.username}
                  />
                ) : null}
                <Text
                  text={comment?.user?.username}
                  bold
                />
              </HStack>

            </AppLink>
            <Text text={comment?.text} className={cls.textRedesigned} />
          </VStack>
        </Card>
      )}
      off={(
        <VStack
          data-testid="CommentCard.Content"
          gap="8"
          max
          className={classNames(cls.CommentCard, {}, [className])}
        >
          <AppLinkDeprecated
            to={getRouteProfile(comment?.user?.id)}
            className={cls.header}
          >
            {comment?.user?.username ? (
              <AvatarDeprecated
                size={30}
                src={comment?.user?.avatar}
                alt={comment?.user?.username}
              />
            ) : null}
            <TextDeprecated
              className={cls.username}
              title={comment?.user?.username}
            />
          </AppLinkDeprecated>
          <TextDeprecated className={cls.text} text={comment?.text} />
        </VStack>
      )}
    />
  );
});

export default CommentCard;
