import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import Text from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ArticleList.module.scss';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => (
    new Array(view === ArticleView.GRID ? 12 : 3)
        .fill(0)
        .map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
        ))
);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.GRID,
    } = props;

    const { t } = useTranslation('article');

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} className={cls.card} key={article.id} />
    );
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});

export default ArticleList;
