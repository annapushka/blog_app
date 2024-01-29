import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { Button } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import HStack from '../../../../redesigned/Stack/HStack/HStack';
import Icon from '../../../Icon/Icon';
import ArrowIcon from '../../../../../assets/icons/arrowDownIcon.svg';

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox<T extends string>({
  items,
  className,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = 'bottom right',
  label,
}: ListBoxProps<T>) {
  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];
  const selectedItem = useMemo(() => items?.find((item) => item.value === value), [items, value]);
  return (
    <HStack gap="8">
      {label && <span>{`${label}:`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [
          className,
          popupCls.popup,
        ])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button
          as={Button}
          className={popupCls.trigger}
          variant="filled"
          addonRight={<Icon Svg={ArrowIcon} />}
        >
          {selectedItem?.content ?? defaultValue}
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.selected]: selected,
                    [popupCls.disabled]: item.disabled,
                  })}
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
