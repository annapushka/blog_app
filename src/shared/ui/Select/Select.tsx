import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectProps {
    className?: string;
    label?: string;
}

export const Select = ({ className, label }: SelectProps) => {
    const mods: Mods = {};
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            <select>
                <option>1</option>
                <option>2</option>
            </select>
            {label && <span className={cls.label}>{label}</span>}
        </div>
    );
};

export default Select;
