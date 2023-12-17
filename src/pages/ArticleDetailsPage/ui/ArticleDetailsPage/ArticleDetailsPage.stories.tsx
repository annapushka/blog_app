import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Article, ArticleBlockType, ArticleType } from '@/entities/Article';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleImg from '@/shared/assets/tests/article.jpeg';
import CertificateImg from '@/shared/assets/tests/certificate.png';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => (
  <ArticleDetailsPage />
);

const article: Article = {
  id: '1',
  title: 'Мастер-класс',
  subtitle: 'Мастер-класс по архитектуре и паттернам',
  img: ArticleImg,
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
      paragraphs: [
        'Разобрать приёмы проектирования, их применение в реальных приложениях. Ответить на вопросы "зачем" и "когда" какие приёмы стоит применять и какие проблемы они помогают решить на практике. Разобрать дизайн принципы SOLID, посмотрим как их соблюдение может улучшить качество приложений. Научиться "видеть" паттерны в существующем коде и эффективно с ними взаимодействовать. Научиться применять паттерны проектирования для решения повседневных задач.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.TEXT,
      paragraphs: [
        'По окончанию курсов вы получаете сертификат в электронном виде на русском и английском языках. Хотя сертификатам в нашей профессии обычно не придают значения. Главное - знания и умения, которые вы получите, если будете полноценно участвовать в интенсиве.',
      ],
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
Normal.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  }),
  ThemeDecorator(Theme.DARK),
];
