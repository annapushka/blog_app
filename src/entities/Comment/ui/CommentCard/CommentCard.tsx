import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import Avatar from 'shared/ui/Avatar/Avatar';
import Text from 'shared/ui/Text/Text';
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
            <div className={cls.header}>
                {comment?.user?.username
                    ? <Avatar size={30} src={comment?.user?.avatar} alt={comment?.user?.username} />
                    : null}
                <Text className={cls.username} title={comment?.user?.username} />
            </div>
            <Text className={cls.text} text={comment?.text} />
        </div>
    );
});

export default CommentCard;
