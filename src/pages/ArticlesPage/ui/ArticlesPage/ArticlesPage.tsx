import { ArticleList } from 'entities/Article';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { articlePageReducer, getArticles } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModulLoader, ReducersList } from 'shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return (
            <Page>
                {error}
            </Page>
        );
    }

    return (
        <DynamicModulLoader reducers={reducers} removeAfterUnmount={false}>
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={cls.list}
                onLoadNextPart={onLoadNextPart}
            />
        </DynamicModulLoader>

    );
};

export default memo(ArticlesPage);
