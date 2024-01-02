import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernamePros {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernamePros,
    ThunkConfig<string>
>(
  'users/fetchByIdStatus',
  async (authData, { dispatch, rejectWithValue, extra: { api } }) => {
    try {
      const response = await api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error();
      }
      dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
