import { ArticleList, ArticleView } from 'entities/Article';
import { articlePageReducer } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import React, { memo } from 'react';
import { ReducersList } from 'shared/lib/components/DynamicModulLoader/DynamicModulLoader';

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = () => (
    <div>
        <ArticleList
            isLoading={false}
            view={ArticleView.LIST}
            articles={[]}
        />
    </div>
);

export default memo(ArticlesPage);
