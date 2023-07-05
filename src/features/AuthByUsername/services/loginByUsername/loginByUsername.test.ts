import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('getLoginIsLoading.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('should return value', async () => {
        const userValue = {
            username: 'Banana',
            id: '1',
        };
        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: userValue,
        }));
        const action = loginByUsername({
            username: 'Banana',
            password: '1232',
        });
        const result = await action(dispatch, getState, undefined);
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
});
