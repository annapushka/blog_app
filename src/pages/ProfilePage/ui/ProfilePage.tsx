import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import VStack from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page className={classNames('', {}, [className])}>
                {t('Профиль не найден')}
            </Page>
        );
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
