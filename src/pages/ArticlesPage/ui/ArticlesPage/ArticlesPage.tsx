import { ArticleList, ArticleView } from 'entities/Article';
import React, { memo } from 'react';

const ArticlesPage = () => (
    <div>
        <ArticleList
            isLoading
            view={ArticleView.LIST}
            articles={[]}
        />
    </div>
);

export default memo(ArticlesPage);
