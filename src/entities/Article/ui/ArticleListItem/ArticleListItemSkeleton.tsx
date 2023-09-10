import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/Article/model/types/article';
import Card from 'shared/ui/Card/Card';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';

export const ArticleListItemSkeleton = memo(({ className, view }: { className?: string, view: ArticleView }) => {
    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border="50%" />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton height={200} width={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={136} height={24} />
                </div>
                <Skeleton width={150} height={24} className={cls.title} />
            </Card>
        </div>
    );
});

export default ArticleListItemSkeleton;
