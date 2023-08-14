import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import Code from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;

        const { t } = useTranslation('article');

        const mods: Mods = {};

        return (
            <div className={classNames(cls.ArticleCodeBlockComponent, mods, [className])}>
                <Code>{block.code}</Code>
            </div>
        );
    },
);

export default ArticleCodeBlockComponent;
