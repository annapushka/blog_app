import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface LoginByUsernamePros {
    username: string;
    password: string;
}

export const lodinByUsername = createAsyncThunk<User, LoginByUsernamePros, {rejectValue: string}>(
    'users/fetchByIdStatus',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
