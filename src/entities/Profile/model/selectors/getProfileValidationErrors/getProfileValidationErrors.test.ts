import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidationErrors } from './getProfileValidationErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidationErrors.test', () => {
    test('should return profile validation errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.INCORRECT_COUNTRY,
                ],
            },
        };
        expect(getProfileValidationErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
    });
});
