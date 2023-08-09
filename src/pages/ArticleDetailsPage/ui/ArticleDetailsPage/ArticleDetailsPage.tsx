import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = () => {
    const { t } = useTranslation('article');

    return (
        <div>
            {t('article')}
        </div>
    );
};

export default memo(ArticleDetailsPage);
