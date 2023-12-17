import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return data', () => {
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
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
