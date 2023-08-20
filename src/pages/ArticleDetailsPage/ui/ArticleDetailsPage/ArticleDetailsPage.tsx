import { ArticleDetails } from 'entities/Article';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import Text from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <CommentList comments={[
                {
                    id: '1',
                    text: 'comment 1',
                    user: { id: '1', username: 'user1', avatar: 'https://thispersondoesnotexist.com/' },
                },
                {
                    id: '2',
                    text: 'comment 2',
                    user: { id: '1', username: 'user1', avatar: 'https://thispersondoesnotexist.com/' },
                },

            ]}
            />
        </div>
    );
};

export default memo(ArticleDetailsPage);
