import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchCommentsByArticleById = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
    >(
        'articleDetails/fetchCommentsByArticleById',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            if (!articleId) return rejectWithValue('error');

            try {
                const response = await extra.api.get<Comment[]>('/comments', {
                    params: {
                        articleId,
                        _expand: 'user',
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
