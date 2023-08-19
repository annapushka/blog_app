import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            CommentCard
        </div>
    );
});

export default CommentCard;
