import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ScrollToolBar } from './ScrollToolBar';

export default {
  title: 'features/ScrollToolBar',
  component: ScrollToolBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ScrollToolBar>;

const Template: ComponentStory<typeof ScrollToolBar> = (args) => <ScrollToolBar {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
