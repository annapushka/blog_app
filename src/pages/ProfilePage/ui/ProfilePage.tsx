import { profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModulLoader, ReducersList } from 'shared/lib/components/DynamicModulLoader/DynamicModulLoader';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => (
    <DynamicModulLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames('', {}, [className])}>
            {1111}
        </div>
    </DynamicModulLoader>
);

export default ProfilePage;
