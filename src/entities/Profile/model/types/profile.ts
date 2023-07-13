import { Country, Currency } from 'shared/const/common';

export interface Profile {
    first: string;
    lastName: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}
