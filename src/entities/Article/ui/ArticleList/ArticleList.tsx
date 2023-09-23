import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import Text from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
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
        target,
    } = props;

    const { t } = useTranslation('article');

    const rowRenderer = ({
        index, isScrolling, key, style,
    }: ListRowProps) => {
        return (
            <div
                key={key}
                style={style}
            >
                <ArticleListItem
                    target={target}
                    article={articles[index]}
                    view={view}
                    className={cls.card}
                />
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height, width, registerChild, onChildScroll, isScrolling, scrollTop,
            }) => (
                <div ref={registerChild} className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                    <List
                        height={height ?? 700}
                        rowCount={articles.length}
                        rowHeight={700}
                        rowRenderer={rowRenderer}
                        width={width ? width - 80 : 700}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>

            )}
        </WindowScroller>
    );
});

export default ArticleList;
