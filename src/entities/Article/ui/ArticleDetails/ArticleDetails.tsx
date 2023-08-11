import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

export const ArticleDetails = memo(
    (props: ArticleDetailsProps) => {
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

export default ArticleDetails;
