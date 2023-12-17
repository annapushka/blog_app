import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Text from '@/shared/ui/Text/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';

import cls from './ArticleList.module.scss';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.GRID ? 12 : 3).fill(0).map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.GRID,
        target,
    } = props;

    const { t } = useTranslation('article');

    if (!isLoading && !articles?.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <>
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleList"
            >
                {articles.map((article) => (
                    <ArticleListItem
                        target={target}
                        article={article}
                        view={view}
                        className={cls.card}
                        key={article.id}
                    />
                ))}
            </div>
            <div
                className={classNames(cls.skeletonsWrapper, {}, [
                    className,
                    cls[view],
                ])}
            >
                {isLoading && getSkeletons(view)}
            </div>
        </>
    );
});

export default ArticleList;
