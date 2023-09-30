import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import Text from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import {
    List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { Article, ArticleView } from '../../model/types/article';

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

    const isList = view === ArticleView.LIST;

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <WindowScroller>
            {({
                height, width, registerChild, onChildScroll, isScrolling, scrollTop,
            }) => {
                const perentWidth = width;

                const itemsPerRow = isList ? 1 : Math.floor(perentWidth / 330);
                const rowCount = isList ? articles.length : Math.ceil(articles.length / itemsPerRow);

                const rowRender = ({ index, key }: ListRowProps) => {
                    const items = [];
                    const fromIndex = index * itemsPerRow;
                    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

                    for (let i = fromIndex; i < toIndex; i += 1) {
                        items.push(
                            <ArticleListItem
                                target={target}
                                article={articles[i]}
                                view={view}
                                className={cls.card}
                                key={`str${i}`}
                            />,
                        );
                    }

                    return (
                        <div key={key} className={cls.rowWrapper}>
                            {items}
                        </div>
                    );
                };

                return (
                    <div ref={registerChild} className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                        <List
                            height={height}
                            rowCount={rowCount}
                            rowHeight={isList ? 500 : 330}
                            rowRenderer={rowRender}
                            width={width}
                            onScroll={onChildScroll}
                            isScrolling={isScrolling}
                            scrollTop={scrollTop}
                            autoHeight
                            autoWidth
                        />
                        {isLoading && getSkeletons(view)}
                    </div>
                );
            }}
        </WindowScroller>
    );
});

export default ArticleList;
