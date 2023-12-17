/* eslint-disable i18next/no-literal-string */
import React from 'react';
import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  first: 'Alex',
  lastname: 'Last',
  age: 22,
  currency: Currency.RUB,
  country: Country.Armenia,
  city: 'Yerevan',
  username: 'test',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: '1', username: 'test' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('EditableProfileCard', () => {
  test('Readonly mode should be switched', async () => {
    await componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );
    await expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton'),
    ).toBeInTheDocument();
  });

  test('Resetting values on cancellation', async () => {
    await componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.type(
      screen.getByTestId('ProfileCard.firstname'),
      'user',
    );
    await userEvent.type(
      screen.getByTestId('ProfileCard.lastname'),
      'user',
    );

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton'),
    );

    await expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
      'Alex',
    );
    await expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(
      'Last',
    );
  });

  test('PUT request should be sent', async () => {
    const mockPutREq = jest.spyOn($api, 'put');
    await componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton'),
    );

    await userEvent.type(
      screen.getByTestId('ProfileCard.firstname'),
      'user',
    );

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton'),
    );

    await expect(mockPutREq).toHaveBeenCalled();
  });
});
