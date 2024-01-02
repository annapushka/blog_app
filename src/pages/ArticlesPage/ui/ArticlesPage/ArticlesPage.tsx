import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Page } from '@/widgets/Page';
import {
  DynamicModulLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticlesPageError } from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import ArticlesInfiniteList from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { ArticlePageGreeting } from '@/features/ArticlePageGreeting';

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage = () => {
  const error = useSelector(getArticlesPageError);
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  if (error) {
    return <Page>{error}</Page>;
  }

  return (
    <DynamicModulLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} data-testid="ArticlesPage">
        <ArticlesPageFilters />
        <ArticlesInfiniteList />
        <ArticlePageGreeting />
      </Page>
    </DynamicModulLoader>
  );
};

export default memo(ArticlesPage);
