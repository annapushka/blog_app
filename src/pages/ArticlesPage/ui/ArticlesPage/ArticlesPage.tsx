import { ArticleList } from 'entities/Article';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { articlePageReducer, getArticles } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModulLoader, ReducersList } from 'shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
    });

    return (
        <DynamicModulLoader reducers={reducers}>
            <div>
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModulLoader>

    );
};

export default memo(ArticlesPage);
