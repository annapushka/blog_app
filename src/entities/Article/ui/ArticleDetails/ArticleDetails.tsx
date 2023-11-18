import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import {
    DynamicModulLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Text, { TextAlign, TextSize } from '@/shared/ui/Text/Text';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import Avatar from '@/shared/ui/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import Icon from '@/shared/ui/Icon/Icon';
import HStack from '@/shared/ui/Stack/HStack/HStack';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import { ArticleBlockType } from '../../model/consts/consts';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import cls from './ArticleDetails.module.scss';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />
            );
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            if (id) {
                dispatch(fetchArticleById(id));
            }
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width="100%" height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={300} />
                <Skeleton className={cls.skeleton} width="100%" height={300} />
            </>
        );
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи')} />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </HStack>
                <VStack gap="4" max>
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        className={cls.title}
                        size={TextSize.L}
                    />
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                    <VStack>{article?.blocks.map(renderBlock)}</VStack>
                </VStack>
            </>
        );
    }

    return (
        <DynamicModulLoader reducers={reducers}>
            <VStack gap="32" className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModulLoader>
    );
});

export default ArticleDetails;
