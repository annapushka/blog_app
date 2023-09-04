import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import ArticleList from './ArticleList';

const article = {
    id: '1',
    title: 'Мастер-класс',
    subtitle: 'Мастер-класс по архитектуре и паттернам',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_qrhKKJHv36QGgTrV4VILgRZZ7ta8s8n2Q&usqp=CAU',
    views: 1022,
    createdAt: '09.08.2023',
    user: {
        id: '1',
        username: 'XXXXX',
        avatar: 'https://thispersondoesnotexist.com/',
    },
    type: [
        'IT',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Цели интенсива',
            paragraphs: [
                'Разобрать приёмы проектирования, их применение в реальных приложениях. Ответить на вопросы "зачем" и "когда" какие приёмы стоит применять и какие проблемы они помогают решить на практике. Разобрать дизайн принципы SOLID, посмотрим как их соблюдение может улучшить качество приложений. Научиться "видеть" паттерны в существующем коде и эффективно с ними взаимодействовать. Научиться применять паттерны проектирования для решения повседневных задач.',
            ],
        },
        {
            id: '2',
            type: 'TEXT',
            paragraphs: [
                'По окончанию курсов вы получаете сертификат в электронном виде на русском и английском языках. Хотя сертификатам в нашей профессии обычно не придают значения. Главное - знания и умения, которые вы получите, если будете полноценно участвовать в интенсиве.',
            ],
        },
        {
            id: '3',
            type: 'IMAGE',
            src: 'https://i.pinimg.com/originals/c4/c1/81/c4c181834e3e02265e61ee8a450d3817.png',
            title: 'Рисунок 1',
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
    ],
} as Article;

export default {
    title: 'entities/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const LoadingList = Template.bind({});
LoadingList.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.LIST,
};

export const List = Template.bind({});
List.args = {
    articles: new Array(16).fill(0)
        .map((item, index) => ({ ...article, id: index.toString() })) as Article[],
    view: ArticleView.LIST,
};

export const LoadingGrid = Template.bind({});
LoadingGrid.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.GRID,
};

export const Grid = Template.bind({});
Grid.args = {
    articles: new Array(16).fill(0)
        .map((item, index) => ({ ...article, id: index.toString() })) as Article[],
    view: ArticleView.GRID,
};