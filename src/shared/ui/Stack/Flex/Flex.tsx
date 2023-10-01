import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';

interface FlexProps {
    className?: string;
    children: React.ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
    } = props;
    return (
        <div className={classNames(cls.Flex, {}, [className])}>
            {children}
        </div>
    );
};

export default Flex;
