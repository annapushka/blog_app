import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import { ArticleListItemProps } from '../ArticleListItem';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import Icon from '@/shared/ui/redesigned/Icon/Icon';
import { ArticleTextBlock } from '../../../model/types/article';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar';
import AppImage from '@/shared/ui/redesigned/AppImage/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton/Skeleton';
import ArticleTextBlockComponent from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import Button from '@/shared/ui/redesigned/Button/Button';
import EyeIcon from '@/shared/assets/icons/eyeIcon.svg';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const {
    className, article, view = ArticleView.GRID, target,
  } = props;
  const { t } = useTranslation('article');

  const userInfo = (
    <>
      <Avatar size={32} src={article.user.avatar} />
      <Text text={article.user.username} bold />
    </>
  );
  const views = (
    <HStack gap="8">
      <Icon Svg={EyeIcon} />
      <Text text={String(article.views)} className={cls.views} />
    </HStack>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <Card
        className={classNames(cls.ArticleListItemRedesigned, {}, [
          className,
          cls[view],
        ])}
        data-testid="ArticleListItem"
        padding="24"
      >
        <VStack gap="16">
          <HStack gap="8">
            {userInfo}
            <Text text={article.createdAt} />
          </HStack>
          <Text text={article.title} bold size="l" />
          <Text text={article.subtitle} size="m" />
          <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            alt={article.title}
            className={cls.img}
          />
          {textBlock && (
          <ArticleTextBlockComponent
            block={textBlock}
            className={cls.textBlock}
            key={textBlock.id}
          />
          )}
          <HStack max gap="8" justify="between">
            <AppLink
              target={target}
              to={getRouteArticleDetails(article.id)}
            >
              <Button variant="outline">
                {t('Читать далее')}
              </Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [
        className,
        cls[view],
      ])}
      data-testid="ArticleListItem"
    >
      <Card className={cls.card} border="round">
        <AppImage
          fallback={(
            <Skeleton
              height={200}
              width={400}
              className={cls.img}
            />
          )}
          src={article.img}
          alt={article.title}
          className={cls.img}
        />
        <VStack className={cls.info} gap="4">
          <Text text={article.title} className={cls.title} />
          <VStack gap="4" className={cls.footer} max>
            <HStack justify="between" max>
              <Text text={article.createdAt} className={cls.date} />
              {views}
            </HStack>
            <HStack gap="4">{userInfo}</HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  );
});
