import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableIconBaseProps extends IconBaseProps {
  clickable: true;
  onClick?: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconBaseProps;

export const Icon = (props: IconProps) => {
  const {
    className, Svg, width = 24, height = 24, clickable, ...otherProps
  } = props;

  const icon = (
    <Svg
      className={classNames(cls.Icon, {}, [
        className,
      ])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button type="button" onClick={props?.onClick} className={cls.button}>
        {icon}
      </button>
    );
  }
  return icon;
};

export default Icon;
