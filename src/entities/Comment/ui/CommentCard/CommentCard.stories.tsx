import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '@/shared/assets/tests/storybook.jpg';
import CommentCard from './CommentCard';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

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

const normalArgs = {
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

export const Normal = Template.bind({});
Normal.args = normalArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [FeaturesFlagsDecorator({ isAppRedesigned: true })];

export const Loading = Template.bind({});
Loading.args = {
  ...normalArgs,
  isLoading: true,
};
