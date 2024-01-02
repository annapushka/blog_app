/* eslint-disable react/no-unstable-nested-components */
import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetails } from '@/entities/Article';
import {
  DynamicModulLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { articleDetailsPageReducer } from '../../model/slices';
import cls from './ArticleDetailsPage.module.scss';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import Card from '@/shared/ui/Card/Card';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

  if (!id) {
    return null;
  }
  return (
    <DynamicModulLoader reducers={reducers}>
      <Page
        className={classNames(cls.ArticleDetailsPage, {}, [className])}
      >
        <div className={cls.articleWrapper}>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ToggleFeatures
            feature="isArticleRatingEnabled"
            on={<ArticleRating articleId={id} />}
            off={<Card>{t('Оценка статей скоро появится')}</Card>}
          />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </div>
      </Page>
    </DynamicModulLoader>
  );
};

export default memo(ArticleDetailsPage);
