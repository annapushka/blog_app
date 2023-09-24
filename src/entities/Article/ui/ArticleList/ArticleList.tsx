import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo, useState } from 'react';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import Text from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import ArticlesPageFilters from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticleList.module.scss';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void;
}

const Header = () => <ArticlesPageFilters />;

const getSkeletons = () => (
    new Array(3)
        .fill(0)
        .map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ArticleListItemSkeleton view={ArticleView.LIST} key={index} className={cls.card} />
        ))
);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.GRID,
        target,
        onLoadNextPart,
    } = props;

    const { t } = useTranslation('article');
    const [selectedArticleId, setSelectArticlesId] = useState(1);

    const renderArticle = (index: number, article: Article) => {
        return (
            <ArticleListItem
                target={target}
                article={article}
                view={view}
                className={cls.card}
                key={article.id}
                index={index}
            />
        );
    };

    const Footer = () => {
        if (isLoading) {
            return getSkeletons();
        }
        return null;
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (

        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {view === ArticleView.LIST ? (
                <Virtuoso
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    initialTopMostItemIndex={selectedArticleId}
                    components={{
                        Header,
                        Footer,
                    }}
                />
            ) : (
                <VirtuosoGrid />

            )}

        </div>
    );
});

export default ArticleList;
