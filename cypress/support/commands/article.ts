/* eslint-disable max-len */

import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Основы 1С-разработки',
    subtitle: 'Создаём базу данных для торгового предприятия',
    img: 'https://курс1с.рф/wp-content/uploads/2022/12/g3_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-1.png',
    views: 1258,
    createdAt: '01.08.2022',
    userId: '1',
    type: [
        'IT',
        'OTHER',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            paragraphs: [
                'Вы познакомитесь с профессией 1С-разработчика, на практике научитесь создавать основные объекты системы 1С, составлять «проводки» документов по регистрам и формировать отчёты. С нуля создадите базу данных для торгового предприятия.',
            ],
        },
        {
            id: '2',
            type: 'TEXT',
            paragraphs: [
                '1С-разработчик — это специалист, который автоматизирует деятельность предприятия: рассчитывает зарплаты, ведёт документацию, учитывает выпуск товаров.',
            ],
        },
    ],
};

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: {
            Authorization: 'test',
        },
        body: article ?? defaultArticle,
    }).then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: {
            Authorization: 'test',
        },
    });
};

declare global {
    namespace Cypress {
      interface Chainable {
        createArticle(article?: Article): Chainable<Article>;
        removeArticle(articleId: string): Chainable<void>;
      }
    }
  }
