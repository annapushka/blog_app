import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  trigger: <Button>Open</Button>,
  items: [{ content: '123' }, { content: '1234' }, { content: '12345' }],
};
