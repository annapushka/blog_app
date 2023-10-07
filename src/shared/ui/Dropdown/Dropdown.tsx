import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment } from 'react';
import cls from './Dropdown.module.scss';
import VStack from '../Stack/VStack/VStack';

export interface DropdownItem {
    content: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: React.ReactNode;
}

export function Dropdown({ className, items, trigger }: DropdownProps) {
    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={cls.menu}>
                <VStack>
                    {items.map((item) => (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {({ active }) => (
                                <button
                                    disabled={item.disabled}
                                    type="button"
                                    onClick={item.onClick}
                                    className={classNames(
                                        cls.item,
                                        { [cls.active]: active },
                                    )}
                                >
                                    {item.content}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </VStack>

            </Menu.Items>
        </Menu>
    );
}
