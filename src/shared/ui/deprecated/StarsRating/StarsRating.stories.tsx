import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarsRating } from './StarsRating';

export default {
  title: 'shared/StarsRating',
  component: StarsRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StarsRating>;

const Template: ComponentStory<typeof StarsRating> = (args) => (
  <StarsRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
