import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from 'shared/ui/Card/Card';
import Text from '../Text/Text';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="test" text="text text text" />,
};
