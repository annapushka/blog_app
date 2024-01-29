import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarsRating.module.scss';
import { Icon as IconDeprecated } from '../Icon/Icon';
import StarIconDeprecated from '@/shared/assets/icons/star-filled.svg';
import StarIcon from '@/shared/assets/icons/starSelectedIcon.svg';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import Icon from '../../redesigned/Icon/Icon';

interface StarsRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const starts = [1, 2, 3, 4, 5];

export const StarsRating = memo((props: StarsRatingProps) => {
  const {
    className, onSelect, size = 30, selectedStars = 0,
  } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div
      className={classNames(toggleFeatures({
        name: 'isAppRedesigned',
        off: () => cls.StarsRating,
        on: () => cls.StarsRatingRedesigned,
      }), {}, [className])}
    >
      {starts.map((starNumber) => {
        const commonProps = {
          key: starNumber,
          height: size,
          className: classNames(
            cls.starIcon,
            { [cls.selected]: isSelected },
            [
              currentStarsCount >= starNumber
                ? cls.hovered
                : cls.normal,
            ],
          ),
          onMouseLeave: onLeave,
          onMouseEnter: onHover(starNumber),
          onClick: onClick(starNumber),
          'data-testid': `StarRating.${starNumber}`,
          'data-selected': currentStarsCount >= starNumber,
        };
        return (
          <ToggleFeatures
            key={starNumber}
            feature="isAppRedesigned"
            on={(
              <Icon
                clickable={!isSelected}
                Svg={StarIcon}
                {...commonProps}
              />
)}
            off={<IconDeprecated Svg={StarIconDeprecated} {...commonProps} />}
          />
        );
      })}
    </div>
  );
});
