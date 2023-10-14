import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const items = [
    { value: '123', content: '123' },
    { value: '1234', content: '1234' },
    { value: '12345', content: '12345' },
    { value: '12345', content: '12345' },
];

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items,
    value: '123',
    label: 'Label',
    direction: 'bottom left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items,
    value: '123',
    label: 'Label',
    direction: 'bottom right',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    items,
    value: '123',
    label: 'Label',
    direction: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    items,
    value: '123',
    label: 'Label',
    direction: 'top right',
};
