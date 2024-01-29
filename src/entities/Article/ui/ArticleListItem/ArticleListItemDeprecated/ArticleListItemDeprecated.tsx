import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemDeprecated.module.scss';
import { ArticleListItemProps } from '../ArticleListItem';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { Text } from '@/shared/ui/deprecated/Text/Text';
import { Icon } from '@/shared/ui/deprecated/Icon/Icon';
import { ArticleTextBlock } from '../../../model/types/article';
import { Card } from '@/shared/ui/deprecated/Card/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar/Avatar';
import AppImage from '@/shared/ui/redesigned/AppImage/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/Skeleton';
import ArticleTextBlockComponent from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/deprecated/AppLink/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import EyeIcon from '@/shared/assets/icons/eye.svg';

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
  const {
    className, article, view = ArticleView.GRID, target,
  } = props;
  const { t } = useTranslation('article');

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [
          className,
          cls[view],
        ])}
        data-testid="ArticleListItem"
      >
        <Card>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text
              text={article.user.username}
              className={cls.username}
            />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text text={article.title} className={cls.title} />
          {types}
          <div className={cls.imageWrapper}>
            <AppImage
              fallback={<Skeleton width="100%" height={250} />}
              src={article.img}
              alt={article.title}
              className={cls.img}
            />
          </div>
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
              key={textBlock.id}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              target={target}
              to={getRouteArticleDetails(article.id)}
            >
              <Button theme={ButtonTheme.OUTLINE}>
                {t('Читать далее')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
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
      <Card>
        <div className={cls.imageWrapper}>
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            src={article.img}
            alt={article.title}
            className={cls.img}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
