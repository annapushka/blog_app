import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors';
import { addCommentFormActions } from '../../slices/addCommentFormSlice';

export const sendComment = createAsyncThunk<
    Comment,
    void,
    ThunkConfig<string>
>(
    'addCommentForm/sendComment',
    async (_, thunkAPI) => {
        const {
            dispatch, rejectWithValue, extra: { api }, getState,
        } = thunkAPI;
        const userData = getUserAuthData(getState());
        const text = getAddCommentFormText(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(addCommentFormActions.setText('error'));

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
