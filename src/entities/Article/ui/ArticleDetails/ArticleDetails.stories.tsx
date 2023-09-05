import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import ArticleImg from 'shared/assets/tests/article.jpeg';
import CertificateImg from 'shared/assets/tests/certificate.png';
import ArticleDetails from './ArticleDetails';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

const article: Article = {
    id: '1',
    title: 'Мастер-класс',
    subtitle: 'Мастер-класс по архитектуре и паттернам',
    img: ArticleImg,
    views: 1022,
    createdAt: '09.08.2023',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'XXXXX',
    },
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
            src: CertificateImg,
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

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    articleDetails: {
        error: 'Some error',
    },
})];
