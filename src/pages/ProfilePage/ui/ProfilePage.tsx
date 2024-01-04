import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import VStack from '@/shared/ui/deprecated/Stack/VStack/VStack';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page data-testid="ProfilePage">
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
