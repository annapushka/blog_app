import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUsername';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { getUserAuthData } from '@/entities/User';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import Text, { TextTheme } from '@/shared/ui/Text/Text';
import AppLink, { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import Icon from '@/shared/ui/Icon/Icon';
import BugIcon from '@/shared/assets/icons/bug.svg';
import HStack from '@/shared/ui/Stack/HStack/HStack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.appName}>
                    <Icon Svg={BugIcon} className={cls.appNameIcon} />
                    <Text title={t('BugoBlog')} theme={TextTheme.INVERTED} />
                </div>

                <AppLink
                    className={cls.createBtn}
                    to={getRouteArticleCreate()}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
});
