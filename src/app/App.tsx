import React, { Suspense, useState } from 'react';
import { Navbar } from 'widjets/Navbar';
import Modal from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { SideBar } from 'widjets/SideBar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();

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
