import { Dispatch } from '@reduxjs/toolkit';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { StateSchema } from '@/app/providers/StoreProvider';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

const data = {
  first: 'Masha',
  lastname: 'Yagoda',
  age: 37,
  currency: Currency.GBP,
  country: Country.Azerbaijan,
  city: 'Saint P',
  username: 'admin',
};

describe('validateProfileData.test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first name and last name', async () => {
    const result = validateProfileData({
      ...data,
      first: '',
      lastname: '',
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('without country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
