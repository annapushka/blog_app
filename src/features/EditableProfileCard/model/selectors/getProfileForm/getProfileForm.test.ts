import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return form data', () => {
        const data = {
            first: 'Masha',
            lastname: 'Yagoda',
            age: 37,
            currency: Currency.GBP,
            country: Country.Azerbaijan,
            city: 'Saint P',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
