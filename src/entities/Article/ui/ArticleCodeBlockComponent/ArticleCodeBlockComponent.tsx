import { memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';
import Code from '@/shared/ui/redesigned/Code/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    const mods: Mods = {};

    return (
      <div
        className={classNames(cls.ArticleCodeBlockComponent, mods, [
          className,
        ])}
      >
        <Code text={block.code} />
      </div>
    );
  },
);

export default ArticleCodeBlockComponent;
