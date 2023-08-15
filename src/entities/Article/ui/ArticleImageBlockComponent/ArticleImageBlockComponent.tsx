import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

import { ArticleImageBlock } from 'entities/Article/model/types/article';
import Text, { TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;

        const mods: Mods = {};

        return (
            <div className={classNames(cls.ArticleImageBlockComponent, mods, [className])}>
                <img src={block.src} className={cls.img} alt={block.title} />
                {block.title && (
                    <Text text={block.title} align={TextAlign.CENTER} />
                )}
            </div>
        );
    },
);

export default ArticleImageBlockComponent;
