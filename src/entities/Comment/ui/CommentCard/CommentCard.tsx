import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            CommentCard
        </div>
    );
});

export default CommentCard;
