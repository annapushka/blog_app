import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from '../Flex/Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

const children = (
  <>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </>
);

export const Row = Template.bind({});
Row.args = {
  children,
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children,
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  children,
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
  children,
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
  children,
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  gap: '32',
  children,
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  gap: '16',
  direction: 'column',
  children,
};
