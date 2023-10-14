import { memo, useCallback, useMemo } from 'react';

import { Country } from '../../model/types/country';
import { ListBox } from 'shared/ui/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const countryOptions = useMemo(() => Object.entries(Country).map((val) => (
        { value: val[0], content: val[1] }
    )), []);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            value={value}
            items={countryOptions}
            defaultValue={Country.Russia}
            className={className}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top left"
        />
    );
});

export default CountrySelect;
