import { Navbar } from 'widjets/Navbar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { SideBar } from 'widjets/SideBar';


const App = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
