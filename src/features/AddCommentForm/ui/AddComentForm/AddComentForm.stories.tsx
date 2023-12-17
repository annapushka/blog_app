import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AddComentForm from './AddComentForm';

export default {
  title: 'features/AddComentForm',
  component: AddComentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AddComentForm>;

const Template: ComponentStory<typeof AddComentForm> = (args) => (
  <AddComentForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  onSendComment: action('onSendComment'),
};
Normal.decorators = [StoreDecorator({})];
