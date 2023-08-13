import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;

        const { t } = useTranslation('article');

        const mods: Mods = {};

        return (
            <div className={classNames(cls.ProfileCard, mods, [className])}>
                111
            </div>
        );
    },
);

export default ArticleImageBlockComponent;
