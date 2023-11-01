import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import Input from '@/shared/ui/Input/Input';
import { SortOrder } from '@/shared/types';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import cls from './ArticlesPageFilters.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ArticleSortField, ArticleType, ArticleView,
} from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

interface ArticlesPageFiltersProps {
    className?: string;

}

export const ArticlesPageFilters = memo(
    (props: ArticlesPageFiltersProps) => {
        const { className } = props;
        const { t } = useTranslation('article');
        const dispatch = useAppDispatch();
        const view = useSelector(getArticlesPageView);
        const sort = useSelector(getArticlesPageSort);
        const order = useSelector(getArticlesPageOrder);
        const search = useSelector(getArticlesPageSearch);
        const type = useSelector(getArticlesPageType);

        const fetchData = useCallback(() => {
            dispatch(fetchArticlesList({ replace: true }));
        }, [dispatch]);

        const debouncedFetchData = useDebounce(fetchData, 500);

        const onChangeView = useCallback((view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        }, [dispatch]);

        const onChangeOrder = useCallback((newOrder: SortOrder) => {
            dispatch(articlePageActions.setOrder(newOrder));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        }, [dispatch, fetchData]);

        const onChangeSort = useCallback((newSort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(newSort));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        }, [dispatch, fetchData]);

        const onChangeSearch = useCallback((search: string) => {
            dispatch(articlePageActions.setSearch(search));
            dispatch(articlePageActions.setPage(1));
            debouncedFetchData();
        }, [dispatch, debouncedFetchData]);

        const onChangeType = useCallback((value: ArticleType) => {
            dispatch(articlePageActions.setType(value));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        }, [dispatch, fetchData]);

        return (

            <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
                <div className={cls.sortWrapper}>
                    <ArticleSortSelector
                        order={order}
                        sort={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelector view={view} onViewClick={onChangeView} />
                </div>
                <div className={cls.search}>
                    <Input
                        placeholder={t('Поиск')}
                        className={cls.input}
                        value={search}
                        onChange={onChangeSearch}
                    />
                    <ArticleTypeTabs
                        value={type}
                        onChangeType={onChangeType}
                        className={cls.tabs}
                    />
                </div>
            </div>

        );
    },
);

export default ArticlesPageFilters;
