import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
                className={cls.editButton}
            >
                {t('Редактировать')}
            </Button>
        </div>
    );
});

export default ArticleDetailsPageHeader;
