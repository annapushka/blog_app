import React, { Suspense, useEffect } from 'react';
import { Navbar } from 'widjets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { SideBar } from 'widjets/SideBar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
