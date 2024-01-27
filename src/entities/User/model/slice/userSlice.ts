import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User, UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/theme';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        action.payload.id,
      );
      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        action.payload.features?.isAppRedesigned ? 'new' : 'old',
      );
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        saveJsonSettings.fulfilled,
        (state, action: PayloadAction<JsonSettings>) => {
          if (!state.authData) return;
          state.authData.jsonSettings = action.payload;
        },
      );
    builder
      .addCase(
        initAuthData.fulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.authData = payload;
          setFeatureFlags(payload.features);
          state._inited = true;
        },
      );
    builder
      .addCase(
        initAuthData.rejected,
        (state) => {
          state._inited = true;
        },
      );
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
