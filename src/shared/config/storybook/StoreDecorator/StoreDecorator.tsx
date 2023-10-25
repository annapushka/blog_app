/* eslint-disable fsd-01/public-api-imports */
// TODO
import { Story } from '@storybook/react';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slices/addCommentFormSlice';
import { profileReducer } from '@/features/EditableProfileCard';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModulLoader/DynamicModulLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
