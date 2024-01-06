import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  variant: 'outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Text',
  variant: 'outline',
  size: 'm',
};
export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  variant: 'outline',
  size: 'l',
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  variant: 'outline',
  size: 'xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '>',
  variant: 'outline',
  disabled: true,
};
