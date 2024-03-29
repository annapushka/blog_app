import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from '@/entities/Article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import { useGetArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const {
      isLoading,
      error,
      data: articles,
    } = useGetArticleRecommendationsList(4);
    if (isLoading || error || !articles) {
      return null;
    }

    return (
      <VStack
        data-testid="ArticleRecommendationsList"
        gap="16"
        className={classNames(cls.ArticleRecommendationsList, {}, [
          className,
        ])}
      >
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={t('Рекомендуем')} />}
          off={<TextDeprecated title={t('Рекомендуем')} />}
        />
        <ArticleList
          articles={articles}
          target="_blank"
          className={cls.list}
        />
      </VStack>
    );
  },
);
