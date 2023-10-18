import { Dispatch } from '@reduxjs/toolkit';
import { userActions } from '@/entities/User';
import { StateSchema } from '@/app/providers/StoreProvider';
import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('getLoginIsLoading.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success login', async () => {
        const userValue = {
            username: 'Banana',
            id: '1',
        };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({
            data: userValue,
        }));
        const result = await thunk.callThunk({
            username: 'Banana',
            password: '1232',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('unsuccess login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({
            status: 403,
        }));
        const result = await thunk.callThunk({
            username: 'Banana',
            password: '1232',
        });
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
