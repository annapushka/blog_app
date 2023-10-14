import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import VStack from '../../../Stack/VStack/VStack';
import AppLink from '../../../AppLink/AppLink';

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
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};

export function Dropdown({
    className, items, trigger, direction = 'bottom right',
}: DropdownProps) {
    const menuClasses = [mapDirectionClass[direction]];
    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                <VStack>
                    {items.map((item, index) => {
                        const content = ({ active }: { active: boolean }) => (
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
                        );

                        if (item.href) {
                            return (
                                <Menu.Item
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={index}
                                    as={AppLink}
                                    to={item.href}
                                    disabled={item.disabled}
                                    className={cls.link}
                                >
                                    {content}
                                </Menu.Item>
                            );
                        }

                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    })}
                </VStack>
            </Menu.Items>
        </Menu>
    );
}
