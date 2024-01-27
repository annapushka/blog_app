import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Icon from '@/shared/ui/redesigned/Icon/Icon';
import ArrowUpIcon from '@/shared/assets/icons/circleupIcon.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Icon
      Svg={ArrowUpIcon}
      clickable
      onClick={onClick}
      className={classNames('', {}, [className])}
      width={32}
      height={32}
    />
  );
});
