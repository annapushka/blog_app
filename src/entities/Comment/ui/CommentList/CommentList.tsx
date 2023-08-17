import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            CommentList
        </div>
    );
});

export default CommentList;
