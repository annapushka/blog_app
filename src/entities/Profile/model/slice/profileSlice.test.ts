import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
    const data = {
        first: 'Masha',
        lastname: 'Yagoda',
        age: 37,
        currency: Currency.GBP,
        country: Country.Azerbaijan,
        city: 'Saint P',
        username: 'admin',
    };

    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setRedonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: 'Banana',
            }),
        )).toEqual({
            form: {
                username: 'Banana',
            },
        });
    });
});
