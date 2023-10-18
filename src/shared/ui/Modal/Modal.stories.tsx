import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Художник-эксперт с компьютером всего лишь яйца в объёмный низкий ящик чохом фасовал. Из книги В. В. Шахиджаняна «Соло на клавиатуре»',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Художник-эксперт с компьютером всего лишь яйца в объёмный низкий ящик чохом фасовал. Из книги В. В. Шахиджаняна «Соло на клавиатуре»',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
