import { toggleFeatures } from '@/shared/lib/features';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleBlock } from '../../model/types/article';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

export const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          className={toggleFeatures({ name: 'isAppRedesigned', off: () => cls.block, on: () => cls.blockRedesigned })}
          block={block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          key={block.id}
          className={toggleFeatures({ name: 'isAppRedesigned', off: () => cls.block, on: () => cls.blockRedesigned })}
          block={block}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          key={block.id}
          className={toggleFeatures({ name: 'isAppRedesigned', off: () => cls.block, on: () => cls.blockRedesigned })}
          block={block}
        />
      );
    default:
      return null;
  }
};
