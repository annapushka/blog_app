import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className } = props;

        const { t } = useTranslation('article');

        const mods: Mods = {};

        return (
            <div className={classNames(cls.ProfileCard, mods, [className])}>
                111
            </div>
        );
    },
);

export default ArticleTextBlockComponent;
