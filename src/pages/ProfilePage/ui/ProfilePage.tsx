import { classNames } from 'shared/lib/classNames/classNames';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => (
    <div className={classNames('', {}, [className])}>
        {1111}
    </div>
);

export default ProfilePage;
