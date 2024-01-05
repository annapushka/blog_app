import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import HomeIconDeprecated from '@/shared/assets/icons/home.svg';
import AboutIconDeprecated from '@/shared/assets/icons/info.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/articles.svg';
import { SideBarItemType } from '../types/sidebar';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';

import HomeIcon from '@/shared/assets/icons/homePageIcon.svg';
import AboutIcon from '@/shared/assets/icons/aboutPageIcon.svg';
import ProfileIcon from '@/shared/assets/icons/avatarIcon.svg';
import ArticleIcon from '@/shared/assets/icons/articlesPageIcon.svg';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sideBarItemList: SideBarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => HomeIconDeprecated,
        on: () => HomeIcon,
      }),
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
      text: 'О сайте',
    },
  ];

  if (userData) {
    sideBarItemList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        text: 'Профиль',
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ArticleIconDeprecated,
          on: () => ArticleIcon,
        }),
        text: 'Статьи',
      },
    );
  }
  return sideBarItemList;
});
