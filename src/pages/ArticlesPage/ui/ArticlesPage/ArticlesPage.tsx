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
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

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

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <StickyContentLayout
          left={<ViewSelectorContainer />}
          right={<FiltersContainer />}
          content={(
            <Page onScrollEnd={onLoadNextPart} data-testid="ArticlesPage">
              <ArticlesInfiniteList />
              <ArticlePageGreeting />
            </Page>
        )}
        />

      )}
      off={(
        <Page onScrollEnd={onLoadNextPart} data-testid="ArticlesPage">
          <ArticlesPageFilters />
          <ArticlesInfiniteList />
          <ArticlePageGreeting />
        </Page>
      )}
    />
  );

  return (
    <DynamicModulLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModulLoader>
  );
};

export default memo(ArticlesPage);
