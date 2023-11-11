import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page
            data-testid="ProfilePage"
            className={classNames(cls.ProfilePage, {}, [className])}
        >
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
