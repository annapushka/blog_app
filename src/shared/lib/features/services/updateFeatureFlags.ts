import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { UpdateFeatureFlagsOptions, featureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags } from '../lib/setGetFeatures';

export const updateFeatureFlags = createAsyncThunk<
    void,
    UpdateFeatureFlagsOptions,
    ThunkConfig<string>
>('user/saveJsonSettings', async ({ userId, features: newFeatures }, thunkApi) => {
  const { dispatch } = thunkApi;

  try {
    await dispatch(
      featureFlagsMutation({
        userId,
        features: {
          ...getAllFeatureFlags(),
          ...newFeatures,
        },
      }),
    );
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
});
