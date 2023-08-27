import { Article, ArticleList } from 'entities/Article';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = () => {
    const { t } = useTranslation('article');

    return (
        <div>
            <ArticleList articles={[
                {
                    id: '1',
                    title: 'Мастер-класс',
                    subtitle: 'Мастер-класс по архитектуре и паттернам',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_qrhKKJHv36QGgTrV4VILgRZZ7ta8s8n2Q&usqp=CAU',
                    views: 1022,
                    createdAt: '09.08.2023',
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
                },
            ] as Article[]}
            />
        </div>
    );
};

export default memo(ArticlesPage);
