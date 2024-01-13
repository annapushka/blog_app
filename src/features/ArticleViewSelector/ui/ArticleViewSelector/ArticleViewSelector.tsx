import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import GridIconDeprecated from '@/shared/assets/icons/grid.svg';
import ListIcon from '@/shared/assets/icons/listIcon.svg';
import GridIcon from '@/shared/assets/icons/squareIcon.svg';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import Icon from '@/shared/ui/redesigned/Icon/Icon';
import { Card } from '@/shared/ui/redesigned/Card/Card';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => GridIcon,
      off: () => GridIconDeprecated,
    }),
  },
  {
    view: ArticleView.LIST,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <Card
          className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
            className,
            cls[view],
          ])}
          border="round"
        >
          {viewTypes.map((viewType) => (
            <Icon
              Svg={viewType.icon}
              className={classNames('', {
                [cls.notSelected]: viewType.view !== view,
              })}
              clickable
              onClick={onClick(viewType.view)}
              width={30}
              height={30}
            />
          ))}
        </Card>
      )}
      off={(
        <div
          className={classNames(cls.ArticleViewSelector, {}, [
            className,
            cls[view],
          ])}
        >
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              theme={ButtonTheme.CLEAR}
              key={viewType.view}
              onClick={onClick(viewType.view)}
            >
              <IconDeprecated
                Svg={viewType.icon}
                className={classNames('', {
                  [cls.notSelected]: viewType.view !== view,
                })}
              />
            </ButtonDeprecated>
          ))}
        </div>
      )}
    />
  );
});
