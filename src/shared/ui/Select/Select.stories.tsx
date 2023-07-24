import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select city',
    options: [
        { value: '1', content: 'Moscow' },
        { value: '2', content: 'SPb' },
        { value: '3', content: 'Kiev' },
        { value: '4', content: 'Minsk' },
    ],
};
