import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import Text from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import VStack from 'shared/ui/Stack/VStack/VStack';
import { useGetArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, error, data: articles } = useGetArticleRecommendationsList(4);
    if (isLoading || error) {
        return null;
    }

    return (
        <VStack gap="16" className={classNames('', {}, [className])}>
            <Text
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>
    );
});
