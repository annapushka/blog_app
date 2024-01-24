import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text/Text';

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
        {block.title && (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<Text title={t(block.title)} className={cls.title} />}
            off={<TextDeprecated title={t(block.title)} className={cls.title} />}
          />
        )}
        {block.paragraphs.map((paragraph) => (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={(
              <Text
                text={paragraph}
                key={paragraph}
                className={cls.paragraph}
              />
            )}
            off={(
              <TextDeprecated
                text={paragraph}
                key={paragraph}
                className={cls.paragraph}
              />
            )}
          />
        ))}
      </div>
    );
  },
);

export default ArticleTextBlockComponent;
