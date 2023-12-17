import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '@/shared/assets/tests/storybook.jpg';
import CommentCard from './CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    text: 'Комментарий 1',
    user: {
      id: '1',
      username: 'XXXXXX',
      avatar: Avatar,
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  comment: {
    id: '1',
    text: 'Комментарий 1',
    user: {
      id: '1',
      username: 'XXXXXX',
      avatar: Avatar,
    },
  },
  isLoading: true,
};
