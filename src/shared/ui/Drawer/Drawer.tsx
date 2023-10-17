import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { memo, ReactNode, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;
    const { theme } = useTheme();
    const [isClosing, setIsClosing] = useState(false);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const onCloseHandler = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose?.();
            setIsClosing(false);
        }, 300);
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme])}>
                <Overlay onClick={onCloseHandler} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
