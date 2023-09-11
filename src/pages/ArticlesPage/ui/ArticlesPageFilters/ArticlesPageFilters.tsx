import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import {
    ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector,
} from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlePageActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder,
    getArticlesPageSort,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import Input from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import cls from './ArticlesPageFilters.module.scss';

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

        const onChangeView = useCallback((view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        }, [dispatch]);

        const onChangeOrder = useCallback((newOrder: SortOrder) => {
            dispatch(articlePageActions.setOrder(newOrder));
        }, [dispatch]);

        const onChangeSort = useCallback((newSort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(newSort));
        }, [dispatch]);

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
                    <Input placeholder={t('Поиск')} className={cls.input} />
                </div>
            </div>

        );
    },
);

export default ArticlesPageFilters;
