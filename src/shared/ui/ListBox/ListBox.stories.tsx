import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from '../ListBox/ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    items: [
        { value: '123', content: '123' },
        { value: '1234', content: '1234' },
        { value: '12345', content: '12345' },
        { value: '12345', content: '12345' },
    ],
    value: '123',
    label: 'Label',
};
