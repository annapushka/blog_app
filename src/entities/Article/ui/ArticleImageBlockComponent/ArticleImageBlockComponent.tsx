import { memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    const mods: Mods = {};

    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, mods, [
          className,
        ])}
      >
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text text={block.title} align="center" />}
          off={<TextDeprecated text={block.title} align={TextAlign.CENTER} />}
        />
        )}
      </div>
    );
  },
);

export default ArticleImageBlockComponent;
