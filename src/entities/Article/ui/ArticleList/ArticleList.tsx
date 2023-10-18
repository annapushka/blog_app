import { HTMLAttributeAnchorTarget, forwardRef, memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import List from 'rc-virtual-list';
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
    virtualized?: boolean;
}

interface Item {
    id: string;
}

// eslint-disable-next-line react/prop-types
const MyItem: React.FC<Item> = ({ id }, ref) => (
    <span
        ref={ref}
        style={{
            border: '1px solid gray',
            padding: '0 16px',
            height: 30,
            lineHeight: '30px',
            boxSizing: 'border-box',
            display: 'inline-block',
        }}
    >
        {id}
    </span>
);

// @ts-ignore
const ForwardMyItem = forwardRef(MyItem);

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
        virtualized = true,
    } = props;

    const { t } = useTranslation('article');

    const ref = useRef(null);

    const isList = view === ArticleView.LIST;

    if (!isLoading && !articles?.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }

    // const perentWidth = width;

    // const itemsPerRow = isList ? 1 : Math.floor(perentWidth / 330);
    // const rowCount = isList ? articles?.length : Math.ceil(articles.length / itemsPerRow);

    // const RowRender = () => {

    // const items = [];
    // const fromIndex = index * itemsPerRow;
    // const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
    // for (let i = fromIndex; i < toIndex; i += 1) {
    //     items.push(
    //         <ArticleListItem
    //             target={target}
    //             article={articles[i]}
    //             view={view}
    //             className={cls.card}
    //             key={`str${i}`}
    //         />
    //     );
    // }
    // return (
    //     <div key={key} className={cls.rowWrapper}>
    //         {items}
    //     </div>
    // );
    // };

    return (
        <div ref={ref}>
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {virtualized ? (
                    // <List
                    //     height={height}
                    //     rowCount={rowCount}
                    //     rowHeight={isList ? 500 : 330}
                    //     rowRenderer={rowRender}
                    //     width={width}
                    //     onScroll={onChildScroll}
                    //     isScrolling={isScrolling}
                    //     scrollTop={scrollTop}
                    //     autoHeight
                    //     autoWidth
                    // />
                    <List data={articles} height={isList ? 500 : 330} itemKey="id">
                        {(item, _, props) => <ForwardMyItem {...item} {...props} />}
                    </List>
                ) : (
                    articles.map((article) => (
                        <ArticleListItem
                            target={target}
                            article={article}
                            view={view}
                            className={cls.card}
                            key={article.id}
                        />
                    ))
                )}
            </div>
            <div className={classNames(cls.skeletonsWrapper, {}, [className, cls[view]])}>
                {isLoading && getSkeletons(view)}
            </div>
        </div>
    );
});

export default ArticleList;
