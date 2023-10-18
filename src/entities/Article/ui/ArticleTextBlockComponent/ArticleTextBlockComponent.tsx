import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import Text from '@/shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation('article');

        const mods: Mods = {};

        return (
            <div className={classNames(cls.ProfileCard, mods, [className])}>
                {block.title && <Text title={t(block.title)} className={cls.title} />}
                {block.paragraphs.map((paragraph) => (
                    <Text text={paragraph} key={paragraph} className={cls.paragraph} />
                ))}
            </div>
        );
    },
);

export default ArticleTextBlockComponent;
