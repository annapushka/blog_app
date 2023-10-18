import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/info.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/articles.svg';
import { SideBarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sideBarItemList: SideBarItemType[] = [
            {
                path: RoutePath.main,
                Icon: HomeIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];

        if (userData) {
            sideBarItemList.push(
                {
                    path: `${RoutePath.profile}/${userData.id}`,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticleIcon,
                    text: 'Статьи',
                },
            );
        }
        return sideBarItemList;
    },
);
