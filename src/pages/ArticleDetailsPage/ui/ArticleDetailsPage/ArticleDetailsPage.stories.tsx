import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

const article: Article = {
    id: '1',
    title: 'Мастер-класс',
    subtitle: 'Мастер-класс по архитектуре и паттернам',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_qrhKKJHv36QGgTrV4VILgRZZ7ta8s8n2Q&usqp=CAU',
    views: 1022,
    createdAt: '09.08.2023',
    user: {
        id: '1',
        username: 'XXXXX',
    },
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Цели интенсива',
            paragraphs: ['Разобрать приёмы проектирования, их применение в реальных приложениях. Ответить на вопросы "зачем" и "когда" какие приёмы стоит применять и какие проблемы они помогают решить на практике. Разобрать дизайн принципы SOLID, посмотрим как их соблюдение может улучшить качество приложений. Научиться "видеть" паттерны в существующем коде и эффективно с ними взаимодействовать. Научиться применять паттерны проектирования для решения повседневных задач.'],
        },
        {
            id: '2',
            type: ArticleBlockType.TEXT,
            paragraphs: ['По окончанию курсов вы получаете сертификат в электронном виде на русском и английском языках. Хотя сертификатам в нашей профессии обычно не придают значения. Главное - знания и умения, которые вы получите, если будете полноценно участвовать в интенсиве.'],
        },
        {
            id: '3',
            type: ArticleBlockType.IMAGE,
            src: 'https://i.pinimg.com/originals/c4/c1/81/c4c181834e3e02265e61ee8a450d3817.png',
            title: 'Рисунок 1',
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
    ],
};
export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
