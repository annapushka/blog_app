import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';
import clsRedesigned from './ArticleListItemRedesigned/ArticleListItemRedesigned.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';

const ArticleListItemSkeleton = memo(
  ({ className, view }: { className?: string; view: ArticleView }) => {
    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      off: () => SkeletonDeprecated,
      on: () => SkeletonRedesigned,
    });
    const Card = toggleFeatures({
      name: 'isAppRedesigned',
      off: () => CardDeprecated,
      on: () => CardRedesigned,
    });

    if (view === ArticleView.LIST) {
      return (
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card padding="16">
            <div className={cls.header}>
              <Skeleton height={30} width={30} border="50%" />
              <Skeleton
                width={150}
                height={16}
                className={cls.username}
              />
              <Skeleton
                width={150}
                height={16}
                className={cls.date}
              />
            </div>
            <Skeleton
              width={250}
              height={24}
              className={cls.title}
            />
            <Skeleton height={200} className={cls.img} />
            <div className={cls.footer}>
              <Skeleton width={200} height={36} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={(
          <div
            className={classNames(clsRedesigned.ArticleListItem, {}, [
              className,
              clsRedesigned[view],
            ])}
          >
            <Card className={clsRedesigned.card} border="round" padding="8">
              <Skeleton
                height={200}
                width={400}
                className={clsRedesigned.img}
              />
              <VStack className={clsRedesigned.info} gap="4">
                <Skeleton width={200} height={24} className={clsRedesigned.title} border="34px" />
                <VStack gap="4" className={clsRedesigned.footer} max>
                  <HStack justify="between" max>
                    <Skeleton width={120} height={24} border="34px" />
                    <Skeleton width={60} height={24} border="34px" />
                  </HStack>
                  <HStack gap="4">
                    <Skeleton width={60} height={24} border="34px" />
                  </HStack>
                </VStack>
              </VStack>
            </Card>
          </div>
        )}
        off={(
          <div
            className={classNames(cls.ArticleListItem, {}, [
              className,
              cls[view],
            ])}
          >
            <Card padding="16">
              <div className={cls.imageWrapper}>
                <Skeleton
                  height={200}
                  width="100%"
                  className={cls.img}
                />
              </div>
              <div className={cls.infoWrapper}>
                <Skeleton width={136} height={24} />
              </div>
              <Skeleton width={150} height={24} className={cls.title} />
            </Card>
          </div>
        )}
      />

    );
  },
);

export default ArticleListItemSkeleton;
