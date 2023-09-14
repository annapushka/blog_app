import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from 'shared/ui/Tabs/Tabs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            value: 'Tab 1',
            content: 'Tab 1 content',
        },
        {
            value: 'Tab 2',
            content: 'Tab 2 content',
        },
        {
            value: 'Tab 3',
            content: 'Tab 3 content',
        },
    ],
    value: 'Tab 1',
    onTabClick: action('onTabClick'),
};
