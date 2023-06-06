import React, { Suspense, useState } from 'react';
import { Navbar } from 'widjets/Navbar';
import Modal from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { SideBar } from 'widjets/SideBar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    const [isOpend, setIsOpend] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={() => setIsOpend(true)}>Open modal</button>
                <Modal isOpen={isOpend} onClose={() => setIsOpend(false)} />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
