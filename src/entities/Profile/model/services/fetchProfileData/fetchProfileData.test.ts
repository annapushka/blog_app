import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

const data = {
    first: 'Masha',
    lastname: 'Yagoda',
    age: 37,
    currency: Currency.GBP,
    country: Country.Azerbaijan,
    city: 'Saint P',
    username: 'admin',
};

describe('fetchProfileData.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('unsuccess', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({
            status: 403,
        }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
