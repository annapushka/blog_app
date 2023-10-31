import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/info.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/articles.svg';
import { SideBarItemType } from '../types/sidebar';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sideBarItemList: SideBarItemType[] = [
            {
                path: getRouteMain(),
                Icon: HomeIcon,
                text: 'Главная',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];

        if (userData) {
            sideBarItemList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Профиль',
                },
                {
                    path: getRouteArticles(),
                    Icon: ArticleIcon,
                    text: 'Статьи',
                },
            );
        }
        return sideBarItemList;
    },
);
