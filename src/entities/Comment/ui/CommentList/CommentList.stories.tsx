import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '@/shared/assets/tests/storybook.jpg';
import CommentList from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Комментарий 1',
            user: {
                id: '1',
                username: 'XXXXXX',
                avatar: Avatar,
            },
        },
        {
            id: '2',
            text: 'Комментарий 2',
            user: {
                id: '1',
                username: 'XXXXXX',
                avatar: Avatar,
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
