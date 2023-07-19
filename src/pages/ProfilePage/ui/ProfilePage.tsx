import { classNames } from 'shared/lib/classNames/classNames';
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModulLoader, ReducersList } from 'shared/lib/components/DynamicModulLoader/DynamicModulLoader';
import { useSelector } from 'react-redux';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    return (
        <DynamicModulLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={data}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                />
            </div>
        </DynamicModulLoader>
    );
};

export default ProfilePage;
